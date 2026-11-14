// AUTO-GENERATED - do not edit.
declare class slark_shadow_dance extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_slark_shadow_dance"
	public IsBuff(): this is IBuff
	/** Slark - and the allies in the cloud - hidden, true sight or not (INVISIBLE, TRUESIGHT_IMMUNE). */
	public get AppliesUnitState(): bigint
	/** The hiding is our side's, not a hold of a target. */
	public get StatesOnCaster(): boolean
	public get IsInvisibility(): boolean
	public get HidesFromTrueSight(): boolean
}
