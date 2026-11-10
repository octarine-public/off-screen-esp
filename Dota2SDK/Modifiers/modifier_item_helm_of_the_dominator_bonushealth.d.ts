// AUTO-GENERATED - do not edit.
/**
 * The bonuses of a unit dominated by Helm of the Dominator or Overlord, read from the helm that
 * dominated it: armor, health and mana regeneration and base attack damage (`creep_bonus_*`,
 * the last already in the white damage the game sends).
 */
declare class modifier_item_helm_of_the_dominator_bonushealth extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetBaseAttackBonusDamage(): [number, boolean]
	protected GetHealthRegenConstant(): [number, boolean]
	protected GetManaRegenConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
