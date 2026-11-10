// AUTO-GENERATED - do not edit.
declare class modifier_alchemist_acid_spray extends Modifier implements IDebuff, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	/**
	 * Acid Spray ticks on the unit by itself while it is on it - renewed while the unit
	 * stays in the area: its ability's damage over time (`Ability.DamageOverTime`).
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get IsPurgable(): boolean
}
