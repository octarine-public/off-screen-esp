// AUTO-GENERATED - do not edit.
/**
 * A segment swept by a disc: the area a projectile of `Radius` covers on its way from `Start` to
 * `End`, rounded at both ends.
 */
declare class Capsule2D extends Segment2D implements IShape2D {
	/** How far the capsule reaches from the segment `Start` to `End`, in every direction. */
	public Radius: number
	/**
	 * @example
	 * const hook = new Capsule2D(caster.Position, castPosition, hookWidth + target.HullRadius)
	 */
	constructor(start: Vector2, end: Vector2, 
	/** How far the capsule reaches from the segment `Start` to `End`, in every direction. */
	Radius: number)
	public Contains(point: Vector2): boolean
	public SignedDistance(point: Vector2): number
}
