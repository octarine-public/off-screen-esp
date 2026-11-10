// AUTO-GENERATED - do not edit.
/**
 * Cold Embrace: an ally frozen in ice, healing - a shield that takes the fight from its bearer, the
 * stun it lays its own (`AppliesUnitState`).
 */
declare class winter_wyvern_cold_embrace extends Ability implements IHealthRestore<Unit>, IShield {
	public readonly ShieldModifierName = "modifier_winter_wyvern_cold_embrace"
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_winter_wyvern_cold_embrace"
	public GetHealthRestore(target: Unit): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public IsShield(): this is IShield
	/** Its frozen ally takes no physical damage. */
	public GuardsDamageOf(type: DAMAGE_TYPES): boolean
	public get AppliesUnitState(): bigint
}
