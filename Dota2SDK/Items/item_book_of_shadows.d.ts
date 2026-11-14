// AUTO-GENERATED - do not edit.
declare class item_book_of_shadows extends Item implements IShield {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public readonly ShieldModifierName = "modifier_item_book_of_shadows_buff"
	/** The unit it goes on - its caster or an ally - is hidden out of reach: a shield. */
	public IsShield(): this is IShield
	public get AppliesUnitState(): bigint
}
