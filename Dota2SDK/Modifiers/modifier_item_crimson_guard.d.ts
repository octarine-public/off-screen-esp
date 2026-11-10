// AUTO-GENERATED - do not edit.
declare class modifier_item_crimson_guard extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetPhysicalArmorBonus(): [number, boolean]
	/**
	 * Its block - a Break does not turn it off, nor does an attack breaking its bearer first
	 * (measured: Viper Strike's Break, the block on as before).
	 */
	protected GetPhysicalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
