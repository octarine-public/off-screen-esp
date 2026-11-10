// AUTO-GENERATED - do not edit.
declare class modifier_doom_bringer_devour extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
