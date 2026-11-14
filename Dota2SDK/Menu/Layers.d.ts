// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The full-screen elements the menu's surfaces render into, from the bottom up: `panels`,
	 * `cards`, `menuCards`, `main`, `portal`. None of them takes the pointer itself.
	 */
	interface LayerSet {
		/** The root that holds `main` and `portal`; without layer documents, the one that holds all. */
		readonly root: HTMLElement
		/** The world layer: overlays anchored to the world, under every card. */
		readonly panels: HTMLElement
		/** The cards placed on the screen, over the world layer and under the menu's own panels. */
		readonly cards: HTMLElement
		/**
		 * The menu's own panels: the preview card and its stage. They stand over the cards of every
		 * package and under the menu chrome, so what the menu opens beside the window is covered by
		 * no more than the window itself — a HUD card another script drew cannot come over it.
		 */
		readonly menuCards: HTMLElement
		/** The menu window. */
		readonly main: HTMLElement
		/** The overlays of {@link ShowOverlay} over the menu window: tooltips, popups, modals. */
		readonly portal: HTMLElement
		/** Invisible document used only for intrinsic resource measurements. */
		readonly measure: HTMLElement
	}
	/**
	 * Bumped whenever the layers are built or torn down. Style sheets key on it: a sheet synced
	 * before the layer documents existed has to land on them once they do.
	 */
	function LayersEpoch(): number
	/**
	 * The documents a style sheet has to reach. With layer documents each carries its own sheet —
	 * a document resolves selectors against itself alone; without them everything lives in the
	 * base document and one sheet covers it.
	 */
	function StyleSheetTargets(): readonly HTMLDocument[]
	/**
	 * The layer set, built on first use and kept until {@link ResetLayers}. On a host with layer
	 * documents the world, the cards, the menu's own panels and the menu chrome each live in a
	 * document of their own, so a layout change in one never reformats another, and the same layer
	 * of every package stacks at the same height. Without them all share one root in the base
	 * document, in the same order.
	 */
	function Layers(): LayerSet
	/**
	 * Keeps the layers marked alive: stamps them with `now` every 250 ms and, every 500 ms, closes
	 * layers left behind with a stamp older than 1200 ms. `true` when one of this package's own
	 * layers has gone missing; the menu then builds itself again. The menu calls it once a frame.
	 */
	function TickLayers(now: number): boolean
	/**
	 * Sets the CSS `filter` of the menu window's layer, or takes it off with `undefined`. Does
	 * nothing before {@link Layers} has built the set.
	 */
	function SetMainFilter(filter: Nullable<string>): void
	/**
	 * Takes the layers down with every element in them; the next {@link Layers} builds a fresh set.
	 * Moves {@link ElementsFreedEpoch} on.
	 */
	function ResetLayers(): void
	/**
	 * Writes the typeface each layer document is set in onto its root: the world document wears
	 * the world's, the cards document the panels', the menu's own panels and the chrome the menu's.
	 * A stack that stands in a document of another scope writes its own onto its element.
	 */
	function ApplyRootFont(): void
}
