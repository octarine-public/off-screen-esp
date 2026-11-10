// AUTO-GENERATED - do not edit.
declare class modifier_venomancer_venomous_gale extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	/** Venomous Gale ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
}
