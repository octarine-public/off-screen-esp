// AUTO-GENERATED - do not edit.
declare class clinkz_tar_bomb extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** Its tar slows the unit it hits by `slow_movement_speed` percent for `slow_duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
