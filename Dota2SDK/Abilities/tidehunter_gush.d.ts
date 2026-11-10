// AUTO-GENERATED - do not edit.
declare class tidehunter_gush extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get Range(): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public GetBaseCastRangeForLevel(level: number): number
	/** Its hit slows the unit by `movement_speed` percent for its duration. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
