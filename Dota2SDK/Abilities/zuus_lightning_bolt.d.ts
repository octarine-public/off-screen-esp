// AUTO-GENERATED - do not edit.
declare class zuus_lightning_bolt extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** It strikes round its target only with the talent: `aoe_radius`, none without it. */
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * With the talent's `aoe_radius` it is cast at the ground alone: the game drops a cast of it at
	 * a unit then without a word.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** Cast at the ground it strikes the nearest enemy hero within `spread_aoe` of the point. */
	public get SeekRadius(): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	public get AppliesUnitState(): bigint
}
