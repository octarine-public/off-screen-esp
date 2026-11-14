// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Which stack a panel stands in. The world, the cards and the menu's own panels are layer
	 * documents of their own, stacked in that order, so a card is never covered by something
	 * anchored to the world and the menu's panels by neither — not even by another package's
	 * overlays, which build the same layers.
	 *
	 * @example
	 * RegisterPanel("rune-markers", () => <Markers />, EPanelLayer.World)
	 */
	const enum EPanelLayer {
		/** Anchored to a point in the world: markers, ESP, anything the camera carries. */
		World = 0,
		/** Anchored to the screen: the cards a user places and drags. */
		Screen = 1,
		/**
		 * Part of the menu rather than of the HUD — the preview card and anything else that only
		 * stands while the menu is open. It stands in a layer of its own over every package's cards
		 * and under the menu chrome, so it goes where the menu goes: nothing another script put on
		 * the screen can cover it, and the window it docks to stays the one thing that can. It wears
		 * the menu's theme instead of the one the panels are dressed in.
		 */
		Menu = 2
	}
	/**
	 * Where the menu's own panels stand in the menu stack: the preview card and its stage, which open
	 * a stacking context of their own for the glass they lay under their bands.
	 */
	const MenuPanelZ = 10
	/**
	 * Where a drawing surface on the menu's layer stands: one over the menu's own panels, so what
	 * a preview paints on it shows over its stage rather than under the card's glass.
	 */
	const MenuSurfaceZ: number
	/**
	 * Renders the three panel stacks into their layers; a stack already mounted is left as it is.
	 * The menu calls it when it mounts.
	 */
	function MountPanels(): void
	/** Registers a panel in one of the host's stacks; returns the handle that takes it back out. */
	function RegisterPanel(key: string, render: () => React.ReactNode, layer?: EPanelLayer): () => void
	/**
	 * The theme scope the panels in `layer` are drawn in. A panel that paints outside a render, such
	 * as a decorator string or a batched stroke, resolves its colours in this scope to match the
	 * surface it paints on.
	 *
	 * @example
	 * MenuSDK.WithThemeScope(MenuSDK.PanelScope(MenuSDK.EPanelLayer.World), () => marker.Draw())
	 */
	function PanelScope(layer: EPanelLayer): EThemeScope
	/** Rewrites the typeface every stack is set in, after a scope's font moved. */
	function RefontPanels(): void
	/** Re-renders the panels of all three stacks; {@link RefreshPanelLayer} re-renders one. */
	function RefreshPanels(): void
	/**
	 * Re-renders the panels of the stack `layer` names and leaves the other two alone, which costs
	 * less than {@link RefreshPanels} when only a panel in that stack has changed.
	 */
	function RefreshPanelLayer(layer: EPanelLayer): void
	/** Re-renders the stack that wears `scope`; a no-op for a scope no stack stands in. */
	function InvalidatePanels(scope: EThemeScope): void
	/** Re-resolves the token-valued styles of the stacks wearing `scope`, after its palette moved. */
	function RetintPanels(scope: EThemeScope): void
	/** Rebuilds the stack that wears `scope`, for a change no re-render can carry. */
	function RemountPanels(scope: EThemeScope): void
	/**
	 * Unmounts the three panel stacks and lets go of their elements. The registered panels stay, and
	 * the next {@link MountPanels} renders them again. The menu calls it when it unmounts.
	 */
	function ResetPanels(): void
	/**
	 * Destroys the elements the panels have removed and runs the actions queued with
	 * `runAfterFrame`. The menu calls it every frame.
	 */
	function TickPanels(): void
}
