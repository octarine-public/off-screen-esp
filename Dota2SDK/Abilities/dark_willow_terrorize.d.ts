// AUTO-GENERATED - do not edit.
/**
 * The marker of the point the wisp flies to comes with the first tick of the cast point, to Dark
 * Willow's side only; her enemies see the wisp's channel on her creature then, from the fog too -
 * her spot its fallback, the point unnamed, cut at once when she stops.
 */
declare class dark_willow_terrorize extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The wisp flies to the point it was cast at and frightens everyone around it there: a circle,
	 * not a line. Read as a line, its flight ended a radius (450-550) and the target's hull short
	 * of the point - a tick or two from 600 away instead of 0.3 s, the fear expected before it comes
	 * (20 October 2026, demo: from some 650 the fear came 0.30-0.36 s after the cast, 0.33 s the
	 * whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
