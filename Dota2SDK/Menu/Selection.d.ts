// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the way to an entry's row and flashes it, opening the menu first if it is closed. A switch
	 * without a row of its own is revealed where it stands: on the row hosting it, or on the card or
	 * page it heads.
	 */
	function RevealEntry(target: Entry): void
	/**
	 * Whether a node stands as a tab along the top of its top-level tab's General page instead of as
	 * a page in the navigation column: a child marked `generalTab` of a top-level tab that lists its
	 * pages there rather than laying them out inline.
	 */
	function IsGeneralTab(entry: Entry): boolean
	/** The pages a top-level tab lists in the navigation column, in the order it lists them. */
	function NavigationPages(tab: NodeEntry): NodeEntry[]
	/**
	 * How many nodes stand between `node` and the menu's root: 0 for a top-level tab, 1 for a page of
	 * a tab, 2 for a node on that page.
	 */
	function NodeDepth(node: NodeEntry): number
	/**
	 * Whether `node` has a visible child node that is a page of its own rather than a row, general
	 * tabs ({@link IsGeneralTab}) aside.
	 */
	function HasNodeChildren(node: NodeEntry): boolean
	/**
	 * Whether `node` has a visible child drawn as a row of its own: any control, or a node standing as
	 * tiles or as a sequences row. A child another row hosts does not count.
	 */
	function HasVisibleControls(node: NodeEntry): boolean
	/**
	 * Whether a top-level tab has a General page beside its pages: rows of its own, or a general tab
	 * to stand along the page's top.
	 */
	function HasGeneralPage(tab: NodeEntry): boolean
	/** Whether `node` is visible and marked open, and so is every node above it. */
	function NodeIsOpen(node: NodeEntry): boolean
	/**
	 * Marks `node` open or closed and nothing more: unlike {@link OpenNode}, it closes no other node,
	 * does not settle the card fold and does not redraw the menu.
	 */
	function SetOpenRaw(node: NodeEntry, value: boolean): void
	/**
	 * Whether the fold `node` takes as a card is settled. A page settles it for its cards the first
	 * time it draws them, from their header control; {@link OpenNode} and {@link DecideCardFold}
	 * settle it too, and a page drawing a settled card leaves its fold as it is.
	 */
	function CardFoldDecided(node: NodeEntry): boolean
	/**
	 * Folds `node` open or shut as a card and settles that fold ({@link CardFoldDecided}). The menu
	 * is not redrawn.
	 */
	function DecideCardFold(node: NodeEntry, open: boolean): void
	/**
	 * Whether the card holding a page's own controls, above its sections, is folded open; `true` until
	 * {@link OpenPageCard} folds it. It is kept apart from the node's `expanded`, which says whether
	 * the page is shown.
	 */
	function PageCardOpen(node: NodeEntry): boolean
	/** Folds a page's own controls open or shut. */
	function OpenPageCard(node: NodeEntry, value: boolean): void
	/**
	 * Opens or closes `node` and redraws the menu; nothing happens while it already is so. Opening a
	 * top-level tab, or a page of a tab that does not lay its pages out inline, closes the nodes beside
	 * it; general tabs neither close others nor are closed. It also settles the node's card fold, and
	 * takes its new mark off once nothing new is left under it.
	 */
	function OpenNode(node: NodeEntry, value: boolean): void
	/**
	 * The top-level tab the menu shows: the first visible one marked open. With none marked and more
	 * than one tab, the first visible tab is marked open and returned.
	 */
	function ActiveTab(): Nullable<NodeEntry>
	/**
	 * Opens the page `node` pins by its `pinnedName`, such as the hero being played. Does nothing
	 * while it pins none, or while that page is missing or hidden.
	 */
	function OpenPinned(node: NodeEntry): void
	/**
	 * What joins the names of a page's path, from its top-level tab down, in the keys the stored
	 * navigation remembers each page's chosen tab under. A top-level tab's key is its name alone.
	 */
	const PagePathSeparator = "\0"
	/**
	 * The node children a page shows as tabs, in the order it shows them: every page of a page with
	 * `tabbedChildren`, the general tabs of a top-level tab's General page, and none on any other.
	 */
	function PageTabs(page: NodeEntry): NodeEntry[]
	/**
	 * The tab a page with `tabbedChildren`, or a top-level tab's General page, is showing, or nothing
	 * when it has none. A page opens on its first tab and stays where it was left, so the answer is
	 * remembered rather than derived.
	 */
	function ActivePageTab(page: NodeEntry): Nullable<NodeEntry>
	/**
	 * Makes `child` the tab {@link ActivePageTab} answers for `page`, without redrawing the menu. The
	 * page is remembered by its path from the top-level tab, so pages that share a name under
	 * different parents keep a choice each.
	 */
	function SetActivePageTab(page: NodeEntry, child: NodeEntry): void
	/** The config key the menu's place is stored under, as a {@link StoredNavigation}. */
	const NavigationKey = "__nav"
	/** Where the menu stands, as a config stores it under {@link NavigationKey}. */
	interface StoredNavigation {
		/** Name of the open top-level tab; `""` for none. */
		tab: string
		/** Name of the open page of that tab; `""` while none is. */
		page: string
		/**
		 * The tab each page shows ({@link ActivePageTab}), as `[page path, tab name]` pairs; the path
		 * joins the names from the top-level tab down with {@link PagePathSeparator}.
		 */
		tabs: [string, string][]
	}
	/**
	 * The place the menu stands at, for the config: a scripts reload lands back on the same tab and
	 * page instead of the first one — a preview card gated on its page being active must not spring
	 * up because a reload forgot where the user was.
	 */
	function SerializeNavigation(): StoredNavigation
	/** Puts the selection back where {@link SerializeNavigation} recorded it. */
	function ApplyNavigation(stored: unknown): void
	/**
	 * The node whose page the menu shows: the active tab when it lays its pages out inline, and its
	 * open page otherwise. With no page open it is the tab itself when the tab has a General page or
	 * no pages, and else the tab's pinned page or its first, which is marked open. `undefined` while
	 * there is no active tab ({@link ActiveTab}).
	 */
	function ActiveContentNode(): Nullable<NodeEntry>
	/**
	 * Shows the General page of the active tab by closing its open pages, and redraws the menu. Does
	 * nothing for a tab that lays its pages out inline, or while no tab is active.
	 */
	function SelectGeneral(): void
	/**
	 * Calls `callback` for every entry under `node`, depth first: each child, then everything under
	 * it. `node` itself is not visited.
	 */
	function ForEachEntry(node: NodeEntry, callback: (entry: Entry) => void): void
}
