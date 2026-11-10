// AUTO-GENERATED - do not edit.
declare class modifier_mars_bulwark extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	/** A part of each physical attack from the front or the sides; spells pass it. */
	protected GetIncomingPhysicalDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
