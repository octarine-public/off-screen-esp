// AUTO-GENERATED - do not edit.
declare class snapfire_spit_creep extends Ability {
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The creep is lobbed to the point it was spat at and stuns around it there: a circle, not a
	 * line. Read as a line, its flight ended a radius (400) and the target's hull short of the
	 * point - the stun expected 0.3 s before it comes (20 October 2026, by the game data, as Mortimer
	 * Kisses measured; not measured itself: it needs a creep gobbled up). The game keeps a lob
	 * between `min_lob_travel_time` and `max_lob_travel_time`, which the flight at
	 * `projectile_speed` does not.
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
