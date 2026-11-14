// AUTO-GENERATED - do not edit.
declare class modifier_winter_wyvern_cold_embrace extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * `heal_additive` and `heal_percentage` of its parent's maximum health a second, beyond the
	 * parent's regeneration.
	 */
	public get HealPerSecond(): number
	public get IsPurgable(): boolean
}
