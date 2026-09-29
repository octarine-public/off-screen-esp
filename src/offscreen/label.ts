import { ELabelPosition } from "./menu"

/** What of an indicator's dress its reading is placed by. */
export interface LabelDress {
	readonly size: number
	/** The gap the text offset asks for, out from the ring or in from the edge. */
	readonly distanceOffset: number
	readonly distanceHeight: number
	readonly ringWidth: number
	readonly arrowSize: number
}

/**
 * How far past the rim the arrow's tail stands, as a share of its box: the box stands `0.42` of
 * itself (and 4px) out, and the glyph's back corners lie `0.28` of the box behind its middle.
 */
const ARROW_TAIL = 0.42 - 0.28
/** The room a plate keeps from the tail of an arrow pointing straight down. */
const PLATE_CLEARANCE = 2

/**
 * Where the distance reading stands, as an offset from the indicator's centre. Opposite the arrow
 * it is pushed out past the ring by the label's own extent along that direction, so a reading
 * beside the ring and one under it clear the edge by the same gap, and the arrow never runs
 * into it. Inside, it sits over the bottom of the portrait, the gap in from the edge. In the
 * middle it stands on the portrait's centre; on the band, just above the ring at the bottom.
 * A plate hangs on the bottom rim, over the ring, let down past it no further than the tail of
 * an arrow pointing straight down leaves room for.
 */
export function PlaceLabel(
	position: ELabelPosition,
	directionX: number,
	directionY: number,
	dress: Readonly<LabelDress>,
	width: number,
	out: [number, number]
): void {
	const half = dress.size / 2
	const gap = dress.distanceOffset
	const halfWidth = width / 2
	const halfHeight = dress.distanceHeight / 2
	switch (position) {
		case ELabelPosition.Below:
			out[0] = 0
			out[1] = half + gap + halfHeight
			return
		case ELabelPosition.Inside:
			out[0] = 0
			out[1] = Math.max(0, half - gap - halfHeight)
			return
		case ELabelPosition.Center:
			out[0] = 0
			out[1] = 0
			return
		case ELabelPosition.Band:
			out[0] = 0
			out[1] = Math.max(0, half - dress.ringWidth - halfHeight)
			return
		case ELabelPosition.Plate: {
			const tail = half + dress.arrowSize * ARROW_TAIL + 4 - PLATE_CLEARANCE
			out[0] = 0
			out[1] = Math.min(half - dress.ringWidth / 2, tail - halfHeight)
			return
		}
		default: {
			const reach =
				half +
				gap +
				Math.abs(directionX) * halfWidth +
				Math.abs(directionY) * halfHeight
			out[0] = -directionX * reach
			out[1] = -directionY * reach
		}
	}
}
