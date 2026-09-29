import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import * as layout from "../src/lib/layout.ts"
import * as ring from "../src/offscreen/ring.ts"

const SIZE = 52
const BAND = ring.RingBand(2, 1)
/** The middle of the band: on the rim, the band lying inside the portrait's edge. */
const RADIUS = (SIZE - BAND) / 2
const STRIPS = 32

function load(file, imports, globals) {
	const exports = {}
	const compiled = ts.transpileModule(
		readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8"),
		{ compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React } }
	).outputText
	runInNewContext(compiled, {
		...globals,
		exports,
		require: name => {
			assert.ok(name in imports, `unexpected import: ${name}`)
			return imports[name]
		}
	})
	return exports
}

class Batch {
	constructor() {
		this.segments = []
	}
	Reset() {
		this.segments.length = 0
	}
	Segment(x1, y1, x2, y2) {
		this.segments.push([x1, y1, x2, y2])
		return true
	}
	Flush(element, stroke) {
		element.chain = {
			segments: this.segments.map(segment => [...segment]),
			color: stroke.color,
			thickness: stroke.thickness
		}
	}
}

function fixture(capsules, objective = false, dressed = {}, files = {}) {
	const MenuSDK = {
		CapsulesShaderSupported: capsules,
		ShaderSlotSegments: 40,
		SdfCircle: (fill, border = 0, rim = "", inset = 0) => ({
			decorator: `circle(${fill}|${border}|${rim}|${inset})`
		}),
		SdfShape: (radius, fill, border = 0, rim = "", inset = 0) => ({
			decorator: `shape(${radius}|${fill}|${border}|${rim}|${inset})`
		}),
		ResolveAsset: path => path,
		WritePx: (element, name, value) => (element.style[name] = value),
		WriteStyle: (element, name, value) => (element.style[name] = value),
		WriteFmt: (element, name, value, suffix) => (element.style[name] = `${value}${suffix}`),
		WriteShown: (element, shown) => (element.shown = shown),
		WritePlacement: (element, x, y, angle) => (element.placement = [x, y, angle]),
		WriteText: (element, text) => (element.text = text),
		WriteSizedArt: (element, path, width, height) => (element.art = [path, width, height]),
		ReleaseSizedArt() {},
		CChainBatch: Batch
	}
	const globals = {
		MenuSDK,
		__OCT_PACKAGE_ROOT__: "root",
		fread: path => files[path],
		React: {
			createElement(type, props) {
				if (typeof type === "function") {
					return type(props)
				}
				const element = { type, style: {} }
				props?.ref?.(element)
				return element
			}
		}
	}
	const paint = load("lib/paint.ts", {}, globals)
	const art = load("offscreen/art.ts", {}, globals)
	const overlay = load(
		"offscreen/overlay.tsx",
		{ "../lib/layout": layout, "../lib/paint": paint, "./art": art, "./ring": ring },
		globals
	)
	const elements = new Map()
	const handle = {
		Ref: name => element => {
			if (element === null || element === undefined) {
				elements.delete(name)
			} else {
				elements.set(name, element)
			}
		},
		Element: name => elements.get(name),
		Style() {}
	}
	// mounts the structure: a frame may only write to elements the structure declares
	overlay.OffscreenIndicator({ handle, objective })
	const dress = {
		version: 1,
		size: SIZE,
		fontSize: 11,
		fontWeight: 600,
		distanceOffset: 6,
		arrowSize: 18,
		ringWidth: BAND,
		distanceWidth: 50,
		distanceHeight: 16,
		distanceLine: 18,
		badgeLine: 22,
		artAspect: objective ? 1 : 16 / 9,
		artScale: objective ? 0.75 : 1,
		artLift: 0,
		badgeSize: 20,
		badgeFontSize: 12,
		showDistance: true,
		showRing: true,
		drain: !objective,
		blur: 6,
		fontFamily: "Stratum2",
		textColor: "#ffffff",
		distanceEffect: "none",
		scrim: "",
		scrimTop: 0,
		scrimHeight: 0,
		plate: false,
		badgeRaised: false,
		...dressed
	}
	const frame = {
		x: 100,
		y: 200,
		directionX: 1,
		directionY: 0,
		angle: 0,
		icon: "hero",
		distance: "3000",
		labelX: -40,
		labelY: 0,
		labelWidth: 28,
		health: 1,
		healthColor: "#00ff00",
		baseColor: "#ffffff",
		warningColor: "#ffb840",
		warning: false,
		badge: "",
		opacity: 1,
		veil: 0
	}
	return {
		element(name) {
			const element = elements.get(name)
			assert.ok(element !== undefined, `no element ${name}`)
			return element
		},
		has: name => elements.has(name),
		draw(health, color = "#00ff00", badge = "") {
			frame.health = health
			frame.healthColor = color
			frame.baseColor = color
			frame.badge = badge
			overlay.UpdateIndicator(handle, dress, frame)
		},
		veil(veil, blur = 6) {
			frame.veil = veil
			dress.blur = blur
			overlay.UpdateIndicator(handle, dress, frame)
		},
		move(x, y, labelX, labelY) {
			frame.x = x
			frame.y = y
			frame.labelX = labelX
			frame.labelY = labelY
			overlay.UpdateIndicator(handle, dress, frame)
		}
	}
}

