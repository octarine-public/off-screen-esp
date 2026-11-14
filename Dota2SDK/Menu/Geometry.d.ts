// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * How far down a panel's place may be kept, in dp. A screen is 1080 dp high at a menu scale of
	 * 100% and taller in dp as the scale drops, so this is its height at the lowest scale the
	 * settings offer. It bounds what a config keeps; where a panel stands is held on screen as it is
	 * drawn.
	 */
	const PlaceLimitY: number
	/** How far right a panel's place may be kept, in dp: {@link PlaceLimitY} on the widest screen. */
	const PlaceLimitX: number
	/**
	 * A rectangle by its top-left corner and size: in screen pixels from {@link ElementScreenRect},
	 * in dp from {@link ElementRect}.
	 */
	interface ScreenRect {
		/** Left edge. */
		x: number
		/** Top edge. */
		y: number
		/** Width. */
		w: number
		/** Height. */
		h: number
	}
	/** Screen pixels in one dp at a menu scale of 100%: the screen height over 1080, at least 0.1. */
	function PixelsPerDp(): number
	/** `screenValue` screen pixels in dp at the current menu scale; {@link DpToPx} turns it back. */
	function ToLayoutUnits(screenValue: number): number
	/** `value` dp in screen pixels at the current screen height and menu scale. */
	function DpToPx(value: number): number
	/**
	 * Where `element` stands on screen and how big it is, in screen pixels: its `offsetLeft`,
	 * `offsetTop`, `clientWidth` and `clientHeight`.
	 */
	function ElementScreenRect(element: HTMLElement): ScreenRect
	/**
	 * The top-left corner `x`, `y` moved as little as keeps a `w` by `h` box `marginPx` inside every
	 * screen edge, all in screen pixels. A box too big for that keeps the left and top margins.
	 */
	function ClampToScreen(x: number, y: number, w: number, h: number, marginPx?: number): [number, number]
	/**
	 * The width and height `text` lays out at in the theme's face at `sizeDp`, in dp, with the font
	 * scale and the weight setting of `role` applied to the design `weight`. While the host cannot
	 * answer yet it estimates 0.6 of the size a character wide and 1.2 high, and the menu renders
	 * again once the host can.
	 */
	function MeasureTextDp(text: string, sizeDp: number, weight?: number, role?: EFontRole): [number, number]
	/**
	 * The width and height `text` lays out at in `family`, at a `sizePx` already in screen pixels:
	 * the font scale is not applied, the font weight setting is. Made for drawing redone every frame:
	 * `undefined` while the host cannot answer yet, a later frame's call finds the answer, and a miss
	 * never renders the menu again. Kept per face, weight, size and string, up to 2048 strings a
	 * size before the oldest quarter is dropped. The pair is the cache's: read it, do not keep it.
	 */
	function MeasureTextPx(text: string, sizePx: number, weight?: number, family?: string, italic?: boolean): Nullable<readonly [number, number]>
	/**
	 * How wide one line lays out at a font size already in screen pixels. Falls back to an estimate
	 * from the string's length while the host cannot answer yet, so a caller sizing a box around a
	 * reading never has to carry a guess of its own.
	 *
	 * @example
	 * const width = TextWidthPx(label, size, 700, "Stratum2")
	 */
	function TextWidthPx(text: string, sizePx: number, weight?: number, family?: string): number
	/**
	 * Whether `element` reports `offsetLeft` as a number, which {@link ElementScreenRect} and
	 * {@link ElementRect} read.
	 */
	function HasOffsets(element: HTMLElement): boolean
	/** {@link ElementScreenRect} in dp at the current menu scale. */
	function ElementRect(element: HTMLElement): ScreenRect
}
