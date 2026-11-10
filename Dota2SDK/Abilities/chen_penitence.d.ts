// AUTO-GENERATED - do not edit.
declare class chen_penitence extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** Its hit slows the unit by `bonus_movement_speed` percent for `duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
