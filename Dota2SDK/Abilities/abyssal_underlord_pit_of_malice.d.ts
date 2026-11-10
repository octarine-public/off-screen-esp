// AUTO-GENERATED - do not edit.
declare class abyssal_underlord_pit_of_malice extends Ability implements INuke {
	/** The pit stands `pit_duration`; a unit in it is rooted for `ensnare_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The pit strikes a unit inside it as it lands and every `pit_interval` while it stands
	 * (`pit_duration`): `pit_damage` each, none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
