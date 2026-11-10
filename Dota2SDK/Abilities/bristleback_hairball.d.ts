// AUTO-GENERATED - do not edit.
declare class bristleback_hairball extends Ability {
	public get DamageType(): DAMAGE_TYPES
	public GetRawDamage(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The hairball flies to the point it was cast at and bursts there, Quill Spray and Nasal Goo
	 * around it: a circle, not a line. Read as a line, its flight ended a radius (700) and the
	 * target's hull short of the point - nothing at all from its cast range of 750, where the
	 * hairball flies 0.6 s (20 October 2026, demo: from 675 it hit 0.53 s after the cast, 0.56 s
	 * the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseDamageForLevel(level: number): number
}
