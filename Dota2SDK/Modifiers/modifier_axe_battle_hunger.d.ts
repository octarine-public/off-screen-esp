// AUTO-GENERATED - do not edit.
declare class modifier_axe_battle_hunger extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public PostDataUpdate(): void
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	/** Battle Hunger ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
}
