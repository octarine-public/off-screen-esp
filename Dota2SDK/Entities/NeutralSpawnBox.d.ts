// AUTO-GENERATED - do not edit.
declare class NeutralSpawnBox {
	public readonly properties: EntityPropertiesNode
	public readonly Angles: QAngle
	public readonly StackEnd: number
	public readonly StackStart: number
	public get MinBounds(): Vector3
	public get MaxBounds(): Vector3
	public get Center(): Vector3
	public get SpawnBoxOrigin(): Vector3
	public get CampType(): number
	public get CampName(): string
	/**
	 * The side whose jungle the camp stands in, by the map's name of it: `neutralcamp_good_*`
	 * Radiant's, `neutralcamp_evil_*` Dire's - but camp 10 of each, which the map names after the
	 * other side. Known without the camp's spawner entity, which a custom game may remove.
	 * @example
	 * const ours = GameRules.NeutralSpawnBoxes.filter(box => box.Team === GameState.LocalTeam)
	 */
	public get Team(): Team
	public Includes(vec: Vector3): boolean
	/** Whether the box holds the point on the ground plane; the height of a `Vector3` is ignored. */
	public Includes2D(vec: Vector2 | Vector3): boolean
	public toJSON(): any
	protected ParseStackData(stackName: string): string
	protected SetAngleEvil(): void
	protected SetAngleGood(): void
}
