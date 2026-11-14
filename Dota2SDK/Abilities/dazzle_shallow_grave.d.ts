// AUTO-GENERATED - do not edit.
declare class dazzle_shallow_grave extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_dazzle_shallow_grave"
	public readonly ShieldModifierName = "modifier_dazzle_shallow_grave"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/** Its unit's health goes no lower than 1 (`MIN_HEALTH`): no invulnerability, a stun lands. */
	public get KeepsAlive(): boolean
}