/**
 * A Source 2 texture of four bytes a pixel, blue first, the way the game ships its hero icons: the
 * resource header, a block table naming the DATA block, the texture header and the one mip.
 * `paint(x, y)` answers each pixel as [r, g, b, a].
 */
function texture(width, height, paint) {
	const pixels = 68
	const buffer = new ArrayBuffer(pixels + width * height * 4)
	const view = new DataView(buffer)
	view.setUint32(0, pixels, true)
	view.setUint16(4, 12, true)
	// the block table at 16, and the one block in it: DATA at 28, 40 bytes long
	view.setUint32(8, 8, true)
	view.setUint32(12, 1, true)
	view.setUint32(16, 0x44415441, false)
	view.setUint32(20, 8, true)
	view.setUint32(24, 40, true)
	view.setUint16(48, width, true)
	view.setUint16(50, height, true)
	view.setUint8(54, 28)
	view.setUint8(55, 1)
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const [r, g, b, a] = paint(x, y)
			const at = pixels + (y * width + x) * 4
			view.setUint8(at, b)
			view.setUint8(at + 1, g)
			view.setUint8(at + 2, r)
			view.setUint8(at + 3, a)
		}
	}
	return buffer
}

/**
 * An icon drawn the way the game draws Ember Spirit's: the glyph high on its canvas, rows 2 to 17,
 * a black rim hanging under it to row 29, and a faint glow across the top two rows.
 */
const HIGH_ICON = texture(32, 32, (x, y) =>
	y < 2
		? [40, 40, 40, 255]
		: y <= 17 && x >= 8 && x <= 23
			? [230, 90, 40, 255]
			: y <= 29 && x >= 4 && x <= 27
				? [0, 0, 0, 255]
				: [0, 0, 0, 0]
)

function box(element) {
	const { left, top, width, height } = element.style
	return [left, top, width, height]
}

function onRim([x, y]) {
	assert.ok(Math.abs(Math.hypot(x, y) - RADIUS) < 1e-9, `(${x}, ${y}) is off the rim`)
}

function near([x, y], [wantX, wantY]) {
	assert.ok(
		Math.abs(x - wantX) < 1e-9 && Math.abs(y - wantY) < 1e-9,
		`(${x}, ${y}) is not (${wantX}, ${wantY})`
	)
}

const SIX = [0, RADIUS]
const NINE = [-RADIUS, 0]
const TWELVE = [0, -RADIUS]

test("the portrait fills the disc and a full ring is laid inside its edge", () => {
	const indicator = fixture(true)
	indicator.draw(1)
	assert.deepEqual(box(indicator.element("portraitBacking")), [-26, -26, 52, 52])
	assert.deepEqual(box(indicator.element("portraitClip")), [-26, -26, 52, 52])
	const portrait = indicator.element("portrait")
	assert.deepEqual(portrait.art, ["hero", 92, 52])
	assert.deepEqual(box(portrait), [-20, 0, 92, 52])
	const health = indicator.element("health")
	assert.equal(health.shown, true)
	// a pixel of quad each side, for the sdf circle's antialiased edge
	assert.deepEqual(box(health), [-27, -27, 54, 54])
	assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#00ff00|1)`)
	// nothing lies under the ring: where the health has gone the art stays bare
	assert.equal(indicator.has("track"), false)
	assert.equal(indicator.has("badge"), false)
	// the reading stands in its box and is set on the line the face asks for
	const distance = indicator.element("distance")
	assert.equal(distance.style.height, 16)
	assert.equal(distance.style["line-height"], 18)
	assert.equal(distance.style["font-family"], "Stratum2")
})

