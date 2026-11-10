// AUTO-GENERATED - do not edit.
/**
 * The cells a unit can reach within a time budget and when it arrives in each; the answer to
 * "where can the target be by then". Produced by `PathfinderSDK.Reachable`; `Within` cuts it to a
 * shorter time without searching again.
 */
declare class ReachableRegion {
	/** Cells reached. */
	public readonly Count: number
	/** How much longer an octile cell path runs at most than the straight line it stands in for: 8.2%. */
	public static readonly OctileSlack: number
	/** The farthest a point of a cell lies from its centre, in cells. */
	public static readonly HalfCellDiagonal: number
	constructor(grid: NavGrid, minGridX: number, minGridY: number, side: number, 
	/** One more than the place in `cells` of each cell of the window; 0 for one not reached. */
	ranks: Int32Array, 
	/** The cells reached, in the order the search reached them: by arrival. */
	cells: Int32Array, 
	/** Seconds until the unit can stand in each of `cells`. */
	arrivals: Float32Array, 
	/** Travel to each of `cells`, in cells. */
	costs: Float64Array, 
	/** The speed the region was searched at. */
	speed: number, 
	/** Cells reached. */
	Count: number)
	/**
	 * Cells of travel a unit walking at `speed` covers in `time` seconds on `grid`, as a reachable
	 * region counts them: a cell counts as reached when any point of it is in reach, so the budget
	 * carries the octile slack and half a cell diagonal. No farther than across the map: a unit long
	 * out of sight could be anywhere, and an unbounded budget asked for an array of billions of cells
	 * (19 October 2026).
	 */
	public static Budget(grid: NavGrid, time: number, speed: number): number
	/** Seconds until the unit can stand at `position`; `Infinity` outside the region. */
	public ArrivalTime(position: Vector2 | Vector3): number
	/** True when the unit can reach `position` within the budget. */
	public Contains(position: Vector2 | Vector3): boolean
	/**
	 * The part of the region the unit reaches within `time` seconds - the same cells a search for
	 * `time` finds, with the same arrivals: a search reaches its cells cheapest first, so the cells
	 * of a shorter time are the first of a longer one's. The whole region for a time it covers.
	 * @example
	 * const soon = region.Within(0.3)
	 */
	public Within(time: number): ReachableRegion
	/**
	 * Calls `visit` for every reached cell with its arrival time and centre, the soonest first; the
	 * centre vector is reused between calls.
	 */
	public ForEach(visit: (cell: number, arrival: number, center: Vector2) => void): void
	/**
	 * Share of the region a shape covers, `0..1`, each cell weighted by `weight` of its arrival
	 * time (uniform by default).
	 * @example
	 * const chance = region.Coverage(new Circle2D(castPosition, ability.Radius))
	 */
	public Coverage(shape: IShape2D, weight?: (arrival: number) => number): number
}
