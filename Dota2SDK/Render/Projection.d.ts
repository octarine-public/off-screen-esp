// AUTO-GENERATED - do not edit.
/** A screen-space rectangle in pixels, with the origin at the top-left of the viewport. */
interface IScreenRect {
	/** The left edge, in pixels from the left of the viewport. */
	x: number
	/** The top edge, in pixels down from the top of the viewport. */
	y: number
	/** Width in pixels. */
	w: number
	/** Height in pixels. */
	h: number
}
/**
 * World-to-screen projection through the engine's own view-projection matrix — the same one the
 * current frame is rendered with, so results cannot drift from what the player sees.
 *
 * `BeginFrame` must run once per frame before anything else; it captures the camera the rest of
 * the methods project through.
 */
interface CProjection {
	/** The viewport this projection currently targets, in pixels. */
	get Viewport(): [number, number]
	/**
	 * Counts the frames the camera or the viewport moved on. While it holds, a point that stands
	 * still in the world falls on the same pixel it did, so its projection can be kept rather than
	 * asked of the engine again.
	 * @example
	 * if (this.projectedAt !== Projection.ViewEpoch) {
	 * 	this.projectedAt = Projection.ViewEpoch
	 * 	this.screen = RendererSDK.WorldToScreen(camp.Position)
	 * }
	 */
	get ViewEpoch(): number
	/**
	 * Captures the viewport and the camera for this frame. Call once per frame, before projecting.
	 * @example
	 * Projection.BeginFrame(screenWidth, screenHeight)
	 */
	BeginFrame(width: number, height: number): void
	/**
	 * Screen position of a world point, in pixels, or undefined when it is behind the camera. A
	 * point in front of the camera but outside the frame still projects, to a position past the
	 * window's edge; the native side does not read `cull`.
	 * @example
	 * const screen = Projection.WorldToScreen(entity.Position)
	 * if (screen !== undefined) { ... }
	 */
	WorldToScreen(position: Vector3, cull?: boolean): Nullable<Vector2>
	/**
	 * Allocation-free `WorldToScreen`: writes `[x, y]` screen pixels into `out` and reports whether
	 * the point is in front of the camera; a point outside the frame lands past the window's edge.
	 * Prefer this when projecting every entity every frame.
	 *
	 * The buffer carries the camera as well as the point, because the games disagree on what the
	 * native side needs: Deadlock and CS2 project with the engine's own view-projection matrix and
	 * read the point alone, while Dota rebuilds the matrix from these camera fields.
	 * @example
	 * const screen: [number, number] = [0, 0]
	 * if (Projection.WorldToScreenXYZ(pos.x, pos.y, pos.z, screen)) { ... }
	 */
	WorldToScreenXYZ(x: number, y: number, z: number, out: [number, number], cull?: boolean): boolean
	/**
	 * World position under a screen point, on the ground plane the engine picks.
	 * @example
	 * const world = Projection.ScreenToWorld(new Vector2(mouseX, mouseY))
	 */
	ScreenToWorld(screen: Vector2): Vector3
	/**
	 * Writes into `out` the screen rectangle that holds a world box, `mins` and `maxs` being the
	 * offsets of its two opposite corners from `position`. All eight corners are projected and
	 * the rectangle spans them, so it holds the whole box from any angle. Returns false, with
	 * `out` left as it was, unless every corner projects: one behind the camera does not.
	 * @example
	 * const rect = { x: 0, y: 0, w: 0, h: 0 }
	 * const box = entity.BoundingBox
	 * if (Source2SDK.Projection.UnitBounds(entity.Position, box.MinOffset, box.MaxOffset, rect)) {
	 * 	console.log(rect.x, rect.y, rect.w, rect.h)
	 * }
	 */
	UnitBounds(position: Vector3, mins: Vector3, maxs: Vector3, out: IScreenRect): boolean
	/**
	 * Projects the eight corners of a world box, `mins` and `maxs` being offsets from `position`
	 * along the world axes, and writes them into `out` as sixteen numbers: `x, y` screen pixels
	 * per corner. The four corners at `mins.z` come first, in the order (min x, min y),
	 * (min x, max y), (max x, max y), (max x, min y), then the four at `maxs.z` in the same
	 * order. Returns false at the first corner that does not project, as one behind the camera
	 * does not, with `out` written up to it.
	 * @example
	 * const corners = new Float64Array(16)
	 * const { MinOffset, MaxOffset } = entity.BoundingBox
	 * if (Source2SDK.Projection.UnitCorners(entity.Position, MinOffset, MaxOffset, corners)) {
	 * 	console.log(corners[0], corners[1])
	 * }
	 */
	UnitCorners(position: Vector3, mins: Vector3, maxs: Vector3, out: Float64Array | number[]): boolean
}
