// AUTO-GENERATED - do not edit.
declare class modifier_orchid_malevolence_debuff extends GatheringModifier implements IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/**
	 * Soul Burn deals its parent, as it ends, `silence_damage_percent` of the damage it took
	 * meanwhile.
	 */
	protected get GatheredShare(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected UpdateSpecialValues(): void
}
