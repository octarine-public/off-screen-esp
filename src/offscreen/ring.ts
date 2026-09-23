const TAU = Math.PI * 2

/**
 * Where the health ring ends, whatever is left of it: twelve o'clock. Its start comes round
 * clockwise from there as the health runs out, the way the game's own buff icons drain and the
 * way cooldowns lays the time left on a round modifier.
 */
export const RingEnd = -Math.PI / 2
/** The whole ring, in the degrees what is left of it is counted in. */
export const RingDegrees = 360

/**
 * The band's width on screen: the width the menu asks for, in pixels at 1080p, scaled with the
 * screen and a pixel at least, so the thinnest ring stays a hairline rather than vanishing.
 */
export function RingBand(width: number, scale: number): number {
	return Math.max(Math.round(width * scale), 1)
}

/**
 * What is left of the ring for a health fraction, in whole degrees: nothing for none, and a
 * degree at least for any health at all, so a hero at a sliver still wears a mark of it.
 */
export function RingFilled(health: number): number {
	return health > 0 ? Math.max(1, Math.round(health * RingDegrees)) : 0
}

/** How far round the ring that many degrees of it run, in radians. */
export function RingSweep(filled: number): number {
	return (filled / RingDegrees) * TAU
}

/** Where a run of that many degrees starts, in radians: that far before twelve o'clock. */
export function RingStart(filled: number): number {
	return RingEnd - RingSweep(filled)
}
