// AUTO-GENERATED - do not edit.
declare class modifier_venomancer_noxious_plague_primary extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	/** The plague ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
}
