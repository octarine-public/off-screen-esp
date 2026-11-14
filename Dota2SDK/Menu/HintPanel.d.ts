// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the hint panel with `hint` beside `anchor`, a rect in screen pixels, to its right where
	 * it fits. `nextOwner` becomes its owner. Replaces any hint open, and starts unpinned.
	 */
	function ShowHint(nextOwner: object, hint: MenuHint, anchor: ScreenRect): void
	/** Pinned, the hint ignores {@link ScheduleHintClose}. Unpinning closes it. */
	function PinHint(state: boolean): void
	/** Whether the hint panel is open and `target` is its owner. */
	function IsHintOpenFor(target: object): boolean
	/**
	 * Closes the hint 180 ms from now unless {@link CancelHintClose} comes first. Ignored while the
	 * hint is pinned or `target` is not its owner.
	 */
	function ScheduleHintClose(target: object): void
	/** Calls off the close {@link ScheduleHintClose} set. */
	function CancelHintClose(): void
	/**
	 * Closes the hint once a scheduled close is due at `now`, in `hrtime` milliseconds, and moves
	 * the progress bars of its videos. The menu calls it every frame.
	 */
	function TickHint(now: number): void
	/** Closes the hint panel and its enlarged media view, pinned or not. */
	function HideHint(): void
}
