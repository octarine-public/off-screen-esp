// AUTO-GENERATED - do not edit.
/**
 * A Panorama panel together with the chain of its ancestors.
 *
 * Panorama reports offsets relative to the parent and gives no way to walk upwards, so the
 * chain is what makes {@link Panel.Rect} possible. Resolve a panel once and keep the instance:
 * every read is a native call, and re-resolving walks the whole window tree.
 */
declare class Panel {
	/** False once the game has destroyed the panel — resolve it again to keep using it. */
	public get IsValid(): boolean
	/**
	 * Whether the panel and every one of its ancestors is shown; false also once the game has
	 * destroyed it. A hidden panel keeps its layout size and offsets, so this flag is what tells
	 * it from a shown one, and {@link Rect} is undefined while it is false.
	 */
	public get IsVisible(): boolean
	/**
	 * The panel's layout rectangle in screen pixels. Undefined when the panel is destroyed, it or
	 * an ancestor is hidden, it is not laid out, or its width or height is 0. The CSS `ui-scale`
	 * is in the rectangle; a paint-time `transform` or `pre-transform-scale2d` is not, so a panel
	 * an animation shrinks or slides still reports where layout put it.
	 */
	public get Rect(): Nullable<Rectangle>
	/**
	 * The part of {@link Rect} that no ancestor clips away, or undefined when nothing of the
	 * panel reaches the screen.
	 *
	 * A panel may overflow its parent: zooming the minimap grows its render surface to more
	 * than three times the container that holds its place in the HUD, while the container
	 * itself does not move. {@link Rect} stays the rectangle the panel maps its contents onto —
	 * the one to project world coordinates through — and this is the area drawing may touch.
	 * @example
	 * const clip = panel.VisibleRect
	 * if (clip !== undefined) {
	 * 	canvas.Image(path, pos, size, { color, clip })
	 * }
	 */
	public get VisibleRect(): Nullable<Rectangle>
	/** True when the panel carries the given CSS class. */
	public HasClass(name: string): boolean
	/** True when the panel or any of its ancestors carries the given CSS class. */
	public AscendantHasClass(name: string): boolean
	/** Gives the panel the CSS class `name`. Main thread only. */
	public AddClass(name: string): void
	/**
	 * The panel's attribute `name` as the game's layout or script set it, or `fallback` when the
	 * panel has none.
	 * @example
	 * const hero = Number(card.Attribute("heroid", "-1"))
	 */
	public Attribute(name: string, fallback?: string): string
	/**
	 * Shows or hides the panel, the way the game does when it folds a HUD element away. A write
	 * to the game's tree: run it on the main thread, through `MainThread.Queue`.
	 * @example
	 * await MainThread.Queue(() => chat?.SetVisible(false))
	 */
	public SetVisible(visible: boolean): void
	/**
	 * Finds a descendant by id at any depth, keeping the ancestor chain intact.
	 * @example
	 * const map = hud.Find("map_render")
	 */
	public Find(id: string): Nullable<Panel>
	/** The child with id `id` directly under the panel, or undefined; {@link Find} looks deeper. */
	public FindChild(id: string): Nullable<Panel>
	/** How many children the panel has; 0 once the game has destroyed it. */
	public get ChildCount(): number
	/** The panel's child at `index`, counted in the order the game lays them out, or undefined. */
	public Child(index: number): Nullable<Panel>
	/**
	 * Whether the panel is of Panorama type `type`: `Panel`, `Label`, `Image`, or one the game
	 * declares, such as `CitadelHeroCard`.
	 */
	public IsType(type: string): boolean
	/**
	 * Makes a panel of Panorama type `type` with id `id` the last child of this one and answers it,
	 * undefined when the game refuses. A write to the game's tree: run it on the main thread,
	 * through `MainThread.Queue`.
	 * @example
	 * const tier = card.FindChild("meta_tier") ?? card.CreateChild("Label", "meta_tier")
	 */
	public CreateChild(type: string, id: string): Nullable<Panel>
	/**
	 * Replaces the panel's inline style with `css`, written as in a Panorama stylesheet. A write to
	 * the game's tree: run it on the main thread.
	 * @example
	 * tier?.SetStyle("font-size: 14px; color: #ffffff;")
	 */
	public SetStyle(css: string): void
	/** The text a `Label` panel shows; empty for a panel of another type. */
	public get Text(): string
	/** Sets the text a `Label` panel shows; a panel of another type ignores it. Main thread only. */
	public SetText(text: string): void
	/**
	 * With `false`, lets clicks and hovers pass through the panel and everything under it to what
	 * lies beneath; `true` lets the mouse reach them again. Main thread only.
	 */
	public SetHitTestEnabled(enabled: boolean): void
	/**
	 * With `true`, a click on the panel fires `Activated` and gives it the focus, as on a button;
	 * `false` takes both away. Main thread only.
	 * @example
	 * option.SetClickable(true)
	 * option.OnEvent("Activated", () => Pick(index))
	 */
	public SetClickable(enabled: boolean): void
	/** Makes the panel the first child of its parent; a window's root stays as it is. Main thread only. */
	public MoveFirst(): void
	/**
	 * Calls `callback` each time the panel receives the Panorama event `event`, such as `Activated`
	 * for a click, with the arguments the event carries. Answers the handle
	 * `Panorama.RemoveEventHandler` takes, undefined once the game has destroyed the panel. Main
	 * thread only.
	 * @example
	 * const handle = button.OnEvent("Activated", () => (chosen = mode))
	 */
	public OnEvent(event: string, callback: (...args: unknown[]) => void): Nullable<number>
	/**
	 * Runs `script` as JavaScript in the game's own Panorama, where `$.GetContextPanel()` is the
	 * panel loaded from a layout file nearest to this one: the panel itself when it has a layout
	 * of its own, as a dashboard page does, and for a panel made with `CreateChild` the nearest
	 * ancestor that has one. Main thread only.
	 * @example
	 * page.RunScript(`$.GetContextPanel().AddClass("Compact")`)
	 */
	public RunScript(script: string): void
}
