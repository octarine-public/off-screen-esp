// AUTO-GENERATED - do not edit.
declare class ursa_enrage extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_ursa_enrage"
	public IsBuff(): this is IBuff
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Its cast lays a strong dispel on Ursa: stuns and hexes go too. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
