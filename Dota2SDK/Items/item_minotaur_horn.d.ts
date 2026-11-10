// AUTO-GENERATED - do not edit.
/**
 * Minotaur Horn, a neutral item: Black King Bar's lesser avatar - a basic dispel and a debuff
 * immunity on its bearer for `duration`, `magic_resist` percent off every magical blow and no pure
 * damage of a spell that does not pierce it while it stands.
 */
declare class item_minotaur_horn extends Item implements IShield {
	/** The immunity lasts `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly ShieldModifierName = "modifier_minotaur_horn_immune"
	/** Its debuff immunity goes on its caster: a shield of the caster's side. */
	public IsShield(): this is IShield
	public get AppliesUnitState(): bigint
	/** Its cast lays a basic dispel on its caster. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
	/**
	 * Its immunity takes `magic_resist` percent off every magical blow while it stands: a barrier
	 * with no end taking that share (`BarrierShare`).
	 */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	public get BarrierShare(): number
	/**
	 * Its immunity takes no pure damage of a spell that does not pierce it - Whirling Death's; one
	 * that does - Brain Sap's - hurts whole.
	 */
	public GuardsDamageOf(type: DAMAGE_TYPES, pierces?: boolean): boolean
}
