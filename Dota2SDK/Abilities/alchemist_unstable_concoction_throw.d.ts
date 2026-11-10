// AUTO-GENERATED - do not edit.
declare class alchemist_unstable_concoction_throw extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The brew's damage as the throw leaves Alchemist's hand: brewed on through its cast point. */
	public GetRawDamage(_target: Unit): number
	/**
	 * The brew's damage type - physical - the throw's data having none: the damage is the brew's
	 * (`alchemist_unstable_concoction`), armor cutting it.
	 */
	public get DamageType(): DAMAGE_TYPES
	public get AppliesUnitState(): bigint
}
