// AUTO-GENERATED - do not edit.
declare class modifier_furion_curse_of_the_forest extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The curse ticks on the unit by itself: its ability's (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
}
