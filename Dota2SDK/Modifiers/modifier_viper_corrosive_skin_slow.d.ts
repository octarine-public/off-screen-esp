// AUTO-GENERATED - do not edit.
declare class modifier_viper_corrosive_skin_slow extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	/** Corrosive Skin ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
}
