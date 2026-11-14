// AUTO-GENERATED - do not edit.
declare class ringmaster_tame_the_beasts extends Ability implements INuke {
	public readonly StartLocation: Vector3
	public get AOERadius(): number
	public IsNuke(): this is INuke
	public GetMultiplier(level?: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The crack's, the whip fully charged: `damage_min` times `max_multiplier`. */
	public GetBaseDamageForLevel(level: number): number
	/** The whip cracks `crack_duration` after the channel ends. */
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseMinAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
