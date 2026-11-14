// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Queues a cursor position in layout units for the open drag's `onMove`. Only the latest one
	 * queued is delivered, at the next {@link FlushDragMove}.
	 */
	function QueueDragMove(x: number, y: number): void
	/**
	 * Hands the queued move to the open drag's `onMove`, if one is waiting; nothing once the drag
	 * has ended. The menu calls it every frame.
	 */
	function FlushDragMove(): void
	/**
	 * Opens the drag shield over the menu and hands the cursor's moves to `onMove` in layout units,
	 * at most once a frame; `onEnd` runs once when the drag ends, wherever the button is let go or
	 * when the menu closes first. A drag that follows the host's cursor on its own, such as an
	 * overlay card's, passes no `onMove`. A drag still open when the next one begins is ended first,
	 * and its `onEnd` runs.
	 */
	function BeginDrag(onMove?: (x: number, y: number) => void, onEnd?: () => void): void
	/**
	 * Ends the open drag. At the menu's next frame the last queued move lands, `onEnd` runs unless
	 * it already has, and the shield comes down. Does nothing while no drag is open.
	 */
	function EndDrag(): void
	/**
	 * Takes the shield down once the drag is over. The last move the shield queued still lands, and
	 * an owner the shield never got to tell hears the release here.
	 */
	function SettleDrag(): void
	/** Whether a drag is open: from {@link BeginDrag} until the menu frame after its release. */
	function IsDragging(): boolean
}

declare namespace MenuSDK {
	/**
	 * What a {@link CPreviewDrag} carries: something a script draws on its preview's stage that
	 * stands at one of a few places `T`, such as the options of a dropdown, with the box it takes
	 * at each.
	 */
	abstract class CPreviewDragTarget<T extends number> {
		/** Every place it can stand, one drop mark each. */
		public abstract readonly Positions: readonly T[]
		/** Its box at `position`, into `out`, in stage px. */
		public abstract Box(position: T, out: ScreenRect): ScreenRect
		/** A drop landed on `position`. */
		public abstract Drop(position: T): void
	}
	/**
	 * Carries a {@link CPreviewDragTarget} across its preview's stage by hand. While held it follows
	 * the cursor from the point it was taken by, and every place it can stand shows a mark: the one
	 * nearest, where a drop lands, in the status-good colour, the rest as accent rings. A drop on the
	 * stage calls the target's `Drop`; a drop off it changes nothing. A press that moves less than
	 * 4 dp is a click. The preview's motion is paused while something is in hand.
	 *
	 * @example
	 * const drag = new MenuSDK.CPreviewDrag(target, stage)
	 * // the marks: one element each, under the stage's pointer areas
	 * drag.Refs.map(ref => <div ref={ref} style={{ position: "absolute", display: "none" }} />)
	 * // the left button down on the thing
	 * drag.Grab(screenX, screenY, area, () => MenuSDK.OpenElementSettings(node, stage))
	 * // once per frame
	 * drag.Update(width, height)
	 * const box = drag.Carrying ? drag.Carried : target.Box(place, out)
	 */
	class CPreviewDrag<T extends number> {
		/** Where the thing in hand stands this frame, in stage px. */
		public readonly Carried: ScreenRect
		/** One ref per place of the target, in its order: the element its drop mark is written to. */
		public readonly Refs: readonly ((element: HTMLElement | null | undefined) => void)[]
		/**
		 * @param target what is carried.
		 * @param frame the stage on screen, in px, as the preview's host lays it.
		 */
		constructor(target: CPreviewDragTarget<T>, frame: Readonly<ScreenRect>)
		/** Whether it is in hand and off the place it was taken from. */
		public get Carrying(): boolean
		/**
		 * Takes it, standing in `box` (stage px), by the screen point `x`, `y`; `click` runs on a
		 * release that never left the slop.
		 */
		public Grab(x: number, y: number, box: Readonly<ScreenRect>, click: () => void): void
		/** Places the thing in hand and the marks on a stage `width` by `height` px; none while nothing is carried. */
		public Update(width: number, height: number): void
		/** Takes the marks off the stage: the thing is not carried, or not shown. */
		public Hide(): void
	}
}
