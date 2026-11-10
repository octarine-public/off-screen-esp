// AUTO-GENERATED - do not edit.
declare class modifier_phoenix_fire_spirit_burn extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The burn ticks on the unit by itself: its ability's (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
