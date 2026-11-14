// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the context menu of navigation tab `node` at the cursor: the hotkey and logic rows of the
	 * switch in its top bar, a reset to defaults when it saves config, and its own
	 * {@link Node.ContextItems}. Opens nothing when there is no row to show.
	 */
	function OpenTabContextMenu(event: Event, node: NodeEntry): void
	/**
	 * Drags the window from the element the press landed on. `onTap` is for a surface that answers a
	 * click of its own: the press only turns out to be one once the button comes back up without the
	 * window having travelled, which is why it is answered here rather than by a click handler - the
	 * shield that carries the drag takes the release, so the surface never sees one.
	 */
	function BeginWindowDrag(event: Event, state: WindowState, onTap?: () => void): void
	/**
	 * Lets a left press on the bare area of `element`, its padding and the gaps between its
	 * children, drag the menu window it sits in; a press on a child stays with the child. Pass it
	 * as `ref`.
	 *
	 * @example
	 * <div ref={MenuSDK.MarkWindowBackdrop} style={{ display: "flex", padding: 8 }}>
	 * 	{cards}
	 * </div>
	 */
	function MarkWindowBackdrop(element: HTMLElement | null | undefined): void
	/** Starts a window drag when the press landed on a backdrop's own area. */
	function DragFromBackdrop(event: Event): void
	/**
	 * The level the top navigation folds to so its tabs fit a window `state.w` wide, from the level
	 * `current` it is at: 0 folds nothing, 1 collapses the search pill, 2 also hides the wordmark.
	 * It moves one level per call, and unfolds only when what it brings back fits with 24dp to spare.
	 */
	function TopCompressOf(state: {
		w: number
	}, tabs: NodeEntry[], current: number): number
	/**
	 * The navigation bar of the window in its top layout: logo, search pill, a scrolling strip of
	 * the tabs in `nodes` and the window's control buttons, folded to `compress` as
	 * {@link TopCompressOf} gives it. A press on it that no part takes drags the window.
	 */
	function TopNav(props: {
		nodes: NodeEntry[]
		activeTab: Nullable<NodeEntry>
		state: WindowState
		compress: number
	}): React.ReactElement
	/**
	 * Sets what the layout button among the window's controls runs to swap the side and top
	 * layouts. `undefined` falls back to flipping `layout` in the window state and saving it.
	 */
	function SetLayoutSwitcher(switcher: Nullable<() => void>): void
	/**
	 * The side column of the window in its side layout: logo, search pill, a row per tab in
	 * `nodes`, the collapse button and the window's control buttons, with a seam on its edge that
	 * resizes it. `onToggle` is handed the collapse or expand step to run.
	 */
	function Rail(props: {
		nodes: NodeEntry[]
		activeTab: Nullable<NodeEntry>
		state: WindowState
		widths: WindowColumns
		rootRef: React.RefCallback<HTMLElement>
		contentRef: React.RefCallback<HTMLElement>
		dividerRef: React.RefCallback<HTMLElement>
		onToggle: (update: () => void) => void
	}): React.ReactElement
	/**
	 * The column beside the rail listing the pages of `tab`, with `content` the open one: its title,
	 * then a pinned page, the General entry, a search field and a filter bar where the tab has them,
	 * and a seam that resizes it. A right click on the title opens the tab's context menu.
	 */
	function SubPanel(props: {
		tab: NodeEntry
		nodes: NodeEntry[]
		content: Nullable<NodeEntry>
		state: WindowState
		widths: WindowColumns
		rootRef: React.RefCallback<HTMLElement>
	}): React.ReactElement
	/**
	 * The bar over the open page: back and forward arrows, the breadcrumb of tab and page, then the
	 * page's header control (`header`, or the one `content` declares), hint icon and preview button
	 * where it has them. A press on it that no part takes drags the window.
	 */
	function TopBar(props: {
		tab: Nullable<NodeEntry>
		content: Nullable<NodeEntry>
		header?: ValueEntry
		state: WindowState
	}): React.ReactElement
	/**
	 * The window's resize handles: its left, right and bottom edges and a grip in the bottom-right
	 * corner. A right click on the grip offers the default and minimum sizes, the sizes the user
	 * saved, and saving the current one.
	 */
	function Resizers(props: {
		state: WindowState
	}): React.ReactElement
	/**
	 * Whether the menu window is kept from showing because no tab of the menu is visible. Always
	 * `false` in panic mode.
	 */
	function WindowSuppressed(): boolean
	/**
	 * Whether the cursor is inside the rectangle of the window `state` describes; `false` while the
	 * window is closed or {@link WindowSuppressed}.
	 */
	function CursorInWindow(state: WindowState): boolean
}
