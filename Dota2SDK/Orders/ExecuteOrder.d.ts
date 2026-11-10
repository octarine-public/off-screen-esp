// AUTO-GENERATED - do not edit.
declare class ExecuteOrder {
	public readonly OrderType: dotaunitorder_t
	public readonly Target: Nullable<Entity | number>
	public readonly Position: Vector3
	public readonly Ability_: Nullable<Ability | number>
	public readonly Issuers: Unit[]
	public readonly Queue: boolean
	public readonly ShowEffects: boolean
	public IsPlayerInput: boolean
	public static LastUserCmd: UserCmd
	public static readonly orderQueue: [ExecuteOrder, number, boolean, boolean][]
	/**
	 * The last walk to a point the humanizer took: the point, when by `hrtime`, and its units. The
	 * same walk of the same units within moments of it is the same click, and goes no further.
	 */
	public static lastMove: Nullable<[Vector3, number, readonly Unit[]]>
	public static DebugOrders: boolean
	public static DebugDraw: boolean
	/**
	 * Whether the humanizer logs, step by step, its camera - where it is and what moved it - its
	 * cursor and what it goes to, the player's camera and cursor, and every order's way through it,
	 * one JSON line a record into `globalThis.__humanizerLogBuf`, which cdp-mcp drains into its
	 * `logs/humanizer.log`.
	 * @example
	 * ExecuteOrder.DebugLog = true
	 */
	public static get DebugLog(): boolean
	public static set DebugLog(on: boolean)
	public static HoldOrders: number
	public static HoldOrdersTarget: Nullable<Vector3 | Entity>
	public static cameraMinimapSpaces: number
	/**
	 * Speed, world units a second, the humanizer's camera pans at for an order, by the screen's edge
	 * or the arrows, whichever way it goes: the pan of a player whose "Camera speed" is 8000, the
	 * owner's choice whatever the player's own `dota_camera_speed` is. The player's grip and arrows
	 * move it at their own camera's speed instead.
	 */
	public static cameraSpeed: number
	/**
	 * Whether the humanizer pans its camera for an order by holding the arrows, its cursor waiting
	 * where the target comes into view, rather than by taking the cursor to the screen's edge.
	 */
	public static CameraByArrows: boolean
	public static cursorSpeed: number
	public static cursorSpeedMinAccel: number
	public static cursorSpeedMaxAccel: number
	/**
	 * Factor on the cursor's speed and acceleration while another order waits behind the one at the
	 * head (an anti-miss flick), for an escape (`EOrderPriority.Escape`) - a flick with no undershoot
	 * to correct, timed as the estimate times it - and while the cursor follows the player's own:
	 * their cursor, or their order at the head.
	 */
	public static cursorBacklogBoost: number
	public static cursorOvershoot: number
	/**
	 * Reaction, in ms, before the cursor glides from rest to the target of a script's order with no
	 * other order waiting behind it; none for the player's own orders nor for an escape
	 * (`EOrderPriority.Escape`), timed by what it flees.
	 */
	public static cursorReactionMs: number
	public static cursorArc: number
	public static cursorCorrectionChance: number
	public static cursorUndershoot: number
	/**
	 * Whether an order goes as it comes to the head of the humanizer's queue, ahead of the cursor,
	 * which follows; with this off, an order goes with the cursor on its target.
	 */
	public static PrefireOrders: boolean
	/**
	 * Bounds, in seconds, of the pause a script's cast keeps after the last cast of a script its unit
	 * sent - a spell or an item: no hand casts again the tick its last cast went. Drawn anew between
	 * the two as each such cast goes, it holds the unit's next cast of a script until it passes; the
	 * wait counts in `EstimateDispatchDelay`, so a cast timed to a moment goes that much earlier. The
	 * player's own casts neither keep one nor start one: the first cast of a script after them goes
	 * at once. A swing through a cast - an orb - and an escape (`EOrderPriority.Escape`) keep none;
	 * a cast that goes at once (`DOTA_ABILITY_BEHAVIOR_IMMEDIATE`: Quas, Wex, Exort, Invoke) neither
	 * keeps one nor starts one; nor does any order given raw, the humanizer bypassed. With the
	 * humanizer off a cast keeps it still and goes after it as a click at the cursor
	 * (`CursorBound`). Both 0 for no pause.
	 * @example
	 * ExecuteOrder.CastPauseMin = 0.1
	 * ExecuteOrder.CastPauseMax = 0.3
	 */
	public static CastPauseMin: number
	/** The upper bound of `CastPauseMin`'s pause, in seconds. */
	public static CastPauseMax: number
	/**
	 * Bounds, in game units, of how far a script's cast at a point lands from the point it was given:
	 * drawn anew between the two for each such cast, at a random angle, so the casts do not hit the
	 * exact computed point every time. Never past `CastSpreadRadiusShare` of the ability's area of
	 * effect - a cast with none, a blink or a ward, keeps its point then - and never where the server
	 * would turn the cast down (`Ability.CanPlaceAt`): a Proximity Mine packed beside another keeps
	 * its point unless the drawn one is free too. None for an ability whose point decides what it
	 * takes (`Ability.KeepsCastPoint`: Mystic Flare), nor while the humanizer is off or bypassed;
	 * `CastSpreadMax` 0 for none.
	 * @example
	 * ExecuteOrder.CastSpreadMin = 15
	 * ExecuteOrder.CastSpreadMax = 60
	 */
	public static CastSpreadMin: number
	/** The upper bound of `CastSpreadMin`'s offset, in game units. */
	public static CastSpreadMax: number
	/**
	 * The share of the ability's area of effect (`Ability.AOERadius`) the offset of `CastSpreadMin`
	 * stays within, so the cast still covers what it was aimed at; `Infinity` for no limit.
	 */
	public static CastSpreadRadiusShare: number
	/**
	 * Bounds, in game units, of how far a script's walk to a point it worked out lands from that
	 * point (`PrepareOrder`'s `computed`): a kite spot, an approach - drawn anew between the two for
	 * each such walk, at a random angle, so the unit does not walk to the exact computed point every
	 * time. A walk after the player's cursor keeps its point. None while the humanizer is off or
	 * bypassed; `MoveSpreadMax` 0 for none.
	 * @example
	 * ExecuteOrder.MoveSpreadMin = 20
	 * ExecuteOrder.MoveSpreadMax = 80
	 */
	public static MoveSpreadMin: number
	/** The upper bound of `MoveSpreadMin`'s offset, in game units. */
	public static MoveSpreadMax: number
	public static IsStandalone: boolean
	public static unsafeMode: boolean
	/**
	 * How far, in game units, a script's order at a point may stand from the ground under the
	 * cursor (`InputManager.CursorOnWorld`) and still go while orders are bound to the cursor
	 * (`CursorBound`): it goes to the cursor's own point then. A script's walk this near it is the
	 * player's cursor's under the humanizer too (`AtCursor`). Measured on 26 October 2026 against
	 * 212 of the player's clicks with the humanizer off: a click lands on `CursorOnWorld` exactly
	 * while the cursor stands still, and up to 42 units off it (95th percentile) while the cursor
	 * moves 60-150 pixels a tick - its motion between the game's input and the frame that read it.
	 * @example
	 * ExecuteOrder.CursorReach = 40
	 */
	public static CursorReach: number
	/**
	 * In unsafe mode (`unsafeMode`), where the humanizer is bypassed, orders are bound to the
	 * cursor as with the humanizer off (`CursorBound`) rather than going raw: for testing what a
	 * script does without the humanizer. Elsewhere it changes nothing.
	 * @example
	 * ExecuteOrder.EmulateHumanizerOff = true
	 */
	public static EmulateHumanizerOff: boolean
	/**
	 * Orders by native CUnitOrder
	 *
	 * @param position default: new Vector3(0,0,0)
	 * @param issuer default: DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY
	 */
	constructor(OrderType: dotaunitorder_t, Target: Nullable<Entity | number>, Position: Vector3 | undefined, Ability_: Nullable<Ability | number>, Issuers: Unit[], Queue?: boolean, ShowEffects?: boolean, IsPlayerInput?: boolean)
	/**
	 * Seconds the humanizer will hold an order issued now - of `priority`, going `now` or not -
	 * before it reaches the game: the cursor glides of the orders that go before it - and, with
	 * `PrefireOrders` off, this order's own way to `target`. The one on its way counts for what is
	 * left of it, as the humanizer tells (`CursorThrough`): its reaction, its glide from where the
	 * cursor is, at the speed it has, to the point it aims at - unless this one cuts it short - and,
	 * for a target the camera pans to, the pan left and the glide on from the edge of the screen.
	 * Every waiting one that goes now while this one does not or ranks at least as high - the
	 * player's own above any but an escape - counts its whole way, sped up as the cursor is while
	 * another order waits behind it, with no reaction: the
	 * cursor is moving on - to the minimap, and its wait there, for one given by a click on it; to
	 * the edge of the screen, the camera's pan at `cameraSpeed` and on, for one off the clickable
	 * part. The next order goes out as the one before it is through; an order that needs no cursor
	 * - a key - takes a game tick, as one order goes a tick. A script's cast by `caster` waits at
	 * least what is left of the caster's pause after its last cast (`CastPauseMin`) and of its
	 * reaction to `target`, an enemy hero (`TargetReaction`), the glides ahead running meanwhile.
	 * The glides start where the humanizer's own cursor is and are seen through its own camera.
	 * With the humanizer off, orders bound to the cursor (`CursorBound`), there are no glides: only
	 * the caster's pause and reaction. Zero when the humanizer is bypassed on this map and orders
	 * go raw. Follows the cursor model the
	 * queue runs on (peak speed, acceleration and deceleration in screen widths, the same along
	 * both axes) without its random spread.
	 * @example
	 * const wait = ExecuteOrder.EstimateDispatchDelay(target, EOrderPriority.Attack) + GameState.InputLag
	 * const cast = ExecuteOrder.EstimateDispatchDelay(target, EOrderPriority.Cast, false, hero)
	 */
	public static EstimateDispatchDelay(target?: Vector3 | Entity, priority?: EOrderPriority, now?: boolean, caster?: Unit): number
	/**
	 * Whether a cast given to `unit` - other than `but` - which a later order would cut short has
	 * yet to show it took: still waiting in the humanizer's queue, or sent and the unit perhaps
	 * still walking or turning to it, which the game shows as nothing of the cast. Until its cast
	 * point, its channel or its cooldown shows (`Started`), its time passes or a later order of
	 * the unit cuts it short (`Lost`). A swing through a cast - an orb - is an attack, and none.
	 */
	public static CastOnItsWay(unit: Unit, but?: ExecuteOrder): boolean
	/**
	 * Moves into the wait for a cast or a channel to end every order still queued that would now
	 * cut one of its units' short - a cast of theirs given since, or begun - and every script's cast
	 * whose units a cast sent since put in their pause (`CastPauseMin`); once a tick, before the
	 * humanizer takes the next order.
	 */
	public static HoldBack(): void
	/**
	 * The units in their pause after their last cast sent (`CastPauseMin`); what is left of each
	 * one's is `CastPauseLeft`.
	 * @example
	 * for (const unit of ExecuteOrder.PausedUnits) {
	 * 	console.log(unit.Name, ExecuteOrder.CastPauseLeft(unit))
	 * }
	 */
	public static get PausedUnits(): IterableIterator<Unit>
	/** Seconds left of `unit`'s pause after its last cast sent (`CastPauseMin`); 0 for none. */
	public static CastPauseLeft(unit: Unit): number
	/**
	 * The ground under the cursor that gives the orders now: the humanizer's while orders go
	 * through it, else the player's (`InputManager.CursorOnWorld`). An order at it waits for no
	 * glide of the humanizer's cursor nor its reaction before one (`EstimateDispatchDelay`). The
	 * vector is the live one: clone it to keep it.
	 * @example
	 * const spot = ExecuteOrder.CursorPoint.Clone()
	 * const wait = ExecuteOrder.EstimateDispatchDelay(spot)
	 */
	public static get CursorPoint(): Vector3
	/**
	 * How many orders wait, not sent yet: in the humanizer's queue, or for a cast or a channel of
	 * their units to end.
	 */
	public static get Unsent(): number
	/**
	 * Lets go the orders that waited for a cast or a channel to end, or for a pause after a cast,
	 * now that it has, and drops the waiting orders past their time; once a tick.
	 */
	public static ReleaseHeld(): void
	/**
	 * Notes an order the game sends itself - the player's, with the humanizer off: it takes the next
	 * number of the order sequence (`TakenAt`).
	 */
	public static NoteGameSent(): void
	/**
	 * Marks the orders sent the server took, `taken` the last number of its order sequence
	 * (`Player.ServerOrderSequenceNumber`) - every order sent takes the next one, in the order it
	 * went; once a tick. A number the server took past the count - an order the SDK did not see -
	 * moves the count on to it, and one sent and not taken in `untakenFor` seconds reads it anew.
	 */
	public static Take(taken: number): void
	/**
	 * Moves the casts sent on: started once the game shows them take, lost once their time has
	 * passed or their units have left the game; once a tick.
	 */
	public static Confirm(): void
	/**
	 * Drops every order still waiting whose time (`NotAfter`) has passed, every one whose units
	 * have all left the game, and every cast whose ability went off while it waited (`Spent`).
	 */
	public static DropExpired(): void
	/**
	 * Puts at the head of the humanizer's queue the order to go next, unless the head is already
	 * on its way: of the orders not sent - each the first its units have waiting - one that goes
	 * now, then an escape, then the player's own, then the higher priority, then the earlier given.
	 * The humanizer's, before a new head.
	 */
	public static Promote(): void
	/**
	 * Whether a script holds the humanizer's cursor on a target between its orders: it claims units
	 * with a target to wait on (`OrderPolicy.Claim`), or raised `HoldOrders`. A claim with none
	 * leaves the cursor and the camera to the player between the script's orders.
	 */
	public static get Holding(): boolean
	/** What the humanizer's cursor waits on between a holding script's orders. */
	public static get AimTarget(): Nullable<Vector3 | Entity>
	/**
	 * Whether an order that goes now, or one of the player's own, waits in the queue, first of its
	 * units, unsent: the head already sent gives its place to it at once, its cursor not waited for.
	 */
	public static get UrgentWaiting(): boolean
	/**
	 * Takes back every order given to `unit` that still waits in the queue, as `Cancel` does each;
	 * how many there were.
	 * @example
	 * ExecuteOrder.CancelQueued(hero)
	 */
	public static CancelQueued(unit: Unit): number
	/**
	 * Takes every queued order `which` picks out of the queue unsent, each dropped for `reason`;
	 * how many there were. The humanizer's when a target is lost, the cursor never gets to it or it
	 * starts over.
	 */
	public static Discard(which: (order: ExecuteOrder) => boolean, reason: EOrderDrop): number
	/**
	 * Forgets the casts sent that the game has yet to show taking, and the orders the server has yet
	 * to take with the count of its order sequence, for a match that is over: the game will show
	 * none of them, and they are not settled into the next one.
	 */
	public static ForgetUnderway(): void
	/**
	 * Whether the head of the queue, unsent, waits for its cursor on a script's order while an
	 * escape or the player's own waits behind it that may lead (`MayLead`): the humanizer leaves the
	 * head for it - neither waits out the cursor's way to a script's order.
	 */
	public static get OvertakeWaiting(): boolean
	public static get DisableHumanizer(): boolean
	public static set DisableHumanizer(newVal: boolean)
	/**
	 * Whether an order that needs the cursor goes wherever it points - a walk, an attack, a cast at
	 * a point or a unit: with the humanizer on, or with orders given raw; otherwise only as a click
	 * at the cursor (`CursorBound`).
	 * @example
	 * if (ExecuteOrder.CursorOrdersGo) {
	 * 	hero.MoveTo(escape.Position)
	 * }
	 */
	public static get CursorOrdersGo(): boolean
	/**
	 * Whether an order that needs the cursor goes only as the click the player could give right
	 * now: the humanizer is off and not bypassed, or it is bypassed and `EmulateHumanizerOff` is
	 * on. A script's walk, attack or cast goes then, once its units' own waits are through - the
	 * pause after their last cast (`CastPauseMin`) and the reaction to its hero (`TargetReaction`)
	 * - when it is at the unit under the cursor (`InputManager.UnitUnderCursor`), a pickup of the
	 * rune or item the cursor is on (`InputManager.IsUnderCursor`) or at a point within
	 * `CursorReach` of the ground under it, where it then lands; the rest are dropped
	 * (`EOrderDrop.HumanizerOff`) - but a double tap, a cast at the unit itself, which needs no
	 * cursor. A cast of a vector ability is no one click and is dropped too.
	 * @example
	 * if (ExecuteOrder.CursorBound && InputManager.UnitUnderCursor === enemy) {
	 * 	hero.CastTarget(nuke, enemy)
	 * }
	 */
	public static get CursorBound(): boolean
	/**
	 * Gives the order: to the humanizer's queue, or to the game at once when it needs no cursor, the
	 * humanizer is bypassed, or orders are bound to the cursor and it is a click at the cursor
	 * (`CursorBound`). The order it returns tells where it got (`Stage`).
	 *
	 * Beyond the order itself: `owner` - who gives it, the player for the player's own orders,
	 * `OrderOwner.Script` for a script that names none; `priority` - how it ranks against the
	 * waiting orders of other units, by its type when not given; `notAfter` - the game time it has
	 * to go by, dropped (`EOrderDrop.Expired`) when it has not; `now` - ahead of every waiting order
	 * that does not go now, cutting short the cursor's glide to one already sent; `replaces` - in
	 * the place of its owner's orders for the same units still waiting, when it and they need the
	 * cursor and they rank lower, or as high and of its kind but a cast (`EOrderDrop.Replaced`) - a
	 * key never takes or loses a place, a walk never takes a cast's, a cast never another cast's;
	 * `merges` - a walk or an
	 * attack that may ride a waiting order of its owner that is the same click (to one point, on
	 * one unit): its units join that order instead of a second click, its stage that order's;
	 * `keepsCast` - it waits while it would cut a cast point or a channel of its units short, or a
	 * cast of theirs still on its way to its start (`CastOnItsWay`) - an item cuts only one walking
	 * into range - and while a swing through a cast of theirs is in its attack point or waits
	 * behind one that is, going as its projectile leaves, not held by the game till its backswing
	 * is through - unless it is an escape (`EOrderPriority.Escape`); `aimAt` - the enemy unit a cast
	 * at a point or at nothing is meant for, which the humanizer's reaction to it holds the cast for
	 * as it would one at the unit (`TargetReaction`); `computed` - a walk to a point the script
	 * worked out - a kite spot, an approach - not the player's cursor, which the humanizer moves a
	 * little (`MoveSpreadMin`). A script that names itself as
	 * the owner has its orders dropped (`EOrderDrop.Yielded`) while their units are another script's
	 * for the moment (`OrderPolicy`).
	 * @example
	 * const order = ExecuteOrder.PrepareOrder({
	 * 	orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
	 * 	issuers: [hero],
	 * 	position,
	 * 	isPlayerInput: false
	 * })
	 * if (order.Stage === EOrderStage.Dropped) {
	 * 	console.log(order.DropReason)
	 * }
	 */
	public static PrepareOrder(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
		owner?: OrderOwner
		priority?: EOrderPriority
		notAfter?: number
		now?: boolean
		replaces?: boolean
		keepsCast?: boolean
		merges?: boolean
		aimAt?: Unit
		computed?: boolean
	}): ExecuteOrder
	public static Buyback(queue?: boolean, showEffects?: boolean): void
	public static Glyph(queue?: boolean, showEffects?: boolean): void
	public static CastRiverPaint(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static PreGameAdjustItemAssigment(itemID: number, queue?: boolean, showEffects?: boolean): void
	public static Scan(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static fromObject(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
		owner?: OrderOwner
		priority?: EOrderPriority
		notAfter?: number
		now?: boolean
		replaces?: boolean
		keepsCast?: boolean
		merges?: boolean
		aimAt?: Unit
		computed?: boolean
	}): ExecuteOrder
	/**
	 * Whether the order, not queued, takes its units off what they do now - a move, an attack, a
	 * stop, a cast with a cast point or a channel, one at a unit or a point - as the humanizer's
	 * queue counts one (`WillInterruptOrderQueue`); a toggle, a purchase, a skill learned, a cast
	 * aimed by the caster's facing (`UsesRotation`) or a queued order does not.
	 * @example
	 * if (order.Interrupts && order.Issuers.includes(hero)) {
	 * 	waiting.delete(hero)
	 * }
	 */
	public get Interrupts(): boolean
	/**
	 * Where the order is on its way to the game: queued until it is sent or dropped; one whose units
	 * rode another order (`merges`) is where that order is.
	 * @example
	 * if (order.Stage === EOrderStage.Sent) {
	 * 	console.log(GameState.RawGameTime - order.SentAt)
	 * }
	 */
	public get Stage(): EOrderStage
	/** Why the order never reached the game; `None` while it may still, or did. */
	public get DropReason(): EOrderDrop
	/** The game time the order was handed to the game; 0 before it was. */
	public get SentAt(): number
	/**
	 * The game time the client saw the server take the order: its number reached in the server's
	 * order sequence (`Player.ServerOrderSequenceNumber`) - taken, not yet shown done; 0 before, and
	 * for one the SDK did not count. The server takes an order sent alone at times only with the
	 * next one, the two in one tick.
	 * @example
	 * const late = order.TakenAt === 0 && GameState.RawGameTime > order.SentAt + GameState.AnswerLag
	 */
	public get TakenAt(): number
	/** Its number in the game's order sequence, as the SDK counts it (`TakenAt`); -1 for none. */
	public get Sequence(): number
	/** The waiting order of the same click its units rode (`merges`); none. */
	public get MergedInto(): Nullable<ExecuteOrder>
	/**
	 * Its point as it was given: `Position` is where it clicks, which the humanizer may have moved
	 * off it (`CastSpreadMin`, `MoveSpreadMin`).
	 */
	public get GivenPosition(): Vector3
	/** The enemy unit a cast at a point or at nothing is meant for (`aimAt`); none if not given. */
	public get AimAt(): Nullable<Unit>
	/**
	 * @internal Whether it is a script's walk the player's cursor gave as it entered the humanizer:
	 * not `computed`, to the unit under the cursor (`InputManager.UnitUnderCursor`) or to a point
	 * within `CursorReach` of the ground under it. The humanizer's cursor follows the player's for
	 * it, with no reaction, as for the player's own click.
	 */
	public get AtCursor(): boolean
	/**
	 * @internal Whether it is the player's order given where their cursor was not as the game gave
	 * it: at a unit the cursor was not on (`InputManager.IsUnderCursor`), or at a point off the
	 * screen with no click on the minimap - a key or the HUD gave it: the
	 * courier's delivery to the hero, a cast at an ally's portrait, a double tap of a Town Portal
	 * Scroll to the fountain. It needs no cursor, the humanizer sends it at once, as the game's own.
	 */
	public get Keyed(): boolean
	/**
	 * @internal Whether it was a double tap as it went on its way - a cast at its issuer itself, or
	 * one its ability takes for a double tap (`Ability.IsDoubleTap`): it needs no cursor, the
	 * humanizer sends it as it comes up, though its unit walked or turned off the point meanwhile -
	 * Magnetic Field's lies just ahead of the caster.
	 */
	public get Tapped(): boolean
	/**
	 * A cast's, once sent: the game time it shows it took by - its cast point, its channel or its
	 * cooldown begun, a swing's projectile gone - else it is lost; moved on while the game holds it
	 * behind a swing of its unit (`Swings`). `Infinity` for an order the SDK does not follow.
	 * @example
	 * if (order.Stage === EOrderStage.Sent && GameState.RawGameTime < order.DueBy) {
	 * 	// still on its way to its start
	 * }
	 */
	public get DueBy(): number
	/** Who gave the order: the player, the script that named itself, or `OrderOwner.Script`. */
	public get Owner(): OrderOwner
	/** How it ranks against the waiting orders of other units: as given, else by its type. */
	public get Priority(): EOrderPriority
	/** The game time it has to go by; dropped when it has not. Infinite unless given. */
	public get NotAfter(): number
	/** Whether it goes ahead of every waiting order that does not. */
	public get Now(): boolean
	/**
	 * Whether it waits while it would cut a cast point or a channel of its units short, and while a
	 * swing through a cast of theirs is in its attack point or waits behind one that is.
	 */
	public get KeepsCast(): boolean
	/**
	 * Whether it cuts its units' cast point short: a walk, an attack, a stop, a cast that is not
	 * immediate; never an order queued after what they do.
	 */
	public get BreaksCast(): boolean
	/**
	 * Whether it is a swing through a cast - an orb at a unit, Frost Arrows, Glaives: an attack in
	 * the game, shown as its projectile leaves. Begun, it is not cut as an attack is: the game
	 * plays it out to its backswing's end and holds a walk, an attack or a cast its units are given
	 * in its attack point till then - their time (`DueBy`) moves on with it - while one given after
	 * its launch goes at once: one that keeps casts (`KeepsCast`) waits in the SDK for the launch.
	 * A stop or a hold ends it. A swing so held shows at its own launch, not at the one it waits
	 * behind; till it begins, a later order of its units but an item takes its place - the game
	 * keeps the last. It keeps no order of its units waiting behind it while it walks or
	 * turns to its target, though its unit walks into range for
	 * seconds - an orb from 1800 away kept a Sacred Arrow queued until Mirana was in range to swing.
	 */
	public get Swings(): boolean
	/**
	 * Whether it cuts its units' channel short: a walk, an attack, a stop, a cast that does not
	 * ignore channels; never an order queued after what they do.
	 */
	public get BreaksChannel(): boolean
	/**
	 * Takes the order back while it still waits in the queue; false once it was sent or dropped.
	 * @example
	 * const order = hero.CastPosition(sunStrike, point)
	 * if (!stillWanted) {
	 * 	order.Cancel()
	 * }
	 */
	public Cancel(): boolean
	/**
	 * pass Position: Vector3 at IOBuffer offset 0
	 * @param cursorWrites How many user commands written before this order already had the cursor on
	 * its target: the native side sends the order as soon as the first of them has gone to the server.
	 * @param holdsCursor Whether the order is given by the cursor on its target: while it waits for a
	 * move message, that message ends with the user command written right after it.
	 */
	public toNative(cursorWrites?: number, holdsCursor?: boolean): {
		OrderType: dotaunitorder_t
		Target: number
		Ability: number
		Issuers: number[]
		Queue: boolean
		ShowEffects: boolean
		Flags: number
		CursorWrites: number
		HoldsCursor: boolean
	}
	/**
	 * Execute order with this fields
	 * @param cursorWrites How many user commands written before it already had the cursor on its
	 * target; with none the order waits for the server to get the user command written after it.
	 * An order given with no cursor (`NeedsCursor`) - a purchase, a key - waits for none and goes
	 * with the next orders sent, as the game's own.
	 * @param holdsCursor Whether it is given by the cursor on its target: the move message it waits
	 * for ends with the user command written right after it, the cursor's later ones go in the next.
	 */
	public Execute(cursorWrites?: number, holdsCursor?: boolean): void
	/**
	 * Gives the order: dropped while its units are someone else's for the moment (`OrderPolicy`) -
	 * the player's, held by the humanizer, also when it would end a script's guard on them; else
	 * noted as its script's turn on them, in the place of its owner's waiting orders for the same
	 * units when it replaces them, then, while it would cut a cast or a channel it keeps
	 * short or its units are in their pause after a cast (`CastPauseMin`), into the wait for it to
	 * end, else on its way (`PrepareOrder`). On its way, the player's own, not queued after what its
	 * units do and ending it, takes the place of every order still waiting for them but an escape,
	 * whoever gave it, as the game's own click does.
	 */
	public ExecuteQueued(): void
	/**
	 * @internal The player's order: its hero is the one in hand for its units
	 * (`TargetReaction.Saw`), also when it goes to the game past the humanizer, which is off.
	 */
	public MarkAim(): void
	/**
	 * @internal Seconds the humanizer's cursor takes to glide from `from` to `to`, in shares of the
	 * screen, without the random spread: sped up when `queued` - another order waits behind - and
	 * otherwise from rest, its reaction first. The way is measured in screen widths along both
	 * axes, as the cursor moves: a pixel up takes as long as a pixel across.
	 */
	public static GlideTime(from: Vector2, to: Vector2, queued: boolean): number
	protected CanBeClickHeightMapPosition(): boolean
}
