// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The hover and toggle rules the menu ships as a style sheet. They carry the **menu** theme and
	 * nothing else: the sheet is one string shared by every layer document, so a class put on a panel
	 * or a world overlay paints in the menu's colours whatever theme that surface wears. Anything a
	 * non-menu surface needs to retint belongs in an inline fill instead.
	 */
	const Classes: {
		/**
		 * A row that shows the {@link Classes.Pill} inside it while hovered, such as the menu's control
		 * rows, card headers and navigation tabs.
		 */
		readonly Row: "oct-row"
		/**
		 * The hover backdrop inside a {@link Classes.Row}: transparent until the row is hovered, and
		 * opaque while the pill itself is {@link Classes.On}. Its fill is the element's own style.
		 */
		readonly Pill: "oct-pill"
		/**
		 * A label in a {@link Classes.Row}: `TextNavIdle`, `TextNavHover` while the row is hovered, the
		 * accent while the row is {@link Classes.On}. It changes at once, without a transition.
		 */
		readonly NavLabel: "oct-nav-label"
		/** A switch track: slides its {@link Classes.Knob} to the right while {@link Classes.On}. */
		readonly Switch: "oct-switch"
		/** The knob of a {@link Classes.Switch}: 2dp from the track's left, 12dp while that is on. */
		readonly Knob: "oct-knob"
		/** A filter chip: opacity 0.3, 0.6 while hovered, 1 while {@link Classes.On}. */
		readonly Chip: "oct-chip"
		/** A row that does not light up: the {@link Classes.Pill} inside it stays transparent. */
		readonly ButtonRow: "oct-button-row"
		/**
		 * A primary button: text and {@link Classes.ButtonIcon} in the first of `TextPrimary` and
		 * `PopoverBg` that reads on the accent, opacity 0.9 while hovered. {@link ButtonFill} paints
		 * its fill.
		 */
		readonly ButtonPrimary: "oct-button-primary"
		/**
		 * A secondary button: text and {@link Classes.ButtonIcon} `TextTooltip`, `TextPrimary` while
		 * hovered. {@link ButtonFill} paints its fill.
		 */
		readonly ButtonSecondary: "oct-button-secondary"
		/**
		 * A ghost button: text and {@link Classes.ButtonIcon} `TextMuted`, `TextPrimary` while hovered.
		 * {@link ButtonFill} paints its fill.
		 */
		readonly ButtonGhost: "oct-button-ghost"
		/**
		 * A danger button: text and {@link Classes.ButtonIcon} in the first of `DangerSoft` and
		 * `Danger` that reads on `InputBg`, and while hovered in a colour that reads on
		 * `DangerBorder`. {@link ButtonFill} paints its fill.
		 */
		readonly ButtonDanger: "oct-button-danger"
		/** The icon of a primary, secondary, ghost or danger button, tinted like its text. */
		readonly ButtonIcon: "oct-button-icon"
		/**
		 * A window control button: its {@link Classes.ControlIcon} goes from `TextControl` to
		 * `TextNavHover` while hovered.
		 */
		readonly Control: "oct-control"
		/**
		 * A button whose {@link Classes.DimIcon} goes from `TextMuted` to `TextNavHover` while hovered,
		 * such as the window header's back, forward and preview buttons or the rail's collapse button.
		 */
		readonly Ghost: "oct-ghost"
		/** A dialog's confirm button: opacity 0.9 while hovered. Its fill is the element's own. */
		readonly Primary: "oct-primary"
		/**
		 * A panel's close button: its {@link Classes.CloseIcon} goes from `TextTooltip` to
		 * `TextPrimary` while hovered.
		 */
		readonly Close: "oct-close"
		/** The cross of a {@link Classes.Close}: `TextTooltip`, `TextPrimary` while it is hovered. */
		readonly CloseIcon: "oct-close-icon"
		/**
		 * A context menu row: text and {@link Classes.MenuIcon} `TextBody`, `TextPrimary` while
		 * hovered.
		 */
		readonly MenuRow: "oct-menu-row"
		/** The icon of a {@link Classes.MenuRow}: `TextBody`, `TextPrimary` while it is hovered. */
		readonly MenuIcon: "oct-menu-icon"
		/**
		 * A dropdown option, or a mode chip of the colour panel: text `MenuItemText`, `TextPrimary`
		 * while hovered or {@link Classes.On}.
		 */
		readonly Option: "oct-option"
		/**
		 * A destructive button or menu row: its {@link Classes.DangerIcon} goes from `TextMuted` to
		 * `Danger` while hovered. Its fill is the element's own style, as `useHoverFill` shows.
		 */
		readonly Danger: "oct-danger"
		/** The icon of a {@link Classes.Danger}: `TextMuted`, `Danger` while it is hovered. */
		readonly DangerIcon: "oct-danger-icon"
		/** A reset button: text and {@link Classes.LiftIcon} `TextMuted`, `TextPrimary` on hover. */
		readonly Reset: "oct-reset"
		/**
		 * A button that opens a popover, such as a row's settings: its {@link Classes.LiftIcon} is
		 * `TextMuted`, `TextPrimary` while hovered and the accent while {@link Classes.On}.
		 */
		readonly Trigger: "oct-trigger"
		/**
		 * A selectable item of the language list or the image catalogue: text `TextControl`,
		 * `TextNavHover` while hovered, `TextPrimary` while {@link Classes.On}.
		 */
		readonly Item: "oct-item"
		/** The picture of an {@link Classes.Item}: opacity 0.55, 1 while the item is on. */
		readonly ItemArt: "oct-item-art"
		/**
		 * The colour panel's format button: border `InputBorder`, `InputBorderHover` while hovered, the
		 * accent at 30% alpha while {@link Classes.On}.
		 */
		readonly PickerChip: "oct-picker-chip"
		/**
		 * A text box of the colour panel: border `InputBorder`, the accent at 40% alpha while
		 * {@link Classes.On}.
		 */
		readonly PickerInput: "oct-picker-input"
		/**
		 * The colour panel's add button: text and {@link Classes.PickerAddIcon} `TextMuted`,
		 * `TextPrimary` while hovered.
		 */
		readonly PickerAdd: "oct-picker-add"
		/** The icon of a {@link Classes.PickerAdd}: `TextMuted`, `TextPrimary` while it is hovered. */
		readonly PickerAddIcon: "oct-picker-add-icon"
		/** A keybind chip: text `TextValue`, the accent while {@link Classes.On}. */
		readonly Keybind: "oct-keybind"
		/**
		 * The window's search button: border `PillBorder`, the accent at 30% alpha while hovered. It
		 * tints the {@link Classes.SearchLabel} and {@link Classes.ControlIcon} inside it.
		 */
		readonly Search: "oct-search"
		/** The label of a {@link Classes.Search}: `TextMuted`, `TextControl` while it is hovered. */
		readonly SearchLabel: "oct-search-label"
		/**
		 * The icon of a {@link Classes.Control} or a {@link Classes.Search}: `TextControl`,
		 * `TextNavHover` while that button is hovered.
		 */
		readonly ControlIcon: "oct-control-icon"
		/** The icon of a {@link Classes.Ghost}: `TextMuted`, `TextNavHover` while it is hovered. */
		readonly DimIcon: "oct-dim-icon"
		/**
		 * The icon of a {@link Classes.Trigger} or a {@link Classes.Reset}, coloured by that button's
		 * hover and on state.
		 */
		readonly LiftIcon: "oct-lift-icon"
		/**
		 * A hold or toggle icon of a hotkey's mode switch: `TextMuted` at opacity 0.55, the accent at
		 * full opacity while {@link Classes.On}.
		 */
		readonly ModeIcon: "oct-mode-icon"
		/**
		 * Two stacked labels that trade places: while {@link Classes.On}, the {@link Classes.SwapOff}
		 * slides 14dp up and fades out as the {@link Classes.SwapOn} slides up into its place. The
		 * menu's own swaps lay both labels absolutely in a box that clips them.
		 */
		readonly Swap: "oct-swap"
		/**
		 * The label a {@link Classes.Swap} shows while off: at `top` 0, moved to -14dp and faded out
		 * while the swap is on.
		 */
		readonly SwapOff: "oct-swap-off"
		/**
		 * The label a {@link Classes.Swap} shows while on: at `top` 14dp and transparent until then,
		 * at 0 and opaque after.
		 */
		readonly SwapOn: "oct-swap-on"
		/**
		 * Marks an element as on, open or selected, for each class here with a look for that state.
		 * {@link ClassOn} adds it.
		 */
		readonly On: "oct-on"
	}
	/**
	 * The analytic fill a button paints at hover strength `mix`. The chip in a menu row and the
	 * button on a page differ in nothing but their corner radius, and both take every colour from the
	 * palette - a theme with a light background gets a light button rather than a black slab, and
	 * {@link CTheme.ReadableOn} keeps the label on top of it readable. A button in an inert block
	 * paints the muted accent instead of the live one, so it goes grey with the rest of the block.
	 *
	 * @example
	 * const surface = useHoverFill(button, hovered, mix => ButtonFill("danger", 8, mix))
	 */
	function ButtonFill(variant: ButtonVariant, radius: number, mix: number, inert?: boolean): RmlStyle
	/** `base` with {@link Classes.On} added when `on` is true, `base` alone otherwise. */
	function ClassOn(base: string, on: boolean): string
	/**
	 * Writes the rules of {@link Classes} into every layer document, in the menu's theme. Does nothing
	 * while the layers, the menu palette and the animation settings are as they were at the last
	 * write, or when the host has no `document.setStyleSheet`. The menu calls it every frame once it
	 * is mounted.
	 */
	function SyncStyleSheet(): void
}
