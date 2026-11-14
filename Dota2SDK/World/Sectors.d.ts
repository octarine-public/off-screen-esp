// AUTO-GENERATED - do not edit.
/**
 * The sector graph the server's long pather searches once it is more than thirty cells from
 * the start: the grid cut into 16x16 sectors, a portal for every run of open cells along a
 * sector edge that face open cells across it, and the cost of walking inside the sector between
 * the midpoints of any two of its portals. Built from the static grid the way the server builds
 * it, from the walkable and tree bits alone. The sectors sit on multiples of sixteen in the
 * grid's own cell coordinates, not at its corner: the server rounds the grid's minimum down to
 * a sector boundary, so on a map whose minimum is not a multiple of sixteen the first row or
 * column of sectors is cut short.
 */
interface SectorGraph {
	SectorsX: number
	SectorsY: number
	PortalCount: number
	/** Sector index of each portal. */
	PortalSector: Int32Array
	/** Edge of each portal: 0 north, 1 east, 2 south, 3 west. */
	PortalEdge: Uint8Array
	/** Cell at the midpoint of each portal, on the sector's own edge. */
	PortalMid: Int32Array
	/** The cost per changed step axis the portal costs were walked with. */
	get DirectionCost(): number
	/** Sector index of a cell. */
	SectorOf(cell: number): number
	/** The portal of `sector` on `edge` that contains the cell `(x, y)`, or `NoPortal`. */
	PortalAt(sector: number, edge: number, x: number, y: number): number
	/** First index into the connection lists of `portal`. */
	ConnectionStart(portal: number): number
	/** One past the last index into the connection lists of `portal`. */
	ConnectionEnd(portal: number): number
	/** Walking cost from the portal to the connection's target portal, in server cost units. */
	ConnectionCost(index: number): number
	/** Target portal of a connection, on the same sector. */
	ConnectionTarget(index: number): number
	/** Lets go of the map's sectors and portals; `Build` makes them again for the next map grid. */
	Release(): void
	/**
	 * Rebuilds the graph for a grid of `width` by `height` cells whose `passable` byte is
	 * non-zero on open cells and whose first cell has the grid coordinates `(minX, minY)`;
	 * `directionCost` is what the server adds per axis whose step direction changes.
	 */
	Build(width: number, height: number, passable: Uint8Array, directionCost: number, minX: number, minY: number): void
	/**
	 * Brings the graph up to date after `cells` of the `passable` grid it was built from changed,
	 * rebuilding only the sectors that read them: the sector a cell lies in, and the neighbour
	 * whose edge portals look across at it. The result is the one a whole {@link Build} gives.
	 * A `directionCost` other than the one the graph was built with rebuilds every sector.
	 * @example
	 * sectors.Update(open, [treeCell], ConVarsSDK.GetInt(DirectionCostConvar, 1))
	 */
	Update(passable: Uint8Array, cells: readonly number[], directionCost: number): void
}
