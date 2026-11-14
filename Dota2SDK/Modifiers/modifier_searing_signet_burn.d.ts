// AUTO-GENERATED - do not edit.
declare class modifier_searing_signet_burn extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/**
	 * Game time the burn first came on the unit: another hit renews it, its ticks keep this time
	 * (`DamageTicks.KeepTime`).
	 */
	public get Origin(): number
	public IsDebuff(): this is IDebuff
	/** Its item's ticks, at the time of the first burn's. */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
