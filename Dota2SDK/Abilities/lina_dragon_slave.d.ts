// AUTO-GENERATED - do not edit.
declare class lina_dragon_slave extends Ability implements INuke {
	public get EndRadius(): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * The wave crosses `dragon_slave_distance` in its `AbilityDuration` cut to whole ticks: the game
	 * sets its speed so, faster than `dragon_slave_speed`, which counts only without a duration.
	 */
	public GetBaseSpeedForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/** Slow Burn after the hit (`lina_slow_burn.BurnOf`). */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/** Each tick of Slow Burn deals its share of the hit (`lina_slow_burn.Share`). */
	public TickBonus(target: Unit): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
