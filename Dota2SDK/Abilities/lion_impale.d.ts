// AUTO-GENERATED - do not edit.
declare class lion_impale extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public get SkillshotRange(): number
	public get IsConeShaped(): boolean
	/** The spikes fly `length_buffer` past the cast range. */
	public get Range(): number
	/**
	 * With the talent three spikes fan out from Lion, the outer two 15 degrees off the cast - a
	 * cone of 30 degrees, each spike `width` wide: the cast covers the cone as wide as a spike at
	 * him and wider the farther they go.
	 */
	public get EndRadius(): number
	/** Each spike of the cone is a line of its own, no wider at its end. */
	public get ProjectileEndRadius(): number
	/** The spikes strike where they are: no front runs ahead of them. */
	public get FrontLead(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
