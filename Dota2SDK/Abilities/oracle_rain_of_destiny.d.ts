// AUTO-GENERATED - do not edit.
declare class oracle_rain_of_destiny extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The rain deals its damage only as it ticks, on the enemies within `radius`: `damage` a second
	 * over each `tick_rate` for `duration`, the first as it lands, the last as it ends; none after
	 * a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
