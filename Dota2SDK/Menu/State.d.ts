// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Where the window's tabs stand: `"side"` in a rail down its left edge, `"top"` in a strip
	 * across its top.
	 */
	type LayoutMode = "side" | "top"
	/** A window size saved under a name, offered in the context menu of the window's corner grip. */
	interface WindowSizePreset {
		/**
		 * Name the preset is listed under: trimmed, at most {@link MaxWindowSizePresetName}
		 * characters, and unique among the presets ignoring case.
		 */
		name: string
		/** Width of the window, in dp. */
		w: number
		/** Height of the window, in dp. */
		h: number
	}
	/**
	 * Where the menu window stands, its size and layout, and what the machine keeps beside them. Read
	 * it with {@link WindowSnapshot}, change it with {@link UpdateWindow} or {@link ClampWindow}.
	 */
	interface WindowState {
		/** Left edge of the window, in screen px. */
		x: number
		/**
		 * Top edge of the window, in screen px. It starts at `-1`, unplaced, and the window is centered
		 * the first time it is clamped; a config loaded with a negative `y` centers it again.
		 */
		y: number
		/** Width of the window in dp, which {@link ClampWindow} keeps at {@link MinWidth} or more. */
		w: number
		/**
		 * Height of the window in dp, which {@link ClampWindow} keeps between {@link MinHeight} and
		 * the height of the screen.
		 */
		h: number
		/**
		 * Width of the rail in the side layout, in dp, as the user left it; a config loads it between
		 * {@link RailMin} and {@link RailMax}. The drawn width comes from {@link WindowColumnWidths}.
		 */
		rail: number
		/**
		 * Width of the sub panel, the column listing the open tab's pages, in dp, as the user left it;
		 * a config loads it between {@link SubMin} and {@link SubMax}.
		 */
		sub: number
		/** Whether the rail is collapsed to icons. `rail` is kept for when it expands again. */
		collapsed: boolean
		/** Where the tabs stand: in a rail, or in a strip across the top. */
		layout: LayoutMode
		/**
		 * Whether resetting a tab to defaults from its context menu asks first. The confirmation's
		 * "don't ask again" turns it off.
		 */
		confirmTabReset: boolean
		/** The saved window sizes, at most {@link MaxWindowSizePresets}, in the order listed. */
		sizePresets: WindowSizePreset[]
		/** Whether the window is shown. The config does not keep it. */
		opened: boolean
	}
	/** The narrowest the window gets, in dp. */
	const MinWidth = 560
	/** The shortest the window gets, in dp. */
	const MinHeight = 600
	/**
	 * Width of the window in dp before a config sets one, and what the corner grip's "Reset to
	 * default" returns it to.
	 */
	const DefaultWidth = 1104
	/**
	 * Height of the window in dp before a config sets one, and what the corner grip's "Reset to
	 * default" returns it to.
	 */
	const DefaultHeight = 704
	/** The corner the window is carved with, which its clip, its glow and its edges follow. */
	const FrameRadius = 10
	/**
	 * The outline the window is drawn with, in dp. Everything the window holds is laid out and
	 * clipped inside it, so its columns share `w - 2 * FrameBorder` and nothing scrolled to the edge
	 * reaches the frame's outline or its antialiased rim.
	 */
	const FrameBorder = 1
	/** Width of the rail while it shows icons only, in dp, and the narrowest it is loaded at. */
	const RailMin = 48
	/**
	 * Width of the rail in dp before a config sets one, and what expanding a rail stored narrower
	 * than {@link RailNarrow} brings it to.
	 */
	const RailDefault = 176
	/** The widest the rail can be dragged or loaded at, in dp. */
	const RailMax = 280
	/**
	 * The narrowest the rail is drawn with labels, in dp: below it the rail shows icons only. A drag
	 * stops here, or collapses the rail once it passes halfway down to {@link RailMin}.
	 */
	const RailNarrow = 120
	/**
	 * The narrowest the sub panel gets, in dp, whether dragged, loaded or squeezed by a narrow
	 * window.
	 */
	const SubMin = 120
	/** The widest the sub panel can be dragged or loaded at, in dp. */
	const SubMax = 300
	/**
	 * The narrowest the content column gets, in dp. A narrow window takes the width from the sub
	 * panel first and the rail second; dragging either wider widens the window.
	 */
	const MainMin = 360
	/** Height of the strip of tabs across the top of the window in the `"top"` layout, in dp. */
	const TopNavH = 52
	/** Height of the bar above a page, with the history arrows and the page's path, in dp. */
	const TopBarH = 52
	/** Height of the rail's head, the logo and the search above its tabs, in dp. */
	const RailHeaderH = 100
	/** Height of the rail's row holding the collapse button, in dp. */
	const CollapseRowH = 40
	/**
	 * Height of the row of window buttons at the foot of the rail, the layout switch and the
	 * language, in dp.
	 */
	const ControlsRowH = 64
	/**
	 * Height of the rail's window buttons stacked into a column, in dp, as a rail of icons or one no
	 * wider than 160 dp draws them.
	 */
	const ControlsRowVerticalH = 110
	/** How many size presets are kept; saving one more drops the first in the list. */
	const MaxWindowSizePresets = 12
	/** The longest a size preset's name can be, in characters; a longer one is cut. */
	const MaxWindowSizePresetName = 40
	/**
	 * The window's state: the live object, not a copy. Change it through {@link UpdateWindow}, which
	 * tells the listeners.
	 */
	function WindowSnapshot(): WindowState
	/** The window's own element, which a drag writes its place straight onto. */
	function SetWindowFrame(element: Nullable<HTMLElement>): void
	/**
	 * Moves the window to `x, y` in screen px, keeping its top edge and a fifth of it on screen, and
	 * closes tooltips and popups. Only {@link SubscribeWindowDrag} listeners hear of the move: call
	 * {@link NotifyWindow} once the drag is over.
	 *
	 * @example
	 * MenuSDK.BeginDrag(
	 * 	(x, y) => MenuSDK.DragWindow(MenuSDK.DpToPx(x) - grabX, MenuSDK.DpToPx(y) - grabY),
	 * 	MenuSDK.NotifyWindow
	 * )
	 */
	function DragWindow(x: number, y: number): void
	/**
	 * Places an absolutely positioned overlay element centered over the menu
	 * window, falling back to the screen center while the window is closed,
	 * clamped to the screen. Returns false while the element has no layout
	 * size yet and was left untouched.
	 */
	function CenterOverWindow(element: HTMLElement): boolean
	/**
	 * A counter raised by every change {@link UpdateWindow} makes and every {@link NotifyWindow}: the
	 * snapshot `useSyncExternalStore` pairs with {@link SubscribeWindow}.
	 */
	function WindowVersion(): number
	/**
	 * How many times the window has been moved by a hand on it. A drag writes the window's place
	 * straight onto its frame and leaves {@link WindowVersion} alone, so the window's own tree is not
	 * built again for a move it has already made - and whatever is placed against the window instead
	 * of inside it would stand still while the window walks out from under it. This is what tells
	 * those, and it costs a render of them alone.
	 */
	function WindowDragVersion(): number
	/**
	 * Calls `onChange` every time {@link DragWindow} moves the window, and returns the function that
	 * removes it. Resizes, presets and the end of a drag reach {@link SubscribeWindow} instead, so
	 * whatever is placed against the window listens to both.
	 *
	 * @example
	 * React.useSyncExternalStore(MenuSDK.SubscribeWindow, MenuSDK.WindowVersion)
	 * React.useSyncExternalStore(MenuSDK.SubscribeWindowDrag, MenuSDK.WindowDragVersion)
	 */
	function SubscribeWindowDrag(onChange: () => void): () => void
	/**
	 * Calls `onChange` on every change {@link UpdateWindow} makes and every {@link NotifyWindow}, and
	 * returns the function that removes it. A move by {@link DragWindow} is not one of them.
	 */
	function SubscribeWindow(onChange: () => void): () => void
	/**
	 * Sets every field of `patch` that is defined, and when one of them changed, raises
	 * {@link WindowVersion} and calls the {@link SubscribeWindow} listeners. Nothing is fitted to the
	 * screen or saved: that is {@link ClampWindow} and {@link SaveWindowState}.
	 */
	function UpdateWindow(patch: Partial<WindowState>): void
	/**
	 * Asks for the window's state to be stored on the machine with the rest of the menu's own state.
	 * {@link UpdateWindow} does not ask for it on its own.
	 */
	function SaveWindowState(): void
	/**
	 * Saves the window's current size under `name`, trimmed and cut to
	 * {@link MaxWindowSizePresetName} characters, and asks for the window's state to be stored. A preset of
	 * the same name, ignoring case, is replaced; past {@link MaxWindowSizePresets} the first in the
	 * list is dropped. A blank name saves nothing.
	 */
	function SaveWindowSizePreset(name: string): void
	/**
	 * Removes the size preset named exactly `name`, case included, and asks for the window's state to
	 * be stored. Nothing happens when there is none.
	 */
	function RemoveWindowSizePreset(name: string): void
	/**
	 * Raises {@link WindowVersion} and calls the {@link SubscribeWindow} listeners without changing
	 * anything: what ends a move made with {@link DragWindow}.
	 */
	function NotifyWindow(): void
	/**
	 * Applies `patch` like {@link UpdateWindow}, fitted to the screen: the width at least
	 * {@link MinWidth}, the height between {@link MinHeight} and the screen's, the top edge and a
	 * fifth of the window on screen. A window not placed yet is centered. On a screen smaller than
	 * the minimum size the patch is applied as it is. A move or resize closes tooltips and popups.
	 */
	function ClampWindow(patch?: Partial<WindowState>): void
	/**
	 * Repositions the window across a menu scale change so the layout point under
	 * the cursor keeps its screen position — the control that triggered the change
	 * stays under the cursor instead of sliding away with the resize. Skipped when
	 * the cursor is outside the window.
	 */
	function AnchorWindowToScale(previous: number, next: number): void
	/**
	 * Whether the rail shows icons only: in the side layout, while it is collapsed or stored narrower
	 * than {@link RailNarrow}.
	 */
	function RailIsIconOnly(): boolean
	/** The widths the window's three columns are drawn at, in dp, from {@link WindowColumnWidths}. */
	interface WindowColumns {
		/** Width of the rail; 0 in the top layout. */
		rail: number
		/** Width of the sub panel; 0 while it is not shown. */
		sub: number
		/** Width of the content column: the inside of the frame less the other two. */
		main: number
	}
	/**
	 * Resolves the rendered width of the three window columns. The rail and the sub
	 * panel keep their stored width as a preference; whatever does not fit next to
	 * a {@link MainMin} wide content column is taken back from the sub panel first
	 * and from the rail second, so a narrow window never squeezes the controls out
	 * of the frame and a widened one restores both panels on its own.
	 *
	 * @example
	 * const widths = WindowColumnWidths(WindowSnapshot(), showSub)
	 * const mainLeft = widths.rail + widths.sub
	 */
	function WindowColumnWidths(snapshot: WindowState, showSub: boolean): WindowColumns
	/** A copy of the window's state as the machine stores it: everything but `opened`. */
	function WindowConfigValue(): Omit<WindowState, "opened">
	/**
	 * Applies a stored window state of the shape {@link WindowConfigValue} returns, then fits the window
	 * with {@link ClampWindow}. A number missing or not finite keeps its current value, sizes are held
	 * to their bounds, and the other fields fall back to their defaults. An `[x, y]` array only moves
	 * the window, unclamped; anything else that is no object is ignored.
	 */
	function ApplyWindowConfig(value: unknown): void
}
