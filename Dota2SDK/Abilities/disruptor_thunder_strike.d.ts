// AUTO-GENERATED - do not edit.
declare class disruptor_thunder_strike extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Its `strikes`, `strike_damage` each, every `strike_interval`, the first as it lands, the last
	 * as the modifier ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
