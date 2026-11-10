// AUTO-GENERATED - do not edit.
declare class modifier_tidehunter_kraken_shell extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	/**
	 * Its block, none while its bearer is broken or of an attack breaking it first
	 * (`IModifierParams.Breaks`: measured, Silver Edge's backstab lands whole).
	 */
	protected GetPhysicalConstantBlock(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
