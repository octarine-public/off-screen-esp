// AUTO-GENERATED - do not edit.
declare class tiny_tree_channel extends Ability {
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Each tree of the volley flies to the point the channel was cast at and splashes around it
	 * there: a circle, not a line. Read as a line, its flight ended a radius (400) and the target's
	 * hull short of the point - the splash expected 0.42 s before it comes (20 October 2026, by the
	 * game data; not measured: the demo has no trees by Tiny to throw).
	 */
	public get SkillShotType(): ESkillShotType
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	protected MeetsSpellBlock(): boolean
}
