// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A panel's entry in the {@link OverlayManager}, as {@link COverlayManager.Register} gives it. */
	interface OverlayRegistration {
		/**
		 * Where the panel stands, in screen px: the rectangle handed to
		 * {@link COverlayManager.Register}, which the panel's owner keeps current.
		 */
		readonly rect: Rectangle
		/**
		 * When the panel was last drawn, in ms as handed to {@link COverlayManager.Update}; -1 before
		 * its first draw and after {@link COverlayManager.Reset}.
		 */
		lastDrawTime: number
		/**
		 * Which of two overlapping panels is in front. Higher wins, and the counter only ever goes
		 * up, so raising one panel never disturbs the order of the rest.
		 */
		order: number
		/**
		 * Extra ground that counts as part of the panel while arbitrating a click - a dropdown or a
		 * context menu standing outside its rect. Cleared when it closes.
		 */
		extent: Nullable<Rectangle>
		/**
		 * The handle a panel docked to a screen edge is tucked away and brought back by, which takes
		 * the panel's clicks wherever the panel itself stands. Cleared when the panel leaves its dock.
		 */
		handle: Nullable<Rectangle>
	}
	/**
	 * Arbitrates the panels on the screen: which one is in front for a click, which one is being
	 * dragged, and where a dragged one snaps to the edges and centres of the others and to the
	 * screen's centre.
	 */
	interface COverlayManager {
		/**
		 * Adds a panel standing on `rect`, in front of every panel registered before it. `rect` is
		 * kept, not copied, so the owner moves the panel by updating it. The panel takes no clicks
		 * until its first {@link Update}.
		 */
		Register(rect: Rectangle): OverlayRegistration
		/**
		 * Takes a registration out for good, so a destroyed panel stops being walked by every click
		 * and every drag; the counterpart of {@link COverlayManager.Register}.
		 */
		Unregister(registration: OverlayRegistration): void
		/**
		 * Brings a panel in front of the ones it overlaps, and answers where it now stands so the
		 * caller can put its surface there too.
		 */
		Raise(registration: OverlayRegistration): number
		/**
		 * Sets ground outside the panel's rect that still takes its clicks, such as an open dropdown;
		 * called without `extent`, clears it.
		 * @see OverlayRegistration.extent
		 */
		SetExtent(registration: OverlayRegistration, extent?: Rectangle): void
		/**
		 * Sets the ground the panel's dock handle stands on; called without `handle`, clears it.
		 * @see OverlayRegistration.handle
		 */
		SetHandle(registration: OverlayRegistration, handle?: Rectangle): void
		/**
		 * The front-most panel standing under the cursor, of those drawn recently enough to be there.
		 * A click belongs to that one alone: without this the panel that registered first takes it,
		 * however far behind it is drawn.
		 */
		TopUnderCursor(x: number, y: number, now: number): Nullable<OverlayRegistration>
		/**
		 * Records that the panel was drawn at `now`, a time in ms on the clock `hrtime()` reads, which
		 * keeps it taking clicks and snapping for the next 250 ms.
		 */
		Update(registration: OverlayRegistration, now: number): void
		/** Whether the panel was drawn within 250 ms before `now`, a time in ms. */
		IsVisible(registration: OverlayRegistration, now: number): boolean
		/** Whether the panel is the one being dragged. */
		IsActive(registration: OverlayRegistration): boolean
		/**
		 * Makes the panel the one being dragged and returns true, or returns false while another
		 * panel drawn within the last 250 ms is.
		 */
		Begin(registration: OverlayRegistration, now: number): boolean
		/**
		 * Feeds an arrow key to the panel being dragged. A press moves it one pixel, an arrow held
		 * down repeats every 50 ms after 400 ms, and the first press turns snapping off until the drag
		 * ends. Returns whether the key was taken, so the caller keeps it from the game and the binds:
		 * false for any other key and for an arrow pressed with no panel being dragged.
		 *
		 * @param code the host's VK-aligned key code
		 * @param down true on the press, false on the release
		 */
		NudgeKey(code: number, down: boolean): boolean
		/** Ends the panel's drag and takes its guides down; a no-op unless it is being dragged. */
		End(registration: OverlayRegistration): void
		/**
		 * Takes the panel out of clicks and snapping until its next {@link Update}: its draw time and
		 * extent are cleared, and a drag of it ends.
		 */
		Reset(registration: OverlayRegistration): void
		/**
		 * Clamps `position` in place so a `width` by `height` panel stays on a `viewWidth` by
		 * `viewHeight` screen, all in px. The panel being dragged is then moved by the arrow keys'
		 * nudge or, with none, snapped within 6 dp to the edges and centres of the other visible
		 * panels and to the screen's centre, as {@link MenuFlags.PanelSnap} and
		 * {@link MenuFlags.PanelScreenCenterSnap} allow.
		 */
		Snap(registration: OverlayRegistration, position: Vector2, width: number, height: number, viewWidth: number, viewHeight: number, now: number): void
		/**
		 * Draws the snap guides of the panel being dragged in the accent colour, or takes them down
		 * when `registration` is not that panel or it snapped to nothing.
		 */
		DrawGuides(registration: OverlayRegistration): void
	}
	/** The one {@link COverlayManager} every overlay panel and floating window registers with. */
	const OverlayManager: COverlayManager
}
