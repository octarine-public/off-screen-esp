// AUTO-GENERATED - do not edit.
/**
 * Kinetic Fence, of Aghanim's Shard: a wall cast along a vector - centred on its first point, its
 * length along the way to the second - up `ActivationDelay` after the cast, which enemies do not
 * cross while it stands.
 */
declare class disruptor_kinetic_fence extends Ability {
	/** How long the wall is, end to end. */
	public get Length(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
