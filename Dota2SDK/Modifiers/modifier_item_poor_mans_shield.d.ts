// AUTO-GENERATED - do not edit.
declare class modifier_item_poor_mans_shield extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/**
	 * Its block - a Break does not turn it off, nor does an attack breaking its bearer first
	 * (measured: Viper Strike's Break, the block on as before).
	 */
	protected GetPhysicalConstantBlockSpecial(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