test("with the capsules shader what is left runs the rim from its start round to twelve", () => {
	const indicator = fixture(true)
	indicator.draw(1)
	indicator.draw(0.5, "#ffaa00")
	const health = indicator.element("health")
	const { segments, color, thickness } = health.chain
	assert.equal(color, "#ffaa00")
	assert.equal(thickness, BAND)
	assert.equal(segments.length, 20)
	near(segments[0].slice(0, 2), SIX)
	near(segments.at(-1).slice(2), TWELVE)
	for (let index = 0; index < segments.length; index++) {
		const [x1, y1, x2, y2] = segments[index]
		onRim([x1, y1])
		onRim([x2, y2])
		// a positive cross product turns clockwise on a screen whose y runs down
		assert.ok(x1 * y2 - y1 * x2 > 0, `segment ${index} runs clockwise`)
		if (index > 0) {
			near([x1, y1], segments[index - 1].slice(2))
		}
	}
	indicator.draw(0.25)
	near(health.chain.segments[0].slice(0, 2), NINE)
	indicator.draw(0)
	assert.equal(health.shown, false)
	indicator.draw(1)
	assert.equal(health.shown, true)
	assert.deepEqual(box(health), [-27, -27, 54, 54])
	assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#00ff00|1)`)
})

test("without the shader the strips walk the rim from the start round to twelve", () => {
	const indicator = fixture(false)
	indicator.draw(1)
	const health = indicator.element("health")
	assert.equal(health.shown, true)
	for (let index = 0; index < STRIPS; index++) {
		assert.equal(indicator.element(`arc${index}`).shown, false)
	}
	indicator.draw(0.5)
	assert.equal(health.shown, false)
	const reach = BAND / 2 + 1
	let tail = SIX
	for (let index = 0; index < STRIPS; index++) {
		const strip = indicator.element(`arc${index}`)
		assert.equal(strip.shown, index < STRIPS / 2, `strip ${index}`)
		if (!strip.shown) {
			continue
		}
		assert.equal(strip.style.decorator, `shape(${BAND / 2}|#00ff00|0||1)`)
		assert.equal(strip.style.height, BAND + 2)
		const [x, y, angle] = strip.placement
		const head = [x + 1, y + reach]
		near(head, tail)
		const turn = (angle * Math.PI) / 180
		const length = strip.style.width - 2
		tail = [head[0] + Math.cos(turn) * length, head[1] + Math.sin(turn) * length]
		onRim(tail)
	}
	near(tail, TWELVE)
})

test("an objective wears its glyph inside the disc, its ring whole and a badge for a count", () => {
	for (const capsules of [true, false]) {
		const indicator = fixture(capsules, true)
		indicator.draw(1, "#ee96cd", "3")
		assert.equal(indicator.has("track"), false)
		assert.equal(indicator.has("arc0"), false)
		const portrait = indicator.element("portrait")
		// three quarters of the disc, centred: 39 across, 6.5 in from the edge
		assert.deepEqual(portrait.art, ["hero", 39, 39])
		assert.deepEqual(box(portrait), [7, 7, 39, 39])
		const health = indicator.element("health")
		assert.equal(health.shown, true)
		assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#ee96cd|1)`)
		const badge = indicator.element("badge")
		assert.equal(badge.shown, true)
		assert.equal(badge.text, "3")
		// its centre on the rim at half past four
		const at = Math.round((SIZE / 2) * Math.SQRT1_2 - 10)
		assert.deepEqual(box(badge), [at, at, 20, 20])
		assert.equal(badge.style["line-height"], 22)
		assert.equal(badge.style.decorator, "shape(10|#181b20f2|1|#ee96cd|1)")
		indicator.draw(1, "#b084ff", "")
		assert.equal(badge.shown, false)
		assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#b084ff|1)`)
		assert.equal(indicator.element("pointer").style["image-color"], "#b084ff")
	}
})

test("going out of focus blurs every part under the anchor, never the anchor, and clears after", () => {
	for (const [capsules, objective] of [
		[true, false],
		[false, false],
		[true, true]
	]) {
		const indicator = fixture(capsules, objective)
		indicator.draw(1, "#ee96cd", objective ? "3" : "")
		const parts = [
			"portraitBacking",
			"portraitClip",
			"health",
			"plate",
			"distance",
			"pointer"
		]
		if (objective) {
			parts.push("badge")
		} else if (!capsules) {
			parts.push("arc0", "arc31")
		}
		// a sharp indicator wears no filter at all: one of zero still costs a layer
		for (const name of parts) {
			assert.equal(indicator.element(name).style.filter, undefined)
		}
		// half the way out of a 6px blur, in half-pixel steps
		indicator.veil(0.5)
		for (const name of parts) {
			assert.equal(indicator.element(name).style.filter, "blur(3px)")
		}
		assert.equal(indicator.element("anchor").style.filter, undefined)
		// a frame at the same step writes nothing again
		indicator.element("pointer").style.filter = "kept"
		indicator.veil(0.49)
		assert.equal(indicator.element("pointer").style.filter, "kept")
		indicator.veil(0.26)
		assert.equal(indicator.element("health").style.filter, "blur(1.5px)")
		// a blur past 16px stops there
		indicator.veil(1, 40)
		assert.equal(indicator.element("portraitClip").style.filter, "blur(16px)")
		indicator.veil(0)
		for (const name of parts) {
			assert.equal(indicator.element(name).style.filter, "none")
		}
	}
})

