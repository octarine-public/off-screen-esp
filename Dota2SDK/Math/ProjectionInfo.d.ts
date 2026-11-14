// AUTO-GENERATED - do not edit.
/** Result of projecting a point onto a line segment: the clamped point on the segment and the raw point on the infinite line. */
declare class ProjectionInfo {
	/** The projection held to the segment: an endpoint when {@link LinePoint} lies past it. */
	public SegmentPoint: Vector2
	/** The projection onto the line through the segment, which can lie past either endpoint. */
	public LinePoint: Vector2
	/**
	 * @param SegmentPoint the projection clamped to the segment's endpoints
	 * @param LinePoint the projection onto the infinite line (may lie outside the segment)
	 * @example
	 * const info = new ProjectionInfo(segPt, linePt)
	 */
	constructor(
	/** The projection held to the segment: an endpoint when {@link LinePoint} lies past it. */
	SegmentPoint: Vector2, 
	/** The projection onto the line through the segment, which can lie past either endpoint. */
	LinePoint: Vector2)
	/**
	 * True when the projection falls within the segment (i.e. clamped and line points coincide).
	 * @example
	 * if (info.IsOnSegment) { /* point projects between the endpoints *\/ }
	 */
	public get IsOnSegment(): boolean
}
