// AUTO-GENERATED - do not edit.
interface CGridNav {
	readonly EdgeSize: number
	readonly Offset: Vector2
	readonly Size: Vector2
	readonly Min: Vector2
	readonly Max: Vector2
	/** Grows whenever a cell flag changes, so a consumer can tell a stale copy of the grid from a fresh one. */
	Version: number
	readonly UnitGridPos: Map<INavUnit, Vector2>
	IsInWorld(position: Vector3, buffer?: number): boolean
	IsTraversable(position: Vector3): boolean
	GetCellFlagsForPos(pos: Vector3 | Vector2): number
	GetCellFlagsForGridPos(gridPosX: number, gridPosY: number): number
	GetGridPosForPos(pos: Vector3 | Vector2): Vector2
	GetRectForGridPos(gridPosX: number, gridPosY: number): Rectangle
	UpdateUnitState(unit: INavUnit, deleteUnit: boolean): void
	UpdateTreeState(tree: INavTree): void
}
declare let GridNav: Nullable<CGridNav>
