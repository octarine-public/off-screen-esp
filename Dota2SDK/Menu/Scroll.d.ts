// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The motion of one {@link Scroll} area: its offset, its thumb, its edge fades, and the rows it
	 * hides while they stand more than a view's height out of sight. A `Scroll` builds its own and
	 * hands it out through its `controller` prop.
	 */
	class ScrollController {
		/**
		 * Takes over the elements of a {@link Scroll}: `root` clips, `content` moves, `lead` and
		 * `tail` stand in for hidden rows, `thumb` takes the pointer and `thumbFill` draws it. Without
		 * both `fadeTop` and `fadeBottom` the edges do not fade.
		 */
		constructor(root: HTMLElement, content: HTMLElement, lead: HTMLElement, tail: HTMLElement, thumb: HTMLElement, thumbFill: HTMLElement, fadeTop?: HTMLElement, fadeBottom?: HTMLElement)
		/** How far the content is scrolled, in screen pixels from the top; it moves while it glides. */
		public get Offset(): number
		/**
		 * Glides, over 180 ms at the designed pace, to `deltaPx` screen pixels past where the last
		 * scroll was headed, positive towards the end, kept within the content.
		 */
		public ScrollBy(deltaPx: number): void
		/** Jumps to `offsetPx` screen pixels from the top, kept within the content. */
		public ScrollTo(offsetPx: number): void
		/**
		 * Keeps the area scrolling at `speedDp` dp a second, positive towards the end, until told
		 * otherwise — for a drag held against the area's edge, which has to go on scrolling while the
		 * pointer stands still. `onStep` hears every step, so whatever the drag carries can keep its
		 * place under the pointer. A speed of 0 stops it.
		 *
		 * @example
		 * scroller.Drift(pointerY > bottom - Edge ? 400 : 0, () => follow())
		 */
		public Drift(speedDp: number, onStep?: () => void): void
		/**
		 * Puts the offset back where an area was left, as soon as there is content to scroll
		 * through: a freshly mounted area has not been laid out yet, so placing it right away
		 * would clamp it to the top. The attempt gives up once the content settles shorter than
		 * the offset asked for, and a scroll of the area's own cancels it outright.
		 */
		public RestoreOffset(offsetPx: number): void
		/**
		 * Jumps to bring `target`, anywhere inside the content, into view when it is not wholly
		 * there: centred if it is shorter than the area, at the top if not.
		 */
		public ScrollToDescendant(target: HTMLElement): void
		/**
		 * Jumps as little as shows `child`, a direct child of the content, whole. A child above the
		 * view or taller than it lands at the top.
		 */
		public ScrollToChild(child: HTMLElement): void
		/**
		 * Glides 96 dp a wheel step, as `ScrollBy` does, and stops the event. While the content fits,
		 * the event passes on untouched.
		 */
		public OnWheel(event: Event): void
		/** Starts dragging the thumb on a left-button press and stops the event; others pass on. */
		public OnThumbDown(event: Event): void
		/** Tells the area whether the cursor is over it; the thumb shows while it is. */
		public OnHover(hovered: boolean): void
		/** Tells the area whether the cursor is over the thumb, which lights up while it is. */
		public OnThumbHover(hovered: boolean): void
		/**
		 * Advances the area to `now`, on the `hrtime()` clock: runs `Sync` while the area is hovered,
		 * dragged or scrolling and every 150 ms otherwise, and hides the thumb of an area the cursor
		 * is off 900 ms after the last scroll. {@link TickScrollAreas} calls it for every mounted area.
		 */
		public Tick(now: number): void
		/**
		 * Lays the area out for its offset: moves the content, places and sizes the thumb, turns the
		 * edge fades and hides the rows far out of sight. The layout is skipped when neither the
		 * offset, the sizes nor the number of rows changed since the last call.
		 */
		public Sync(): void
	}
	/**
	 * Hands the content area over to a controller, which takes back the offset the area was left
	 * at. The window mounts a new one every time it opens - a closed menu drops its whole body -
	 * so the offset is kept here rather than in the controller that measured it.
	 */
	function SetContentScroll(controller: Nullable<ScrollController>): void
	/**
	 * Names the page the content area is showing. A page it is already on keeps the offset it was
	 * left at, so reopening the menu lands where it was; any other page starts at the top.
	 */
	function SetContentPage(page: string): void
	/** The controller of the menu window's content area, or `undefined` while the window has none. */
	function ContentScroll(): Nullable<ScrollController>
	/**
	 * Brings the row of `entry` into view in the menu window's content area once the row is mounted
	 * with a height. The request is dropped after 30 frames, at once while the window has no content
	 * area, and when a later one replaces it.
	 */
	function RequestScrollTo(entry: object): void
	/**
	 * Advances every mounted {@link Scroll} area to `now`, then a pending {@link RequestScrollTo}.
	 * The menu calls it once a frame, except while something is being dragged.
	 */
	function TickScrollAreas(now: number): void
	/**
	 * Forgets every scroll area, the content area's controller and a pending
	 * {@link RequestScrollTo}; the menu calls it as it unmounts.
	 */
	function ResetScrollAreas(): void
	/**
	 * A scroll area. `fade` names the surface the area lies on and turns the edge scrims on: a strip
	 * of that colour over each edge the content runs past, so a cut row fades out instead of ending
	 * on the border.
	 */
	function Scroll(props: {
		style?: RmlStyle
		fade?: keyof IThemePalette
		controller?: (controller: Nullable<ScrollController>) => void
		rootRef?: (element: Nullable<HTMLElement>) => void
		children?: React.ReactNode
	}): React.ReactElement
}
