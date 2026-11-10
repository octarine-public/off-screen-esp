// AUTO-GENERATED - do not edit.
declare class modifier_bane_enfeeble_effect extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** Enfeeble ticks on the unit by itself: its ability's (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	protected GetCastRangeBonusPercentage(): [number, boolean]
	protected GetDamageOutgoingPercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
