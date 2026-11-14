// AUTO-GENERATED - do not edit.
/**
 * Hurricane Pike. Cast at its owner or an ally, it pushes the unit `push_length` the way it faces
 * over `push_time`, as Force Staff does. Cast at an enemy within `EnemyCastRange` of its edge, it
 * pushes the two apart, each `enemy_length` straight away from the other over `EnemyPushTime`,
 * whichever way either faces.
 */
declare class item_hurricane_pike extends Item {
	/** Its push on the caster goes the way the caster faces. */
	public get MovesAlongFacing(): boolean
	public get Range(): number
	/** Seconds the push lasts. */
	public get PushTime(): number
	/** How far a cast at an enemy pushes each of the two from the other. */
	public get EnemyLength(): number
	/** Seconds the push of a cast at an enemy lasts, for each of the two. */
	public get EnemyPushTime(): number
	/**
	 * The farthest its owner's middle may stand from an enemy's edge to cast it at him with no walk:
	 * `cast_range_enemy` and the owner's cast range bonuses.
	 */
	public get EnemyCastRange(): number
	/** The push's speed - of the caster or an ally: its length over its time, by the data. */
	public GetBaseSpeedForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The push a cast from `from` landing at `landsAt` gives `target`, from where it is by then. Its
	 * owner cast at itself (`toward` its own spot, `from`) or an ally goes `push_length` along the
	 * way it faces over `push_time`; an enemy `enemy_length` away from `from` over `EnemyPushTime`;
	 * its owner cast at an enemy at `toward` as far away from `toward`.
	 * @example
	 * const recoil = pike.MotionOn(hero, hero.Position, enemy.Position, landsAt)
	 * const lands = recoil?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * The push `MotionOn` gives `target` facing the way `way`: its owner or an ally along it; an
	 * enemy away from `from`, whichever way it faces.
	 */
	public MotionAlong(target: Unit, from: Vector3, way: Vector3, landsAt: number): Nullable<Motion>
	/** Cast at an enemy it pushes him and its owner apart (`MovesOnto`, `MotionOn`). */
	public get PartsFromEnemy(): boolean
	/**
	 * The enemies a cast of it at one of them pushes its owner back from: those it may be cast at
	 * (`Unit.TargetsInReach`) within `EnemyCastRange` of their edge, no walk to them. Where it sets
	 * the owner down is `MotionOn` toward the enemy's spot. Refilled on each call.
	 * @example
	 * const diver = pike.MovesOnto(hero)?.[0]
	 */
	public MovesOnto(caster: Unit): Nullable<readonly Unit[]>
	/** Cast at an enemy, it pushes him `enemy_length` away from its caster. */
	public get MovesTarget(): boolean
	/** The push lasts `EnemyPushTime` for an enemy of its owner, `push_time` for another. */
	public MovesTargetFor(target: Unit): number
}
