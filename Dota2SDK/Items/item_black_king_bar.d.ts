// AUTO-GENERATED - do not edit.
declare class item_black_king_bar extends Item implements IShield {
	public readonly ShieldModifierName = "modifier_black_king_bar_immune"
	/** Its debuff immunity goes on its caster: a shield of the caster's side. */
	public IsShield(): this is IShield
	public get CurrentCharges(): number
	public set CurrentCharges(_newVal: number)
	public get AppliesUnitState(): bigint
	/**
	 * Its immunity takes `spell_reduce` percent off every magical blow while it stands - a magic
	 * resistance bonus, the spells that do not pierce it hurting all the same: a barrier with no end
	 * taking that share (`BarrierShare`).
	 */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	public get BarrierShare(): number
	/**
	 * Its immunity takes no pure damage of a spell that does not pierce it - Whirling Death's; one
	 * that does - Brain Sap's - hurts whole.
	 */
	public GuardsDamageOf(type: DAMAGE_TYPES, pierces?: boolean): boolean
	/** Its debuff immunity carries its bearer through the enemy's controls into a fight. */
	public get IsCombatBuff(): boolean
	/** Its cast lays a basic dispel on its caster. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
