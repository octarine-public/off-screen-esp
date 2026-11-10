// AUTO-GENERATED - do not edit.
declare class modifier_item_hydras_breath_poison extends Modifier {
	/** It ticks on the unit by itself: its item's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Its item's ticks, keeping the time of the first hit's through renewals
	 * (`DamageTicks.KeepTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected OnAdded(): void
}
