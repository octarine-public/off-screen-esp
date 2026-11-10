// AUTO-GENERATED - do not edit.
/** How a {@link CRenderAnchor}'s point is put on the pixel grid. */
declare enum ERenderAnchorFlags {
	None = 0,
	/** The point lands on whole pixels, rounded down as `RendererSDK.WorldToScreen` rounds. */
	Snap = 1,
	/**
	 * The projected point lands on the pixel the game draws a health bar at, before the screen
	 * offset: pulled toward the middle of the screen by (width - 1) / width on both axes, then cut
	 * toward it. Content laid on a unit's bar stands on the game's own bar pixel for pixel.
	 */
	HealthBarPixel = 2
}
/**
 * A point UI content is pinned to: an entity's origin plus an offset in world units,
 * or a fixed world point, plus an offset in screen px. Content drawn relative to it - MenuSDK
 * `Canvas.Anchor`, an element's `setAnchor(anchor.Slot)` - is placed by the core when the frame is
 * presented, with that frame's camera and positions, so it keeps up with the camera and the unit
 * even on a frame whose script pass ran late. Define it when its target or offsets change, not
 * every frame, and `Free` it when its target is gone: there are 4096 slots.
 *
 * An entity anchor is hidden while the game has no entity at its index, and for the one present
 * after it is first pointed at an entity, whose origin the core starts reading then.
 *
 * On a host without anchors `Slot` stays -1 and `Project` gives the same point from the script.
 * @example
 * const bar = new CRenderAnchor()
 * bar.SetEntity(unit.Index, 0, 0, unit.HealthBarOffset)
 * canvas.Anchor(bar)
 * canvas.Rect(new Vector2(-50, -8), new Vector2(100, 8), { color: Color.Green })
 */
declare class CRenderAnchor {
	/** The core's slot for the anchor, or -1 while it is undefined or the host has no anchors. */
	public get Slot(): number
	/** Whether the anchor has been defined and not freed since. */
	public get Defined(): boolean
	/**
	 * Pins the anchor `x, y, z` world units from entity `index`'s origin and `screenX, screenY` px
	 * from where that lands. Out-of-range arguments leave the anchor as it was.
	 * @example
	 * anchor.SetEntity(hero.Index, 0, 0, hero.HealthBarOffset, 0, -4)
	 */
	public SetEntity(index: number, x: number, y: number, z: number, screenX?: number, screenY?: number, flags?: ERenderAnchorFlags): void
	/**
	 * Pins the anchor to the world point `x, y, z`, `screenX, screenY` px from where it lands.
	 * @example
	 * anchor.SetWorld(rune.x, rune.y, rune.z + 64)
	 */
	public SetWorld(x: number, y: number, z: number, screenX?: number, screenY?: number, flags?: ERenderAnchorFlags): void
	/** Releases the slot; what is drawn relative to the anchor is hidden until it is defined again. */
	public Free(): void
	/**
	 * Where the anchor lands in this frame's projection, computed by the script: `false` when it is
	 * undefined, its entity is gone, or the point is off the frame.
	 * @example
	 * if (anchor.Project(screen)) { ... }
	 */
	public Project(out: [number, number]): boolean
}
