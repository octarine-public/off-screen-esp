// AUTO-GENERATED - do not edit.
/**
 * Wall of Replica: a wall cast along a vector - centred on its first point, its length along the
 * way to the second - that slows an enemy touching it and makes a replica of an enemy hero the
 * first time it does. In the demo (20 October 2026) a wall cast 500 north of Chaos Knight toward
 * 800 north stood from 150 south of him, where its thinker was, and slowed him; one 500 north of
 * him toward the east stood from 650 west of that point. A cast at a point alone, with no vector,
 * laid it along a way of its own: the wall of aio's first runs ended where Chaos Knight stood.
 * Aghanim's Scepter leaves it as long (`Length`).
 */
declare class dark_seer_wall_of_replica extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_dark_seer_wall_slow"
	public IsDebuff(): this is IDebuff
	/**
	 * The wall strikes a hero it touches once, magical though the data names no type.
	 */
	public get DamageType(): DAMAGE_TYPES
	public GetBaseDamageForLevel(level: number): number
	/**
	 * How long the wall is, end to end: `width`, with Aghanim's Scepter too - its
	 * `scepter_length_multiplier` plays no part. In the demo (20 October 2026), with the Scepter,
	 * Chaos Knight standing 1250 along a wall from its near end was slowed, 1400 along one was not,
	 * nor 150 behind its near end.
	 */
	public get Length(): number
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get Range(): number
	/** The wall stands at once: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
