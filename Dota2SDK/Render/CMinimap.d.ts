// AUTO-GENERATED - do not edit.
/**
 * The minimap block and the buttons the game stacks beside it.
 *
 * Every rectangle follows the game: turning on `dota_hud_extra_large_minimap` or flipping the
 * HUD moves these panels and the numbers move with them, with nothing to configure.
 */
interface CMinimap extends CHUDSection {
	/**
	 * The area the minimap region actually covers: the map square, the glyph/scan column and the
	 * timers beside it.
	 *
	 * This is a union of those panels rather than the container they sit in — the game lays that
	 * container across the full width of the screen, so it would claim the whole bottom strip.
	 */
	get FullHUDContainer(): Nullable<Rectangle>
	/** The container the game gives the whole minimap region, spanning the screen's full width. */
	get Container(): Nullable<Rectangle>
	/** The square the minimap occupies in the HUD. */
	get Minimap(): Nullable<Rectangle>
	/**
	 * The surface the minimap draws the world onto — the rectangle to project world coordinates
	 * through. It overflows {@link CMinimap.Minimap} on every side.
	 */
	get MinimapRenderBounds(): Nullable<Rectangle>
	/** The glyph of fortification button. */
	get Glyph(): Nullable<Rectangle>
	/** The scan button. */
	get Scan(): Nullable<Rectangle>
	/** The Roshan timer icon. */
	get Roshan(): Nullable<Rectangle>
	/** The Tormentor timer icon. */
	get Miniboss(): Nullable<Rectangle>
	/** Re-derives every rectangle, each one moved to where the game paints it. */
	Refresh(): void
	DebugDraw(): void
}
