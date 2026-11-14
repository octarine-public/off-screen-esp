// AUTO-GENERATED - do not edit.
declare class elder_titan_echo_stomp extends Ability {
	/**
	 * The stomp puts the units around to sleep - stunned, not nightmared, as the game sets it: Chaos
	 * Knight was stunned and not nightmared through the whole sleep (20 October 2026, demo).
	 */
	public get AppliesUnitState(): bigint
	public get DamageType(): DAMAGE_TYPES
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Damage of the stomps at `target` where it stands: Elder Titan's physical one within `radius`
	 * of him and its hull, his Astral Spirit's magical one within `radius` of the spirit - of him
	 * while it is not out, both stomping where he stands. The spirit's own cast deals its magical
	 * one alone.
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	/**
	 * The stomp lands as the channel ends - `cast_time` from the order, the cast point and the
	 * channel: 1.3s after the cast point on Chaos Knight (20 October 2026, demo).
	 */
	public GetBaseActivationDelayForLevel(level: number): number
}
