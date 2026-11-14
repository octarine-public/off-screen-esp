// AUTO-GENERATED - do not edit.
/**
 * Where the game's HUD is on screen, read from Panorama rather than guessed.
 *
 * Every rectangle comes from the panel the game itself lays out, so resolution, HUD scale, a
 * flipped minimap, an extra-large minimap, a hero with six abilities or a courier with none all
 * report correctly with nothing to configure. A rectangle is undefined while the panel behind it
 * is gone or takes part in no layout — that is the signal to skip drawing, not a reason to fall
 * back on a guess.
 * @example
 * const inventory = GUIInfo.LowerHUD.MainInventorySlots[0]
 * if (inventory !== undefined) {
 * 	RendererSDK.OutlinedRect(inventory.pos1, inventory.Size)
 * }
 */
interface CGUIInfo {
	debugDraw: boolean
	MenuScale: number
	/** The root of the HUD window, the entry point for any panel the SDK does not name. */
	get HUD(): HUDPanel
	get TopBar(): CTopBar
	get Minimap(): CMinimap
	/** The quickbuy, courier and stash block at the right of the lower HUD. */
	get Shop(): CShop
	/** The shop the game opens over the HUD. */
	get OpenShop(): COpenShop
	/** @deprecated the game lays out one shop — read {@link CGUIInfo.OpenShop}. */
	get OpenShopMini(): COpenShop
	/** @deprecated the game lays out one shop — read {@link CGUIInfo.OpenShop}. */
	get OpenShopLarge(): COpenShop
	get PreGame(): CPreGame
	get Scoreboard(): CScoreboard
	/** The lower HUD of the unit the game currently has selected. */
	get LowerHUD(): CLowerHUD
	/**
	 * True while the player keeps the minimap on the right-hand side: the game marks its HUD with
	 * the `HUDFlipped` class and mirrors the minimap and the lower HUD to the other side.
	 */
	get HUDFlipped(): boolean
	/**
	 * The root of any Panorama window, for panels outside the HUD.
	 * @example
	 * const dashboard = GUIInfo.Root(PanoramaWindow.Dashboard)
	 */
	Root(window: PanoramaWindow): HUDPanel
	/**
	 * A panel under the HUD reached by walking direct children — the cheap lookup, and the one
	 * to prefer whenever the layout is known.
	 * @example
	 * const chat = GUIInfo.Panel("HUDElements", "HudChat")
	 */
	Panel(...path: string[]): HUDPanel
	/**
	 * A panel under the HUD found by id at any depth. The lookup is cached, but the first one
	 * walks the whole window: prefer {@link CGUIInfo.Panel} where the path is known.
	 * @example
	 * const buffs = GUIInfo.Find("buffs")
	 */
	Find(id: string): HUDPanel
	/**
	 * Counts the times what {@link CGUIInfo.Contains} answers may have changed: the HUD laid out
	 * anew, the window resized, the shop or the stats panel opened or closed. While it holds, and the camera with it
	 * (`Source2SDK.Projection.ViewEpoch`), a point that stands still in the world is still under
	 * the HUD or still clear of it.
	 * @example
	 * if (this.checkedAt !== GUIInfo.Epoch) {
	 * 	this.checkedAt = GUIInfo.Epoch
	 * 	this.underHUD = GUIInfo.Contains(screen)
	 * }
	 */
	get Epoch(): number
	/**
	 * Watches what moves the HUD without a reading noticing it: the shop or the stats panel
	 * opening, another unit selected, the game's UI or rules state changing. Any of them has
	 * the passes read the HUD for a moment. Also draws the debug overlay from what the last
	 * reading found.
	 */
	OnDraw(): void
	/**
	 * Reads the HUD out of the game on a `Draw2D` pass when it may have moved, and four times a
	 * second otherwise.
	 *
	 * A pass reads when a panel was built or first asked about outside a reading. It also reads
	 * for half a second after the window was resized, the HUD's windows were built or torn down,
	 * {@link CGUIInfo.OnDraw} saw the HUD change, or a reading found it moved, so a layout the
	 * game finishes over several frames is followed until it lands. A pass asked for on top of
	 * the throttled rate - the menu asks for one every frame while it is open and an overlay
	 * panel stands on screen, for the panel's own motion - reads nothing anew within `ReadEvery`
	 * of the last reading, even then.
	 *
	 * The reading is queued onto the main thread rather than done here. Panorama reads take no
	 * lock on the native side and scripts run on their own thread, so a panel read while the
	 * game is part-way through its own layout can be caught being destroyed; inside a
	 * main-thread session the game main thread is parked and cannot be. Parked is the cost: the
	 * game waits out the whole reading, and whatever the script thread still has queued before
	 * it, which is why a HUD standing still is not read every pass. The pass skips frames that
	 * carry a server tick, so the main thread is never parked behind one. The session is
	 * drained asynchronously, so every rectangle a script reads was measured at the last
	 * reading.
	 */
	OnDraw2D(): void
	/** Drops every cached panel; the next readings look them up in the game's tree again. */
	Invalidate(): void
	/**
	 * Hands out fresh sections once the window has been resized, and reads the HUD every pass
	 * until the new layout has landed.
	 *
	 * The game lays the HUD out anew on its own schedule, and the reading that finds it moved
	 * can land before the new window size does. A script that worked numbers out of a section
	 * then — a size through `ScaleHeight`, a copy of a rectangle — took them at the old scale,
	 * and with nothing in the HUD moving again, nothing would tell it to work them out anew.
	 */
	OnWindowSizeChanged(): void
	DebugDraw(): void
	/** How many abilities the game is showing for the selected unit. */
	GetVisibleAbilities(): number
	/**
	 * @deprecated the game lays out the abilities of the unit it has selected, so the argument
	 * cannot change the answer — read {@link CGUIInfo.GetVisibleAbilities}.
	 */
	GetVisibleAbilitiesForUnit(_ent?: Nullable<Entity>): number
	/**
	 * @deprecated the game lays out one lower HUD, for the unit it has selected, so the argument
	 * cannot change the answer — read {@link CGUIInfo.LowerHUD}.
	 */
	GetLowerHUDForUnit(_unit?: Nullable<Unit>): CLowerHUD
	/** True when the position falls on any part of the HUD that swallows a click. */
	Contains(position: Vector2): boolean
	ContainsTopBar(position: Vector2): boolean
	ContainsLowerHUD(position: Vector2): boolean
	ContainsMiniMap(position: Vector2): boolean
	ContainsShop(position: Vector2): boolean
	ContainsShopButtons(position: Vector2): boolean
	ContainsScoreboard(position: Vector2): boolean
	ContainsTimeOfDayTimeUntil(position: Vector2): boolean
	GetWidthScale(screenSize?: Vector2): number
	GetHeightScale(screenSize?: Vector2): number
	ScaleWidth(w: number, screenSize?: Vector2): number
	ScaleHeight(h: number, screenSize?: Vector2): number
	ScaleVector(w: number, h: number, screenSize?: Vector2): Vector2
	ScaleWidthMenu(w: number, screenSize?: Vector2): number
	ScaleHeightMenu(h: number, screenSize?: Vector2): number
}
declare const GUIInfo: CGUIInfo
