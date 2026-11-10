// AUTO-GENERATED - do not edit.
declare class alchemist_acid_spray extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The acid hurts the units within `radius` while it lasts: `damage` a second over each
	 * `tick_rate`, the first as it lands, and on for half a second after a unit walks out - its
	 * debuff's half second, not in the data. The armor it takes off is not weighed before it lands.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
