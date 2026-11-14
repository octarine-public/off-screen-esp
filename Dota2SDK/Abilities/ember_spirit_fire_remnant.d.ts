// AUTO-GENERATED - do not edit.
declare class ember_spirit_fire_remnant extends Ability {
	/**
	 * Cast the way Ember Spirit stands while he bears `modifier_ember_spirit_fire_remnant`
	 * (`Ability.RequiresFacing`).
	 */
	public get RequiresFacing(): boolean
	public get Speed(): number
	/**
	 * The remnant runs to the point it was cast at and lies there, its blast around it once Ember
	 * Spirit dashes in: a circle, not a line. Read as a line, its run ended a radius (450) and the
	 * target's hull short of the point - the remnant expected there some 0.6 s before it comes
	 * (20 October 2026, demo: sent 766 away, the remnant reached the point 1.03 s after the cast,
	 * 1.04 s the whole way at 738).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** Radius around a remnant the shard's interaction reaches; zero without the shard. */
	public get ShardChargeRadius(): number
}
