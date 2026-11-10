// AUTO-GENERATED - do not edit.
declare class winter_wyvern_splinter_blast extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/**
	 * None at the unit it is cast at - `GetDamage`'s target: the ball splinters there and the
	 * splinters hit the units around it, not that one (`AbilityDamage` is a splinter's).
	 */
	public GetRawDamage(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
