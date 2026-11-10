// AUTO-GENERATED - do not edit.
declare class modifier_tidehunter_leviathans_catch_stacks extends Modifier implements IBuff {
	public readonly IsHidden: boolean
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetAttackRangeBonus(): [number, boolean]
	/** `fish_damage_block` per fish, on top of the block the unit has (Kraken Shell's). */
	protected GetPhysicalConstantBlockBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
