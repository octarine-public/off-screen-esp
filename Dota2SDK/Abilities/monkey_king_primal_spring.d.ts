// AUTO-GENERATED - do not edit.
declare class monkey_king_primal_spring extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	/**
	 * Monkey King leaves the tree once the channel runs out (`AbilityChannelTime`, 1.75 s), then
	 * flies to the point: the impact comes the channel and the flight after the cast. Without it
	 * the impact was expected 1.75 s early - a target walking off was aimed at where it stood at
	 * the cast (20 October 2026, by the game data).
	 */
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * Monkey King springs to the point he channelled at and lands there, striking around it: a
	 * circle, not a line. Read as a line, the spring ended a radius (375) and the target's hull
	 * short of the point - the impact expected 0.31 s before it comes (20 October 2026, by the game
	 * data; not measured: the spring starts from a tree, and the demo has none by the target).
	 */
	public get SkillShotType(): ESkillShotType
}
