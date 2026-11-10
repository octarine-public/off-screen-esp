// AUTO-GENERATED - do not edit.
declare class modifier_pudge_rot extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	/**
	 * Rot ticks on the unit by itself while it is on it - renewed while the unit
	 * stays in the area: its ability's damage over time (`Ability.DamageOverTime`).
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
}
