// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Icon at the right edge of a context-menu row. With `run` it is a button:
	 * clicking it runs the action and keeps the menu open — the rows rebuild in
	 * place. Without `run` it is a passive indicator, like the chevron of a row
	 * that opens a side panel.
	 */
	interface ContextMenuTrailing {
		/** Path of the icon. */
		readonly icon: string
		/**
		 * Makes the icon a button: a left click on it runs this and keeps the menu open, its rows
		 * rebuilt.
		 */
		readonly run?: () => void
		/**
		 * Tint of the button's icon while the cursor is off it, as a hex colour. Only a trailing with
		 * `run` uses it.
		 */
		readonly color?: string
		/**
		 * Tint of the button's icon and hover fill while the cursor is on it; `color` when omitted.
		 * Only a trailing with `run` uses it.
		 */
		readonly hoverColor?: string
	}
	/**
	 * One row of the context menu: an icon and a label. A click runs `run`, or opens a side panel
	 * through `flyout`.
	 */
	interface ContextMenuItem {
		/** Path of the icon at the row's left. */
		readonly icon: string
		/** The row's text, shown as given: it is not localized. */
		readonly label: string
		/** Greys the row out: its hover fill stays off and a click on it does nothing. */
		readonly disabled: boolean
		/**
		 * Runs on a click, after the menu closes. A row with `checked` keeps the menu open to show the
		 * change, and a row with `flyout` opens that instead.
		 */
		readonly run?: () => void
		/** An icon at the row's right edge, a button of its own when it has a `run`. */
		readonly trailing?: ContextMenuTrailing
		/** Displays a switch with this state. Running the row keeps the menu open to show the change. */
		readonly checked?: boolean
		/** Text in a key-cap frame at the right edge of the row: the key a bind row stands for. */
		readonly value?: string
		/**
		 * Opens a side panel on a click, keeping the menu open. `anchor` is the row's rect in screen
		 * pixels, as wide as the menu, to place the panel against.
		 */
		readonly flyout?: (anchor: ScreenRect) => void
		/** Opens the `flyout` as soon as the cursor enters the row, unless `open` is set. */
		readonly hover?: boolean
		/** Whether the row's side panel is showing: the row keeps its hover fill while it is. */
		readonly open?: boolean
		/**
		 * Paints the label, the icon and the hover fill in the theme's danger colour, for a row that
		 * throws work away. A disabled row stays grey.
		 */
		readonly danger?: boolean
		/**
		 * The row's own tint for its label, icon and hover fill, as a hex colour. `danger` overrides
		 * it, and a disabled row stays grey.
		 */
		readonly color?: string
		/**
		 * Identity the row keeps while the menu rebuilds, so a list that grows a row does not slide
		 * the ones below it out and back in. Rows without one are told apart by their position.
		 */
		readonly id?: string
	}
	/**
	 * Rows of a script's own under the ones this entry's menu builds for itself, asked for every
	 * time the menu opens. `undefined` takes them off again.
	 */
	function SetContextItems(entry: EntryCommon, build: Nullable<() => readonly ContextMenuItem[]>): void
	/** The rows a script has put on this entry, or none. */
	function ContextItemsOf(entry: EntryCommon): Nullable<() => readonly ContextMenuItem[]>
	/**
	 * Hands the menu the closer of a side panel a scripted row's flyout opened, so
	 * the panel leaves with the menu: closing the menu, opening another one, or
	 * hovering a row other than the panel's own runs the closer once and forgets it.
	 */
	function AttachContextFlyout(close: () => void): void
	/**
	 * Registers the rows the configs add to the context menu of a setting and of a page: taking it
	 * from another config, saving its page as a config of its own.
	 */
	function SetConfigEntryItems(build: (entry: Entry) => readonly ContextMenuItem[]): void
	/** The rows {@link SetConfigEntryItems} adds for `entry`; none while nothing is registered. */
	function ConfigEntryItems(entry: Entry): readonly ContextMenuItem[]
	/**
	 * The hotkey and logic rows of the switch a node wears in its header, for a menu that builds its
	 * rows itself instead of going through {@link OpenContextMenu} — the menu of a navigation tab. A
	 * node without such a switch gets none.
	 */
	function HeaderDriverItems(node: NodeEntry): readonly ContextMenuItem[]
	/**
	 * The copy and paste rows a colour row's own menu carries, for a surface keeping one solid colour
	 * of its own: the copy lands in the clipboard every colour row of the menu shares, and a paste
	 * takes the first colour of whatever was copied there. Opened through {@link OpenContextMenuAt}.
	 *
	 * @example
	 * onMouseDown={event => {
	 * 	if (event.data.button === 1) {
	 * 		OpenContextMenuAt(
	 * 			() => ColorClipboardItems(() => tint, next => setTint(next)),
	 * 			Number(event.data.screenX ?? 0),
	 * 			Number(event.data.screenY ?? 0)
	 * 		)
	 * 	}
	 * }}
	 */
	function ColorClipboardItems(color: () => Color, paste: (color: Color) => void): ContextMenuItem[]
	/**
	 * Opens the context menu at a screen position with rows of your own, so a
	 * surface that is not an {@link Entry} gets the same panel and hit behaviour.
	 * An empty list opens nothing. Pass a function instead of a list for rows that
	 * change while the menu is up — it is asked again on every rebuild, and the
	 * rows that carry a {@link ContextMenuItem.id} keep their place.
	 *
	 * @example
	 * OpenContextMenuAt(
	 *     [{ icon: "menu/ui/rotate-ccw.svg", label: "Reset", disabled: false, run: reset }],
	 *     Number(event.data.screenX ?? 0),
	 *     Number(event.data.screenY ?? 0)
	 * )
	 */
	function OpenContextMenuAt(items: readonly ContextMenuItem[] | (() => readonly ContextMenuItem[]), x: number, y: number): void
	/**
	 * Opens the menu a right click on the row of the stored entry `entry` opens, at `x`, `y` in
	 * screen pixels, the rows of {@link SetContextItems} included. Opens nothing for a locked entry
	 * or one with no rows.
	 */
	function OpenContextMenu(entry: Entry, x: number, y: number): void
	/**
	 * Closes the context menu, the hotkey and logic panels, and the side panel whose closer
	 * {@link AttachContextFlyout} was handed.
	 */
	function CloseContextMenu(): void
}
