// AUTO-GENERATED - do not edit.
/**
 * Snowball: Tusk rolls up for `snowball_windup` - launched early by `tusk_launch_snowball` - then
 * at the target, every ally rolled in with him (`Friendly`) adding `snowball_speed_bonus` to the
 * roll and `stun_duration_bonus` to the stun (21 October 2026: the class gave the stun and the
 * speed of Tusk alone).
 */
declare class tusk_snowball extends Ability implements INuke {
	/** The stun, with the allies rolled in; the data's alone off the prototype (`AppliedDurationOf`). */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public readonly Friendly: Unit[]
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
