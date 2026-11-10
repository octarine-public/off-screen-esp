// AUTO-GENERATED - do not edit.
/** What a unit's orders last went at, and when the humanizer lets them go at it. */
declare class UnitReaction {
	/** The enemy hero its orders last went at; none before any did. */
	public Target: Nullable<Unit>
	/** The game time its orders may go at `Target`. */
	public ReadyAt: number
	/** Seconds the reaction to `Target` took, from when it began. */
	public Delay: number
	/** Whether the reaction to `Target` was a switch from another hero still in sight. */
	public Switch: boolean
	/** The reaction its next first sight of a hero takes, drawn ahead so estimates hold to it. */
	public NextAcquire: number
	/** The reaction its next switch takes, drawn ahead so estimates hold to it. */
	public NextSwitch: number
}
/**
 * The humanizer's reaction to an enemy hero a script's order goes at: no hand acts on a hero the
 * tick it comes into sight, nor turns to another at once. A cast or an attack of a script at an
 * enemy hero - at it, or at a point meant for it (`PrepareOrder`'s `aimAt`) - waits until the hero
 * has been in sight for the reaction, counted from when it came into sight
 * (`Entity.VisibleSince`): one in view a while already is acted on at once. Going at another hero
 * while the one before is still in sight waits the switch, counted from the switch. Each reaction
 * is drawn once, ahead, between the bounds `Set` gives, so the estimate of an order's wait
 * (`ExecuteOrder.EstimateDispatchDelay`) holds to it. The player's own orders wait for none and
 * mark their hero as the one in hand. An escape waits for none; nor does an order at a hero out of
 * sight. With the humanizer off it holds as well: the order goes after it as a click at the cursor
 * (`ExecuteOrder.CursorBound`). Every bound 0 for no reaction.
 * @example
 * TargetReaction.Set(0.2, 0.3, 0.2, 0.3)
 */
declare class CTargetReaction {
	/** The upper bound, in seconds, of the reaction to a hero come into sight. */
	public get AcquireMax(): number
	/** The upper bound, in seconds, of the reaction to a switch of heroes. */
	public get SwitchMax(): number
	/**
	 * Sets the bounds, in seconds, of the reaction to a hero come into sight and of the one to a
	 * switch, and draws every unit's next reactions anew within them.
	 */
	public Set(acquireMin: number, acquireMax: number, switchMin: number, switchMax: number): void
	/**
	 * The units whose orders went at an enemy hero, each with its reaction (`Of`).
	 * @example
	 * for (const unit of TargetReaction.Units) {
	 * 	const reaction = TargetReaction.Of(unit)
	 * }
	 */
	public get Units(): IterableIterator<Unit>
	/** What `unit`'s orders last went at, and when they may; none before any went at a hero. */
	public Of(unit: Unit): Nullable<UnitReaction>
	/**
	 * Seconds an order of `unit` at `target` given now waits for the reaction to it: what is left
	 * of the one under way when `target` is its hero; else that, and then a switch from a hero still
	 * in sight, or the first sight of `target`.
	 */
	public Left(unit: Unit, target: Unit): number
	/**
	 * Turns `unit`'s orders to `target` once the reaction under way is through, starting the one to
	 * `target`; the seconds left of it - or, the one under way not through, of that and then this.
	 */
	public React(unit: Unit, target: Unit): number
	/** Marks `target` as the hero in hand for `unit`: the player ordered it at that hero. */
	public Saw(unit: Unit, target: Unit): void
	/** Forgets the reactions of units gone from the game; once a tick. */
	public Forget(): void
}
declare const TargetReaction: CTargetReaction
