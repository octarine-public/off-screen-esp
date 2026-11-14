// AUTO-GENERATED - do not edit.
/**
 * Finds the panels of the game's Panorama windows. Use the `Source2SDK.Panorama` instance: a
 * bare `Panorama` is the host's own namespace.
 */
declare class CPanorama {
	/**
	 * The root panel of a Panorama window, or undefined while the window does not exist.
	 * @example
	 * const hud = Panorama.Root(PanoramaWindow.Hud)
	 */
	public Root(window: string): Nullable<Panel>
	/**
	 * Finds a panel by id anywhere under a window and caches it, so repeated calls do not walk
	 * the tree again. The result is dropped automatically when the window is rebuilt.
	 * @example
	 * const map = Panorama.Find(PanoramaWindow.Hud, "map_render")
	 */
	public Find(window: string, id: string): Nullable<Panel>
	/**
	 * Drops every panel {@link Find} has cached for `window`, so the next `Find` walks its tree
	 * again. The SDK calls it when a window is created or destroyed.
	 */
	public Forget(window: string): void
	/** Stops the handler whose handle `Panel.OnEvent` answered. Main thread only. */
	public RemoveEventHandler(handle: number): void
	/**
	 * Sends the event `event` describes, written as Panorama writes one (`Name( argument, … )`), to
	 * whatever handles it with no panel named, after `delay` seconds.
	 * @example
	 * Source2SDK.Panorama.DispatchEvent("PanoramaComponent_Store_PurchaseCompleted( '42' )")
	 */
	public DispatchEvent(event: string, delay?: number): void
}
