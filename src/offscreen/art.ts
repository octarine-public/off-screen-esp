/**
 * Where the lit part of a texture's art stands in its own box, for art that sits inside the disc
 * with room around it. The game's hero icons are drawn for the minimap, each on a canvas of its
 * own and rimmed in black: the rim melts into the disc's dark backing, and what is left - the lit
 * part of the glyph - stands wherever its artist put it, a few texels high on some and low on
 * others. Centring the canvas then leaves the glyph off the middle of the ring, so the texture is
 * read out of the game's files once, the lit part of it measured, and the art moved by the
 * difference.
 *
 * The textures are Source 2 resources: a block table whose DATA block names the size and format,
 * with the pixels after it, mips smallest first and the full one last. Only the plain formats of
 * four bytes a pixel are read, which is what the hero icons are; anything else - a PNG of the
 * script's own, a block-compressed or LZ4-packed texture - is taken as centred.
 */

export interface ArtCentre {
	/** How far right and down of its box's middle the lit part's middle stands, as shares of the box. */
	readonly x: number
	readonly y: number
}

/** The formats the reader understands, as the texture header numbers them. */
const enum EFormat {
	RGBA8888 = 4,
	BGRA8888 = 28
}

/** The version of the resource header the reader knows. */
const RESOURCE_VERSION = 12
/** "DATA", as the block table writes it. */
const DATA_BLOCK = 0x44415441
/** The extra-data record that says the mips are LZ4-packed, which the reader does not unpack. */
const COMPRESSED_MIPS = 4
/** The disc's backing, #181b20, as a luminance: art no brighter than it cannot be told from it. */
const GROUND = luminance(0x18, 0x1b, 0x20)
/**
 * How much brighter than the backing a pixel stands, its alpha taken in, before it counts as lit:
 * enough to leave out the rim and the faint glow some icons carry around their glyph.
 */
const LIT = 16

const CENTRED: ArtCentre = { x: 0, y: 0 }
/** The centres measured, by path; art that could not be measured is kept as centred. */
const centres = new Map<string, ArtCentre>()

function luminance(r: number, g: number, b: number): number {
	return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Where the lit part of the art at `path` stands in its box, read once a path. */
export function ArtCentreOf(path: string): ArtCentre {
	let centre = centres.get(path)
	if (centre === undefined) {
		const bytes =
			path !== "" && typeof fread === "function" ? fread(path, true) : undefined
		centre = (bytes !== undefined ? MeasureArt(bytes) : undefined) ?? CENTRED
		centres.set(path, centre)
	}
	return centre
}

/**
 * The middle of the box around every lit pixel of a texture's full mip, against the middle of the
 * texture, or nothing for a texture the reader does not understand or one with nothing lit. The
 * mips are stored smallest first, so the full one is the last of the pixel data.
 */
export function MeasureArt(buffer: ArrayBuffer): Nullable<ArtCentre> {
	const length = buffer.byteLength
	if (length < 16) {
		return undefined
	}
	const view = new DataView(buffer)
	if (view.getUint16(4, true) !== RESOURCE_VERSION) {
		return undefined
	}
	const resourceSize = view.getUint32(0, true)
	const blockCount = view.getUint32(12, true)
	let block = 8 + view.getUint32(8, true)
	let data = -1
	let dataSize = 0
	for (let index = 0; index < blockCount; index++, block += 12) {
		if (block + 12 > length) {
			return undefined
		}
		if (view.getUint32(block, false) === DATA_BLOCK) {
			data = block + 4 + view.getUint32(block + 4, true)
			dataSize = view.getUint32(block + 8, true)
		}
	}
	if (data < 0 || dataSize < 40 || data + 40 > length) {
		return undefined
	}
	const width = view.getUint16(data + 20, true)
	const height = view.getUint16(data + 22, true)
	const format = view.getUint8(data + 26)
	if (format !== EFormat.RGBA8888 && format !== EFormat.BGRA8888) {
		return undefined
	}
	const extraCount = view.getUint32(data + 36, true)
	let extra = data + 32 + view.getUint32(data + 32, true)
	for (let index = 0; index < extraCount; index++, extra += 12) {
		if (extra + 12 > length) {
			return undefined
		}
		if (view.getUint32(extra, true) === COMPRESSED_MIPS) {
			return undefined
		}
	}
	const start = length - width * height * 4
	if (width === 0 || height === 0 || start < Math.max(data + dataSize, resourceSize)) {
		return undefined
	}
	const red = format === EFormat.BGRA8888 ? 2 : 0
	const blue = 2 - red
	let top = height
	let bottom = -1
	let left = width
	let right = -1
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const at = start + (y * width + x) * 4
			const lum = luminance(
				view.getUint8(at + red),
				view.getUint8(at + 1),
				view.getUint8(at + blue)
			)
			if ((view.getUint8(at + 3) / 255) * (lum - GROUND) > LIT) {
				top = Math.min(top, y)
				bottom = Math.max(bottom, y)
				left = Math.min(left, x)
				right = Math.max(right, x)
			}
		}
	}
	if (bottom < 0) {
		return undefined
	}
	return {
		x: (left + right + 1) / 2 / width - 0.5,
		y: (top + bottom + 1) / 2 / height - 0.5
	}
}
