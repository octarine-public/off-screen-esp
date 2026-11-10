// AUTO-GENERATED - do not edit.
declare class ringmaster_wheel extends Ability {
	public get MinRange(): number
	/**
	 * Dot-product threshold of the mesmerize cone: a unit is caught while it faces the
	 * wheel closer than this, 0.08715 being cos 85°.
	 */
	public get VisionCone(): number
	/**
	 * Seconds a unit in the wheel's radius has to face it (`VisionCone`) to be mesmerized: then it
	 * is pulled to the wheel, stunned for `wheel_stun` (`modifier_ringmaster_wheel_mesmerize_pull`,
	 * 3.0 s at level 3, 20 October 2026, demo). A unit that never faces it - standing turned away,
	 * walking past it - is only slowed and burnt: the stun is not the cast's own, so the class
	 * names no state it applies.
	 */
	public get FaceDuration(): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The wheel rolls to the point it was cast at and stands there, mesmerizing around it: a
	 * circle, not a line. Read as a line, its roll ended a radius (500) and the target's hull short
	 * of the point - the wheel expected there 0.44 s before it comes (20 October 2026, demo: from
	 * 1027 its debuff came 0.83 s after the cast, 0.86 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The wheel's aura where it stops, while it stands (`trap_duration`): `aura_damage` a second
	 * over each `aura_tick_interval`, the first a tick after it arrives, the last as it ends, and
	 * `explosion_damage` as it ends - mesmerized or not; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
