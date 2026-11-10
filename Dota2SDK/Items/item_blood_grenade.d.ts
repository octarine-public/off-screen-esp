// AUTO-GENERATED - do not edit.
declare class item_blood_grenade extends Item {
	public get DamageType(): DAMAGE_TYPES
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The grenade flies to the point it was cast at and bursts there: a circle, not a line. Read as
	 * a line, its flight ended a radius (300) and the target's hull short of the point - the burst
	 * expected 0.29 s before it comes (20 October 2026, demo: from 833 it burst 0.77 s after the
	 * cast, 0.76 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The units the grenade hits bleed `damage_over_time` each `tick_rate` for `debuff_duration`,
	 * the first a tick after it, the last as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
