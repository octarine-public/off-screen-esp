// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function QueueDragMove(x: number, y: number): void
	function FlushDragMove(): void
	/**
	 * Opens the drag shield over the menu and hands the hand's moves to `onMove`, in layout units,
	 * flushed once per frame; `onEnd` runs when the button is let go, wherever that happens. A drag
	 * that follows the host's cursor on its own each frame - an overlay card - passes no `onMove`
	 * and takes only the release. A drag still open when the next one begins is released first, so
	 * its owner is told rather than forgotten.
	 */
	function BeginDrag(onMove?: (x: number, y: number) => void, onEnd?: () => void): void
	function EndDrag(): void
	/**
	 * Takes the shield down once the drag is over. The last move the shield queued still lands, and
	 * an owner the shield never got to tell hears the release here.
	 */
	function SettleDrag(): void
	function IsDragging(): boolean
}

declare namespace MenuSDK {
	/**
	 * What a {@link CPreviewDrag} carries: something a script draws on its preview's stage that stands
	 * at one of a few places `T` - its menu's dropdown option - and the boxes it takes at each.
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
	 * Something drawn on a preview's stage taken off it by the hand: it follows the cursor, held at
	 * the point it was taken by, while a mark stands at every place it can stand - the one a drop
	 * would land on green, the rest an accent ring. A drop writes its place; a drop off the stage
	 * leaves it where it was, and a press that never went 4 dp - as far as the menu's own controls
	 * let a hand go before a drag - is a click. The stage holds still while it is in hand.
	 *
	 * @example
	 * const drag = new CPreviewDrag(target, stage)
	 * // the marks: one element each, under the stage's pointer areas
	 * drag.Refs.map(ref => <div ref={ref} style={{ position: "absolute", display: "none" }} />)
	 * // the left button down on the thing
	 * drag.Grab(screenX, screenY, area, () => OpenElementSettings(node, stage))
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
