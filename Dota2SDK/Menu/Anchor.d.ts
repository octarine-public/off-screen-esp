// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The point a panel is placed from: a corner, the middle of an edge, or `"center"`. */
	type PanelAnchor = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right"
	/**
	 * Records the game window's size in px and, when it changed, calls every
	 * {@link OnViewportChanged} listener. The menu calls it with the size its host reports.
	 */
	function SetViewport(width: number, height: number): void
	/** A count that goes up each time the viewport size changes, for `React.useSyncExternalStore`. */
	function ViewportVersion(): number
	/**
	 * The game window's size in px as a new `[width, height]` array, 1920 by 1080 until the host
	 * reports one.
	 */
	function Viewport(): [number, number]
	/**
	 * The game window's width in px, read without the array {@link Viewport} builds, for a caller
	 * that reads it many times a frame.
	 */
	function ViewportWidth(): number
	/** The game window's height in px, read without the array {@link Viewport} builds. */
	function ViewportHeight(): number
	/** Calls `listener` each time the viewport size changes; returns the function that removes it. */
	function OnViewportChanged(listener: () => void): () => void
	/**
	 * The absolute-position style that places an element at `anchor`, `offsetX` and `offsetY` dp in
	 * from the edges it names. On a centred axis the element's left or top edge, not its middle,
	 * sits at the middle of the container, moved by the offset.
	 */
	function AnchorStyle(anchor: PanelAnchor, offsetX: number, offsetY: number): RmlStyle
}
