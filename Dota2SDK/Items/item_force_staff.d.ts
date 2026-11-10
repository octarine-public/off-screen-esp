// AUTO-GENERATED - do not edit.
declare class item_force_staff extends Item {
	/** Its push on the caster goes the way the caster faces. */
	public get MovesAlongFacing(): boolean
	public get Range(): number
	/** Seconds the push lasts. */
	public get PushTime(): number
	/** The push's speed: its length over its time, by the data. */
	public GetBaseSpeedForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The push a cast at `target` landing at `landsAt` gives it - its owner, an ally or an enemy
	 * alike: `push_length` along the way it faces over `push_time`, from where it is by then. As
	 * `modifier_item_forcestaff_active` shows it once it goes.
	 * @example
	 * const push = staff.MotionOn(hero, hero.Position, hero.Position, landsAt)
	 * const lands = push?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
	/** The push `MotionOn` gives `target` facing the way `way`: along it. */
	public MotionAlong(target: Unit, _from: Vector3, way: Vector3, landsAt: number): Nullable<Motion>
	/** Cast at an enemy, it pushes him `push_length` the way he faces. */
	public get MovesTarget(): boolean
	/** The push lasts `push_time`. */
	public MovesTargetFor(_target: Unit): number
}
