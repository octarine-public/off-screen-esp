// AUTO-GENERATED - do not edit.
declare class modifier_terrorblade_metamorphosis extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/** Its base attack time comes before other modifiers', as the game ranks it. */
	public get Priority(): number
	protected GetBaseAttackBonusDamage(): [number, boolean]
	protected GetBaseAttackTimeConstant(): [number, boolean]
	/** `bonus_range`, none for a stolen Metamorphosis - Rubick's. */
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
