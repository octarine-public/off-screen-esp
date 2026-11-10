// AUTO-GENERATED - do not edit.
declare class modifier_cold_feet extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public get Duration(): number
	public IsDebuff(): this is IDebuff
	protected UpdateSpecialValues(): void
	/** Cold Feet ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get IsPurgable(): boolean
}
