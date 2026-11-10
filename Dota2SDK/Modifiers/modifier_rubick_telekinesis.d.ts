// AUTO-GENERATED - do not edit.
declare class modifier_rubick_telekinesis extends Modifier {
	/**
	 * Where Rubick sets the bearer down, as his second cast marked it; invalid until he marks it -
	 * the marker shows only for Telekinesis Land, not for the lift (demo, 21 October 2026). Land
	 * still shows after it, till the bearer is down.
	 */
	public readonly LandPoint: Vector3
	/**
	 * Rubick sets the bearer down at `point` - what his second cast marks: it comes down the line
	 * to it at its distance over `fall_duration`, from a tick after its fall begins to the first
	 * tick past the lift's end, a little short of the point.
	 */
	public LandAt(point: Vector3): void
	public get IsPurgable(): boolean
	public get IsPurgeException(): boolean
}
