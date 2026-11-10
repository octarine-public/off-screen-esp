// AUTO-GENERATED - do not edit.
/**
 * Depth Shroud, Aghanim's Shard: a cloud at a point that puts the allies within its `radius` in
 * Shadow Dance for its `duration` - a buff (`modifier_slark_depth_shroud`, seen on Slark in the
 * demo, 21 October 2026): cast again on a unit in it, it is spent.
 */
declare class slark_depth_shroud extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_slark_depth_shroud"
	public IsBuff(): this is IBuff
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Slark - and the allies in the cloud - hidden, true sight or not (INVISIBLE, TRUESIGHT_IMMUNE). */
	public get AppliesUnitState(): bigint
	/** The hiding is our side's, not a hold of a target. */
	public get StatesOnCaster(): boolean
	public get IsInvisibility(): boolean
	public get HidesFromTrueSight(): boolean
}
