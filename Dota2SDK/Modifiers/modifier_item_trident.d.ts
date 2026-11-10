// AUTO-GENERATED - do not edit.
declare class modifier_item_trident extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/** Its status resistance stacks with the others', Sange and Yasha's among them. */
	protected GetStatusResistanceStacking(): [number, boolean]
	protected GetSpellAmplifyPercentageUnique(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected GetMoveSpeedBonusPercentageUnique(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
