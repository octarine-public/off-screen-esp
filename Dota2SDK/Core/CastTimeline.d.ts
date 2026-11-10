// AUTO-GENERATED - do not edit.
/** How `Ability.GetCastTimeline` treats the caster's situation; every option has a default. */
interface ICastTimelineOptions {
	/**
	 * Let the caster finish its current cast point or channel before this cast; off means the
	 * order cancels it. On by default.
	 */
	readonly waitForCast?: boolean
	/** Let the caster's current attack land before this cast; off by default. */
	readonly waitForAttack?: boolean
	/** Walk into cast range along the grid when the target is out of it; on by default. */
	readonly approach?: boolean
	/** Count the humanizer queue and the input lag for the local player's units; on by default. */
	readonly dispatch?: boolean
	/**
	 * Time the order as one that goes now (`PrepareOrder`'s `now`): ahead of the orders the
	 * humanizer still finishes - the cursor gliding on from a click already sent - which an order
	 * that may wait queues behind. Off by default.
	 */
	readonly now?: boolean
	/**
	 * Time the order as an escape (`EOrderPriority.Escape`): ahead of a script's orders the humanizer
	 * still holds, with no pause or reaction of its caster's. Off by default.
	 */
	readonly escape?: boolean
	/**
	 * Count what the ability must be made ready with before it can be ordered at all, such as
	 * Invoker crafting the spell; off answers for a spell already in hand. On by default.
	 */
	readonly prepare?: boolean
	/** Aim at where a unit target will be when the effect lands; off aims at its current position. On by default. */
	readonly predictTarget?: boolean
	/** Turn at the current turn rate rather than the base one; on by default. */
	readonly currentTurnRate?: boolean
	/** Turn as a walking unit does, which faces the target only partly before moving; defaults to whether the cast needs an approach. */
	readonly moving?: boolean
	/**
	 * Turn until the caster faces the target fully, not only into the angle the game starts a cast
	 * at while still turning (`GetCastAngle`); off by default - a cast marked `DIRECTIONAL` starts
	 * within that angle as any other.
	 */
	readonly directional?: boolean
	/**
	 * Farthest the caster may stand, in a straight line, from the spot it casts from for the walk
	 * there to be looked for over the grid; farther, the approach is that straight line at the
	 * caster's speed, no search made. For a caller that takes no walk past this distance anyway: a
	 * walk the grid makes longer still is past it. Infinity by default.
	 * @example
	 * const timeline = ability.GetCastTimeline(enemy, { approachSearchRange: 50 })
	 */
	readonly approachSearchRange?: number
	/**
	 * Milliseconds of grid searches this tick (`PathfinderSDK.TickSearchTime`) past which the walk
	 * into range is not looked for: the approach is the straight line at the caster's speed and
	 * the timeline is `Approximate`. Infinity by default.
	 */
	readonly searchBudget?: number
}
/**
 * Every stretch of one cast, in seconds from now: readying the ability (Invoker's craft), the
 * order reaching the server, the caster finishing what it does, walking into range, turning, the
 * cast point, the activation delay and the flight. `HitTime` is their sum, `BackswingEnd` is when the cast animation lets the caster
 * go. One instance can be reused across calls.
 * @example
 * const timeline = ability.GetCastTimeline(target)
 * if (timeline.Reachable && ability.CanBeCastedAt(GameState.RawGameTime + timeline.StartTime)) {
 * 	ability.UseAbility(target)
 * }
 */
declare class CastTimeline {
	/**
	 * Seconds the ability needs to become castable at all before the order can go out: Invoker
	 * crafting the spell, and zero for everything the hero can simply cast.
	 */
	public PrepareTime: number
	/**
	 * Humanizer queue - with the caster's pause after its last cast (`ExecuteOrder.CastPauseMin`)
	 * but for a swing through a cast - plus input lag for the local player's units, zero for anyone
	 * else.
	 */
	public DispatchTime: number
	/** Remaining cast point, channel or attack the cast waits for. */
	public BusyTime: number
	/**
	 * Walking along the grid until the target is in cast range - and waiting for a target that
	 * comes into it by itself (`WaitTime`).
	 */
	public ApproachTime: number
	/**
	 * Of `ApproachTime`, the seconds beyond the walk the cast waits for its target to come: pulled
	 * in, set down within range at a teleport's end. A cast ordered before then goes too early.
	 */
	public WaitTime: number
	/** Turning to face the target. */
	public TurnTime: number
	/**
	 * Of the caster's turn, the seconds that run inside the cast point: a cast with no aim of its
	 * own that a click turns as it goes - Shadowraze; the game turns the caster through its cast
	 * point, and `TurnTime` keeps only what is left beyond it.
	 */
	public TurnInCast: number
	/** The cast point, rounded up to a tick. */
	public CastTime: number
	/** Delay between the cast point and the effect starting. */
	public ActivationTime: number
	/**
	 * Flight of the projectile to the hit position, and of what the effect sends out as it
	 * activates homing on the units it took then (`Ability.HomingTime`).
	 */
	public TravelTime: number
	/** Seconds until the effect lands: the sum of everything above. */
	public HitTime: number
	/** Seconds until the cast animation releases the caster: `CastEnd` plus the backswing. */
	public BackswingEnd: number
	/** Where the effect lands: the target's predicted position, or the point cast at. */
	public readonly HitPosition: Vector3
	/** Where the caster stands when the cast starts: its position, or the end of the approach. */
	public readonly CastPosition: Vector3
	/**
	 * False when no route brings the target into range - none over the grid, or a unit walking away
	 * about as fast as the caster or faster, never closed on; the approach then counts a straight
	 * line.
	 */
	public Reachable: boolean
	/**
	 * True when the walk into range is the straight line, the grid not searched for it because the
	 * tick's search budget ran out (`ICastTimelineOptions.searchBudget`): `ApproachTime` is then
	 * no longer than the real walk.
	 */
	public Approximate: boolean
	/** Seconds until the cast point begins. */
	public get StartTime(): number
	/** Seconds until the cast point ends and the ability activates. */
	public get CastEnd(): number
	/** Clears every stretch for reuse. */
	public Reset(): this
}
