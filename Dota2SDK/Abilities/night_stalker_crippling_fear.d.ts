// AUTO-GENERATED - do not edit.
declare class night_stalker_crippling_fear extends Ability {
	/** The silence lasts `duration_night` at night, `duration_day` by day. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The fear burns the units within `radius` of Night Stalker while it lasts - `duration_night`
	 * at night, `duration_day` by day: `dps` over each `tick_rate`, the first a tick after it
	 * begins, and on for half a second after a unit walks out - its debuff's half second, not in
	 * the data.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
