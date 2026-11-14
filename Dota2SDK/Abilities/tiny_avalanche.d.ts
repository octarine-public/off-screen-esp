// AUTO-GENERATED - do not edit.
declare class tiny_avalanche extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The rocks deal its damage only as they fall: `tick_count` of them each `tick_interval`, the
	 * first as it lands, `avalanche_damage` split among them - each stunning `stun_duration`, so a
	 * unit caught does not walk out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The avalanche flies to the point it was cast at and crushes around it there: a circle, not a
	 * line. Read as a line, its flight ended a radius (325-370) and the target's hull short of the
	 * point - a tick or two from 400 away instead of 0.33 s, the stun expected before it comes
	 * (20 October 2026, demo: from some 640 the stun came 0.47 s after the cast, 0.53 s the whole
	 * way).
	 */
	public get SkillShotType(): ESkillShotType
	public get AppliesUnitState(): bigint
}