test("a reading at the bottom stands on a plate or a band, and sends the badge up to half past one", () => {
	const plain = fixture(true, true)
	plain.draw(1, "#ee96cd", "3")
	assert.equal(plain.element("plate").shown, false)
	assert.equal(plain.element("scrim").shown, false)
	const plated = fixture(true, true, { plate: true, badgeRaised: true })
	plated.draw(1, "#ee96cd", "3")
	const plate = plated.element("plate")
	assert.equal(plate.shown, true)
	// the reading and a margin each side, an even width, a pixel of quad all round
	assert.deepEqual(box(plate), [-21, -9, 42, 18])
	assert.deepEqual(plate.placement, plated.element("distance").placement)
	assert.equal(plate.style.decorator, "shape(8|#181b20f2|1|#ee96cd|1)")
	plated.draw(1, "#b084ff", "3")
	assert.equal(plate.style.decorator, "shape(8|#181b20f2|1|#b084ff|1)")
	const at = Math.round((SIZE / 2) * Math.SQRT1_2 - 10)
	const high = Math.round(-(SIZE / 2) * Math.SQRT1_2 - 10)
	assert.deepEqual(box(plated.element("badge")), [at, high, 20, 20])
	const banded = fixture(true, false, {
		scrim: "linear-gradient(x)",
		scrimTop: 30,
		scrimHeight: 22
	})
	banded.draw(1)
	const scrim = banded.element("scrim")
	assert.equal(scrim.shown, true)
	assert.deepEqual(box(scrim), [0, 30, SIZE, 22])
	assert.equal(scrim.style.decorator, "linear-gradient(x)")
	assert.equal(banded.element("plate").shown, false)
})

test("the reading keeps its place on the disc to the pixel wherever the indicator glides to", () => {
	const indicator = fixture(true, false, { plate: true })
	const distance = indicator.element("distance")
	const plate = indicator.element("plate")
	for (const y of [200, 200.3, 200.5, 200.7, 201.2]) {
		// half a pixel down from the middle of the band: it must not flip between rows as y moves
		indicator.move(100.4, y, 0, 15.5)
		assert.deepEqual(distance.placement, [0, 16, 0])
		assert.deepEqual(plate.placement, [0, 16, 0])
	}
})

test("art lifted clear of a reading at the bottom stands that much higher in the disc", () => {
	const indicator = fixture(true, true, { artLift: 5 })
	indicator.draw(1, "#ee96cd")
	// three quarters of the disc, 39 across, 6.5 in from the edge and five pixels up
	assert.deepEqual(box(indicator.element("portrait")), [7, 2, 39, 39])
})

test("art inside the disc is centred by what of it shows on the backing, not by its canvas", () => {
	const indicator = fixture(true, true, {}, { hero: HIGH_ICON })
	indicator.draw(1, "#ee96cd")
	// the glyph's middle stands 6 of 32 texels high, 7.3 of the 39 pixels the art is cut to;
	// neither the rim nor the glow counts, so the art comes down seven pixels from 6.5 in
	assert.deepEqual(box(indicator.element("portrait")), [7, 14, 39, 39])
	// and a lift clear of a reading comes on top of it
	const lifted = fixture(true, true, { artLift: 5 }, { hero: HIGH_ICON })
	lifted.draw(1, "#ee96cd")
	assert.deepEqual(box(lifted.element("portrait")), [7, 9, 39, 39])
})

test("a portrait filling the disc, and art that cannot be read, stand where their box does", () => {
	const portrait = fixture(true, false, {}, { hero: HIGH_ICON })
	portrait.draw(1)
	assert.deepEqual(box(portrait.element("portrait")), [-20, 0, 92, 52])
	const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 13, 0, 0, 0, 0])
	for (const file of [undefined, png.buffer, new ArrayBuffer(4)]) {
		const indicator = fixture(true, true, {}, { hero: file })
		indicator.draw(1, "#ee96cd")
		assert.deepEqual(box(indicator.element("portrait")), [7, 7, 39, 39])
	}
})
