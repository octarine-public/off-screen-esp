// AUTO-GENERATED - do not edit.
declare class modifier_viper_viper_strike_slow extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	/**
	 * Viper Strike's slow is what ticks on the unit by itself - its ability's damage over time
	 * (`Ability.DamageOverTime`) - as the game's server has it (`CDOTA_Modifier_Viper_ViperStrike_Slow`).
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get IsPurgable(): boolean
}
