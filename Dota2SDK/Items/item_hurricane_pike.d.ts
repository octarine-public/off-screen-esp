// AUTO-GENERATED - do not edit.
declare class item_hurricane_pike extends Item {
	/** Its push on the caster goes the way the caster faces. */
	public get MovesAlongFacing(): boolean
	public get Range(): number
	/** Seconds the push lasts. */
	public get PushTime(): number
	/** The push's speed - of the caster or an ally: its length over its time, by the data. */
	public GetBaseSpeedForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The push a cast at `target` from `from` landing at `landsAt` gives it, from where it is by
	 * then, over `push_time`: its owner or an ally `push_length` along the way it faces, as
	 * `modifier_item_hurricane_pike_active` shows it; an enemy `enemy_length` away from `from`.
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
	/** The push `MotionOn` gives `target` facing the way `way`: its owner or an ally along it. */
	public MotionAlong(target: Unit, from: Vector3, way: Vector3, landsAt: number): Nullable<Motion>
	/** Cast at an enemy, it pushes him `enemy_length` away from its caster. */
	public get MovesTarget(): boolean
	/** The push lasts `push_time`, as `MotionOn` lays it. */
	public MovesTargetFor(_target: Unit): number
}
