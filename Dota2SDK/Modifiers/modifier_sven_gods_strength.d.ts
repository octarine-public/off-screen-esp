// AUTO-GENERATED - do not edit.
declare class modifier_sven_gods_strength extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetSlowResistanceStacking(): [number, boolean]
	protected GetBaseDamageOutgoingPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
