// AUTO-GENERATED - do not edit.
/** Viewport scaling and Source 2 camera projection. Drawing belongs to menu-sdk's RmlUi surfaces. */
declare class CRenderer {
	/** The window height, in pixels, that sizes given to the `Scale` methods are stated for. */
	public readonly ProportionalBase = 1080
	/**
	 * The viewport in pixels as the last frame reported it; (1, 1) before the first frame.
	 * `WindowSizeChanged` fires when it changes.
	 */
	public readonly WindowSize: Vector2
	/**
	 * Applies the native viewport before a frame's visual events. A frame that reports no
	 * surface — either dimension 0, as a minimized window or a swap chain mid-resize does —
	 * leaves the last viewport in place.
	 */
	public UpdateViewport(width: number, height: number): void
	/**
	 * Whether `position`, in screen pixels, is inside the window, or with `scale` inside the
	 * centred area that many times the window's size. A point on the edge is outside.
	 */
	public IsInScreenArea(position: Vector2, scale?: number): boolean
	/**
	 * What a width stated for a 1080-high window is multiplied by: the height of `screenSize`
	 * over 1080, with 1280x1024 counted as 960 high and 720x576 as 540 high.
	 */
	public GetWidthScale(screenSize?: Vector2): number
	/**
	 * What a height stated for a 1080-high window is multiplied by: the height of `screenSize`
	 * over 1080.
	 */
	public GetHeightScale(screenSize?: Vector2): number
	/** `w`, a width stated for a 1080-high window, times {@link GetWidthScale} and rounded. */
	public ScaleWidth(w: number, screenSize?: Vector2): number
	/** `h`, a height stated for a 1080-high window, times {@link GetHeightScale} and rounded. */
	public ScaleHeight(h: number, screenSize?: Vector2): number
	/** A new vector of `w` through {@link ScaleWidth} and `h` through {@link ScaleHeight}. */
	public ScaleVector(w: number, h: number, screenSize?: Vector2): Vector2
	/**
	 * Where a world point stands on the screen, on whole pixels: a 2D point stands on the ground
	 * under it. Undefined when it does not project, and with `cull` when it stands more than a
	 * quarter of the window off any edge. Written into `out` when one is given, so a caller
	 * projecting every frame allocates nothing; a new vector otherwise.
	 * @example
	 * const screen = new Vector2()
	 * if (Renderer.WorldToScreen(unit.Position, true, screen) !== undefined) {
	 * 	marker.Place(screen)
	 * }
	 */
	public WorldToScreen(position: Vector2 | Vector3, cull?: boolean, out?: Vector2): Nullable<Vector2>
	/**
	 * The world point that shows at the screen pixel `screen` on the near plane of a camera at
	 * the game camera's position and angles. With the camera's position it gives the ray through
	 * the pixel, not where the ray lands. The camera is one the core builds, with a 66 degree
	 * vertical field of view, not the engine's own projection.
	 */
	public ScreenToWorld(screen: Vector2): Vector3
	/**
	 * The aspect ratio of `windowSize` by name: `"4x3"` for a width over height of 1.25 to 1.35,
	 * `"16x10"` for 1.5 to 1.69, `"16x9"` for 1.7 to 1.85, `"21x9"` for 2.2 to 2.4, and
	 * `"unknown"` for any other.
	 */
	public GetAspectRatio(windowSize?: Vector2): "4x3" | "16x9" | "16x10" | "21x9" | "unknown"
}
