// AUTO-GENERATED - do not edit.
declare class lina_laguna_blade extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/** Slow Burn after the hit (`lina_slow_burn.BurnOf`). */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/** Each tick of Slow Burn deals its share of the hit (`lina_slow_burn.Share`). */
	public TickBonus(target: Unit): number
	public GetBaseActivationDelayForLevel(level: number): number
}
