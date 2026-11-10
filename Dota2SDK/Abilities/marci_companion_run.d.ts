// AUTO-GENERATED - do not edit.
/**
 * Rebound: Marci runs at the unit it is cast at (`move_speed`), bounces off it along the vector's
 * way, `max_jump_distance` at most, and lands with a stun around her (`landing_radius`). The unit
 * is another of her side - never Marci herself - and, with the Shard (`can_jump_off_allies`), an
 * enemy too: an order at the enemy Juggernaut went only with it (20 October 2026, the hero demo).
 */
declare class marci_companion_run extends Ability implements INuke {
	/**
	 * Whether she may bounce off an enemy - the Shard: the data names it `can_jump_off_allies`,
	 * an order at the enemy Juggernaut went with it, without it not (20 October 2026).
	 * @example
	 * if (rebound.JumpsOffEnemies) {
	 * 	// bounce off the target itself
	 * }
	 */
	public get JumpsOffEnemies(): boolean
	/** How far past the unit it is cast at she lands at most. */
	public get MaxJumpDistance(): number
	/**
	 * Seconds of her arc from the unit she bounces off to where she lands - the lob up to
	 * `min_height_above_highest` and down at `max_acceleration`: about 0.52 s; 0.50-0.53 s in the
	 * demo, off the target or 300 past it (20 October 2026). The stun is judged as she lands.
	 */
	public get HomingTime(): number
	public TargetTeamOf(data: AbilityData): DOTA_UNIT_TARGET_TEAM
	public CanTarget(unit: Unit): boolean
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	protected MeetsSpellBlock(): boolean
}
