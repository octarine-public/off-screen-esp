// AUTO-GENERATED - do not edit.
/**
 * Lotus Orb: a shell on the unit it is cast at for `active_duration` that sends back every targeted
 * spell landing on it meanwhile (`ReflectsTargetedSpells`, `Unit.LotusAt`), the spell taking the
 * unit all the same - unless it comes back as one that frees it (`SentBackFrees`: Dismember sent
 * back stuns Pudge, his channel breaks); cast on its caster, a basic dispel too.
 */
declare class item_lotus_orb extends Item {
	/** Cast on its caster, it lays a basic dispel on it. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
	public get ReflectsTargetedSpells(): boolean
	/** Its shell is a buff: no status resistance shortens it. */
	public get IsAffectedByStatusResistance(): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
