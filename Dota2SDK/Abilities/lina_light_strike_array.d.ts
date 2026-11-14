// AUTO-GENERATED - do not edit.
declare class lina_light_strike_array extends Ability implements INuke {
	public get SkillShotType(): ESkillShotType
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
	/** Slow Burn after the hit (`lina_slow_burn.BurnOf`). */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/** Each tick of Slow Burn deals its share of the hit (`lina_slow_burn.Share`). */
	public TickBonus(target: Unit): number
}
