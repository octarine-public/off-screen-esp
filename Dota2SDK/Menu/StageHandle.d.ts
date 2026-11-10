// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Something a script draws on its preview's stage that the hand can take: a {@link CStageArea}
	 * over it, lit while it is in hand too, that carries it to another of its places
	 * ({@link CPreviewDrag}) - a drop writes its place, a click or a right click opens its settings
	 * beside the stage ({@link StageHandleArea} wires the mouse). Where it stands is laid on the screen
	 * by the script (`ScreenBox`) and kept here in stage px.
	 *
	 * @example
	 * class StarHandle extends CStageHandle<EStarPlace> {
	 * 	public Drop(position: EStarPlace): void { settings.Place = position }
	 * 	protected ScreenBox(position: EStarPlace, out: ScreenRect): ScreenRect { return star.Box(position, out) }
	 * }
	 * // once per frame, while the stage is shown
	 * star.Draw(handle.Lay(settings.Place, width, height))
	 */
	abstract class CStageHandle<T extends number> extends CStageArea implements CPreviewDragTarget<T> {
		public readonly Positions: readonly T[]
		protected readonly frame: Readonly<ScreenRect>
		/** The hand that carries it. */
		public readonly Drag: CPreviewDrag<T>
		/**
		 * @param Positions every place it can stand.
		 * @param frame the stage on screen, in px, as the preview's host lays it.
		 * @param settings its settings, opened beside the stage.
		 * @param title what its tooltip names it.
		 */
		constructor(Positions: readonly T[], frame: Readonly<ScreenRect>, settings: Node, title: string)
		/** Whether it is in hand. */
		public get Held(): boolean
		/** A drop landed on `position`. */
		public abstract Drop(position: T): void
		/** Its box at `position`, into `out`, in stage px. */
		public Box(position: T, out: ScreenRect): ScreenRect
		/** Takes it by the screen point `x`, `y`; a release that never left the slop runs `click`. */
		public Grab(x: number, y: number, click: () => void): void
		/** Takes it off the stage: not shown, nothing in hand, its pointer area gone with its tooltip. */
		public Hide(): void
		/** Its box at `position`, into `out`, in screen px. */
		protected abstract ScreenBox(position: T, out: ScreenRect): ScreenRect
		/**
		 * Lays it on a stage `width` by `height` px: at `place`, or in hand where the cursor carries it,
		 * its pointer area over it. Answers where it stands on the screen, in px.
		 */
		protected Lay(place: T, width: number, height: number): Readonly<ScreenRect>
	}
}
