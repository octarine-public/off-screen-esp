// AUTO-GENERATED - do not edit.
declare class largo_frogstomp extends Ability {
	/** The froglings stomp the area round where they land. */
	public GetBaseAOERadiusForLevel(level: number): number
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The froglings stomp `delay` after they land and every `stomp_interval` after, `total_ticks`
	 * times, `damage_per_stomp` each at the units within `radius`; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
