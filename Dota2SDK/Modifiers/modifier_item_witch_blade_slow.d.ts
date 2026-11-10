// AUTO-GENERATED - do not edit.
declare class modifier_item_witch_blade_slow extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** It ticks on the unit by itself: its item's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Its item's ticks, keeping the time of the first hit's through renewals
	 * (`DamageTicks.KeepTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected OnAdded(): void
	protected UpdateSpecialValues(): void
}
