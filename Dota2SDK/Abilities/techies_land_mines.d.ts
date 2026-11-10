// AUTO-GENERATED - do not edit.
/**
 * Proximity Mines: a mine planted at the point. The server turns a mine down within
 * `placement_radius` of another of its side's mines, or off walkable ground (`CanPlaceAt`).
 */
declare class techies_land_mines extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The explosion at a unit by the mine: its burn, `mres_reduction` percent off the unit's magic
	 * resistance, lands first - more by as much, unless the unit burns already. From the mine's
	 * point when `context` gives it (`IDamageContext.From`) the damage falls off with the unit's
	 * distance (`DamageShareAt`); without, the mine is reckoned on the unit.
	 */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	/**
	 * The share of the damage a unit `distance` from the mine takes of its full: all within
	 * `min_distance`, falling in a line to `outer_damage` percent at the edge of the explosion
	 * (`AOERadius`), none past it.
	 * @example
	 * const share = mines.DamageShareAt(point.Distance2D(enemy.Position))
	 */
	public DamageShareAt(distance: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** How near another mine of its side a mine may not go. */
	public get PlacementRadius(): number
	/**
	 * Whether a mine may go at `position`: on walkable ground, and with no mine of its owner's side
	 * within `PlacementRadius` of it, the mine's hull counted - the server turns any other down.
	 * @example
	 * const point = enemy.Position.Extend2D(hero.Position, 210)
	 * if (mines.CanPlaceAt(point)) {
	 * 	hero.CastPosition(mines, point)
	 * }
	 */
	public CanPlaceAt(position: Vector3): boolean
}
