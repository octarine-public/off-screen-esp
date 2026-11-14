// AUTO-GENERATED - do not edit.
/**
 * Nature's Attendants: `wisp_count` wisps around Enchantress heal her and her allies within
 * `radius` of her, `heal` a second each, while it lasts - the healed carry no modifier of it.
 */
declare class modifier_enchantress_natures_attendants extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	/**
	 * The wisps' heal a second of `unit` - Enchantress or an ally of hers within `radius` of her:
	 * `heal` of each of the `wisp_count` wisps, beyond the unit's regeneration.
	 */
	public HealOf(unit: Unit): number
	public get IsPurgable(): boolean
}
