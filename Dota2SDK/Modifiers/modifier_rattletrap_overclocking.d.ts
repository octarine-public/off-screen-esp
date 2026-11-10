// AUTO-GENERATED - do not edit.
declare class modifier_rattletrap_overclocking extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** Its armor and attack speed hold while Clockwerk stands in his Power Cogs' bonuses. */
	protected GetPhysicalArmorTotalPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	/** Its speed holds while Battery Assault is on. */
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
