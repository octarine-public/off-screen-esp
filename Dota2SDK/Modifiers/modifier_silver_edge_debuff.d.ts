// AUTO-GENERATED - do not edit.
declare class modifier_silver_edge_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The most the bearer walks at, as the game holds it: an absolute most of the move speed. */
	protected GetMoveSpeedAbsoluteMax(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
