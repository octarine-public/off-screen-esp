import { ELabelPosition } from "./menu"

/**
 * Where the distance reading stands, as an offset from the indicator's centre. Opposite the arrow
 * it is pushed out past the ring by the label's own extent along that direction, so a reading
 * beside the ring and one under it clear the edge by the same gap, and the arrow never runs
 * into it. Inside, it sits over the bottom of the portrait, the gap in from the edge.
 */
export function PlaceLabel(
	position: ELabelPosition,
	directionX: number,
	directionY: number,
	half: number,
	gap: number,
	width: number,
	height: number,
	out: [number, number]
): void {
	const halfWidth = width / 2
	const halfHeight = height / 2
	switch (position) {
		case ELabelPosition.Below:
			out[0] = 0
			out[1] = half + gap + halfHeight
			return
		case ELabelPosition.Inside:
			out[0] = 0
			out[1] = Math.max(0, half - gap - halfHeight)
			return
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
