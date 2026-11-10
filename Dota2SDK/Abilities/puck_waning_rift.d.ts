// AUTO-GENERATED - do not edit.
/**
 * Waning Rift: Puck jumps to the point - no farther than `max_distance`, its cast range - and the
 * rift goes off round where he lands, `radius` wide. Cast farther, he jumps `max_distance` its way
 * without a walk (20 October 2026: cast at a point 468 off, he was 338 on at once): a target
 * within `max_distance` and `radius` is caught from where he stands (`ReachOf`).
 */
declare class puck_waning_rift extends Ability implements INuke {
	/** The silence lasts `silence_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	/** Cast beyond its range, Puck jumps its range that way: the order walks him nowhere. */
	public get IsCastRangeFake(): boolean
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseCastRangeForLevel(level: number): number
	/** The jump and the rift's radius round where it lands. */
	public ReachOf(_target: Unit): number
	/**
	 * A target within reach (`ReachOf`) is cast at from where Puck stands - the jump takes him in;
	 * a target farther, as any cast at a point: a walk into range.
	 */
	public GetCastTimeline(target: Unit | Vector3, options?: ICastTimelineOptions, out?: CastTimeline): CastTimeline
}
