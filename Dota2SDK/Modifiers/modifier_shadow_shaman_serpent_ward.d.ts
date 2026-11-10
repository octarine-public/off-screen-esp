// AUTO-GENERATED - do not edit.
declare class modifier_shadow_shaman_serpent_ward extends AttackCountModifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, ModifierHandlerValue>
	protected get RangedHeroHit(): number
	protected get DamagesAround(): boolean
	protected GeAttackRangeBonus(): [number, boolean]
	/**
	 * The ward's hits at `unit`: its ability's (`Ability.DamageOverTime`), this ward's alone, at its
	 * own attack rate and attack point from the moment it stood up for the wards' `duration`, each
	 * flying to the unit at its projectile speed - while the unit is an enemy within its reach and
	 * the ward attacks no other one.
	 */
	protected AroundTicks(unit: Unit, out: DamageTicks): boolean
	protected UpdateSpecialValues(): void
}
