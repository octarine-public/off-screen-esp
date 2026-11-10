// AUTO-GENERATED - do not edit.
declare class queenofpain_sonic_wave extends Ability implements INuke {
	public get EndRadius(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The wave deals its damage only as it ticks, over the push it gives: `damage` split over each
	 * `tick_rate` of `knockback_duration`, the first as it hits, none as the push ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
}
