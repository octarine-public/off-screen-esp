// AUTO-GENERATED - do not edit.
declare class shadow_shaman_urnaconda extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The ward flies to the point it was cast at and lands there, harming around it: a circle, not
	 * a line. Read as a line, its flight ended a radius (225) and the target's hull short of the
	 * point - the impact expected 0.25 s before it comes (20 October 2026, demo: from 636 the impact
	 * came 0.63 s after the cast, 0.64 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseDamageForLevel(level: number): number
}
