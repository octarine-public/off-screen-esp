// AUTO-GENERATED - do not edit.
declare class keeper_of_the_light_will_o_wisp extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The wisp strikes the units within `radius` each time it lights up: `on_count` times,
	 * `wisp_damage` each, the first `off_duration_initial` after it lands, then each
	 * `on_duration` and `off_duration` on; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
