/**
 * Hundredths of a pixel, for offsets that ride the transform path: precise enough to follow the
 * projection exactly, coarse enough that a still overlay repeats the same number and writes nothing.
 */
export function Fine(value: number): number {
	return Math.round(value * 100) / 100
}

/**
 * The whole pixel a thing lands on. Glyphs and the plates beside them snap to it together, so every
 * piece of one composite crosses the renderer's rounding threshold on the same frame.
 */
export function Snap(value: number): number {
	return Math.round(value)
}
