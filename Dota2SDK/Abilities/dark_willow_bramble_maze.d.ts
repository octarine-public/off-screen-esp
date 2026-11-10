// AUTO-GENERATED - do not edit.
/**
 * Bramble Maze: a maze of brambles laid round the point it is cast at; a bramble roots the first
 * enemy that comes within its `latch_range` for `latch_duration` and is gone. The maze has no
 * bramble in its middle: laid on a standing target, it roots nothing (20 October 2026, demo).
 */
declare class dark_willow_bramble_maze extends Ability {
	/** The maze stands `placement_duration`; a bramble roots for `latch_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ActivationDelay(): number
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseActivationDelayForLevel(level: number): number
	/** How many brambles the maze lays: `placement_count`, as far as the game's table goes. */
	public get BrambleCount(): number
	/**
	 * How near a bramble the edge of a unit has to come for it to root it: `latch_range`, the
	 * unit's hull added by the caller. In the demo (20 October 2026) a bramble 105 off the middle
	 * of Chaos Knight (hull 24) rooted him, one 125 off did not.
	 */
	public get LatchRange(): number
	/**
	 * Writes into `out` where bramble `index` (0 - the first to grow - to `BrambleCount` - 1)
	 * stands off the point the maze is cast at.
	 * @example
	 * const at = maze.BrambleOffset(0, new Vector3()).AddForThis(castPoint)
	 */
	public BrambleOffset(index: number, out: Vector3): Vector3
	/**
	 * Seconds from the end of the cast point until bramble `index` may root: the first grows
	 * `initial_creation_delay` on and roots `latch_creation_delay` after it grows
	 * (`ActivationDelay`), each next one grows a think of the maze later - `latch_creation_interval`
	 * rounded up to the server's ticks. In the demo (20 October 2026) the brambles grew 0.33,
	 * 0.43, 0.53 s... after the cast point ended, 0.1 s apart, and the first rooted Chaos Knight
	 * standing on it 0.47 s after it.
	 */
	public BrambleDelay(index: number): number
}
