// AUTO-GENERATED - do not edit.
declare class modifier_ice_vortex extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The vortex ticks on the unit while it stays in: its ability's (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
