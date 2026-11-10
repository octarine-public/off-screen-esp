// AUTO-GENERATED - do not edit.
declare class modifier_arc_warden_flux extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	/** Flux ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
}
