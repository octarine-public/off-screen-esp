// AUTO-GENERATED - do not edit.
declare class modifier_leshrac_decrepify_aura extends Modifier implements IBuff {
	protected readonly DeclaredEvents: EModifierfunction[]
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
