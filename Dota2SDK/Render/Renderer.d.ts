// AUTO-GENERATED - do not edit.
/** Viewport scaling and Source 2 camera projection. Drawing belongs to menu-sdk's RmlUi surfaces. */
declare class CRenderer {
	public readonly ProportionalBase = 1080
	public readonly WindowSize: Vector2
	/**
	 * Applies the native viewport before a frame's visual events. A frame that reports no
	 * surface — either dimension 0, as a minimized window or a swap chain mid-resize does —
	 * leaves the last viewport in place.
	 */
	public UpdateViewport(width: number, height: number): void
	public IsInScreenArea(position: Vector2, scale?: number): boolean
	public GetWidthScale(screenSize?: Vector2): number
	public GetHeightScale(screenSize?: Vector2): number
	public ScaleWidth(w: number, screenSize?: Vector2): number
	public ScaleHeight(h: number, screenSize?: Vector2): number
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
	public ScreenToWorld(screen: Vector2): Vector3
	public GetAspectRatio(windowSize?: Vector2): "4x3" | "16x9" | "16x10" | "21x9" | "unknown"
}
