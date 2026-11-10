// AUTO-GENERATED - do not edit.
/**
 * Ghost Shroud: Necrophos turns ethereal - no attack lands on him, his heals grow, enemies about
 * him slow - a shield on himself. Its disarm and attack immunity are his own, not a hold of the
 * enemy: read as a control, a plan chained it after a hex and waited it out (20 October 2026,
 * demo, 700 off Morphling with Scythe of Vyse: the shroud went 2.7 s after the hex).
 */
declare class necrolyte_ghost_shroud extends Ability implements IShield {
	public readonly ShieldModifierName = "modifier_necrolyte_ghost_shroud_active"
	public IsShield(): this is IShield
	/** Necrophos stays ethereal for `duration`. */
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Its ethereal form takes no physical damage. */
	public GuardsDamageOf(type: DAMAGE_TYPES): boolean
	public get AppliesUnitState(): bigint
}
