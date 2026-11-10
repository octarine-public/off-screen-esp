// AUTO-GENERATED - do not edit.
declare class modifier_witch_doctor_death_ward extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackRangeBonus(): [number, boolean]
	protected get DamagesAround(): boolean
	/**
	 * The ward's shots at `unit`: its ability's (`Ability.DamageOverTime`) at the ward's own attack
	 * rate and attack point from the moment it stood up until the channel ends, each flying to the
	 * unit at the ward's projectile speed - while the unit is an enemy hero within its reach and the
	 * ward shoots no other one.
	 */
	protected AroundTicks(unit: Unit, out: DamageTicks): boolean
	protected UpdateSpecialValues(): void
}
