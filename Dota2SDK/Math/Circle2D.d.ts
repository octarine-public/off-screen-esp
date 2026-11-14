// AUTO-GENERATED - do not edit.
/** A disc on the 2D plane. */
declare class Circle2D implements IShape2D {
	/** The disc's middle: the vector passed in, not a copy, so moving it moves the disc. */
	public readonly Center: Vector2
	/** How far the disc reaches from {@link Center}; a point at that distance is inside. */
	public Radius: number
	/**
	 * @example
	 * const area = new Circle2D(castPosition, ability.Radius)
	 */
	constructor(
	/** The disc's middle: the vector passed in, not a copy, so moving it moves the disc. */
	Center: Vector2, 
	/** How far the disc reaches from {@link Center}; a point at that distance is inside. */
	Radius: number)
	public Contains(point: Vector2): boolean
	public SignedDistance(point: Vector2): number
	/** True when the discs overlap or touch. */
	public Intersects(other: Circle2D): boolean
}
