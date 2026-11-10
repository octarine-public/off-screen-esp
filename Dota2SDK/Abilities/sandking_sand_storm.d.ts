// AUTO-GENERATED - do not edit.
declare class sandking_sand_storm extends Ability {
	public get IsInvisibility(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The storm hurts the units within `sand_storm_radius` while it lasts (`AbilityDuration`):
	 * `sand_storm_damage` a second over each `damage_tick_rate`, the first a tick after it rises,
	 * none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
