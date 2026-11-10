// AUTO-GENERATED - do not edit.
declare class modifier_visage_armor_reduction extends Modifier implements IDebuff {
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public IsDebuff(): this is IDebuff
}
