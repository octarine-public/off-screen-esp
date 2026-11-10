// AUTO-GENERATED - do not edit.
declare class queenofpain_shadow_strike extends Ability {
	/**
	 * With Aghanim's Scepter the dagger is an area spell (`aoe_radius`) the game takes cast at a
	 * point only - an order at a unit it turns down.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public get ProjectileAttachment(): string
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The dagger's poison after its strike: `duration_damage` a tick, its `duration` split into as
	 * many equal steps as `damage_interval` takes whole or begun - the first a step after it lands,
	 * none as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get Range(): number
}
