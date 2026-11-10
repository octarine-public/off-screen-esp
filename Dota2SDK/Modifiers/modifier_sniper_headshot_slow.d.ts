// AUTO-GENERATED - do not edit.
declare class modifier_sniper_headshot_slow extends Modifier implements IDebuff {
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	public IsDebuff(): this is IDebuff
}
