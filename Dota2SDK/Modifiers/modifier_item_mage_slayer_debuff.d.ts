// AUTO-GENERATED - do not edit.
declare class modifier_item_mage_slayer_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * Its item's ticks, keeping the time of the first hit's through renewals
	 * (`DamageTicks.KeepTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
