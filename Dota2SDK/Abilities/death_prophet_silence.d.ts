// AUTO-GENERATED - do not edit.
declare class death_prophet_silence extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The orb flies to the point it was cast at and silences around it there: a circle, not a line.
	 * Read as a line, its flight ended a radius (425) short of the point - one tick from 522 away
	 * instead of 0.3 s - and a Silence timed to a target landing from Eul's cyclone came 0.3 s late
	 * (20 October 2026, demo; user feedback: "Death Prophet still does not time Silence under Eul's").
	 */
	public get SkillShotType(): ESkillShotType
}
