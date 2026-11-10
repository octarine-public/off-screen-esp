// AUTO-GENERATED - do not edit.
declare class enigma_midnight_pulse extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The pulse strikes the units within `radius` while it lasts (`duration`): `base_damage` and
	 * `damage_percent` percent of a unit's health a second over each `tick_rate`, the first a tick
	 * after it lands, the last as it ends; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
