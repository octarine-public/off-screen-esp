// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Every color one theme scope paints the menu with, by token, beside the glass blur and the
	 * pill's inset shadow. `MenuSDK.Theme.ValueOf` reads the live value; `MenuSDK.BuildPalette`
	 * derives a whole palette from a theme's seeds.
	 */
	interface IThemePalette {
		/**
		 * Fill of what sits straight on the window: the search pill, the window's control buttons,
		 * the language menu, a node's sub-settings panel. Scrolling lists there fade into it;
		 * `PopoverBg` is it made opaque, and `AccentSurface` mixes the accent into it.
		 */
		WindowBg: string
		/** Opaque window background for floating surfaces; derived, not editable. */
		PopoverBg: string
		/**
		 * The window's frame and the lines dividing it: beside the rail and the sub-panel, under the
		 * top bar, between settings rows. Also the rim of popovers, floating windows and HUD cards.
		 */
		PanelBorder: string
		/**
		 * Fill of the cards settings sit on, and of config cards, toasts, widget cards and the color
		 * picker.
		 */
		CardBg: string
		/** Edge of the cards `CardBg` fills, and the lines dividing a config card. */
		CardBorder: string
		/** Fill of page tabs, pagination arrows and segmented switches. */
		PillBg: string
		/**
		 * Edge of page tabs, the search pill, the window's control buttons, pagination arrows and
		 * segmented switches; also the rim and inner lines of the catalogue, and the inner lines of
		 * the presets panel and the search modal.
		 */
		PillBorder: string
		/**
		 * Fill of the blocks set into the config and theme cloud pages: a config's share code, the
		 * people it is shared with, the theme edit and access sections, the gallery's loading
		 * placeholders.
		 */
		SurfaceBg: string
		/** Edge of a config's share code and of the theme edit and access sections. */
		SurfaceBorder: string
		/**
		 * Fill of text fields and dropdown triggers, and of what sits level with them: option cards,
		 * key chips, a slider's value bubble, secondary buttons.
		 */
		InputBg: string
		/** Edge of text fields, dropdown triggers, keybind rows and the color picker's fields. */
		InputBorder: string
		/** Edge of a text field, a dropdown trigger, an option card or a sequence slot on hover. */
		InputBorderHover: string
		/**
		 * Edge of secondary buttons and key caps, and of option cards and sequence tabs at rest. A
		 * config or theme card's edge moves to it on hover.
		 */
		ButtonBorder: string
		/**
		 * Text at full strength: the label of every settings row, the title of a dialog or a toast,
		 * and what a button, a menu row or an option turns to on hover.
		 */
		TextPrimary: string
		/**
		 * Context menu and driver flyout rows at rest, rows of the script profiler and the body text
		 * of a HUD card.
		 */
		TextBody: string
		/**
		 * The open page in the top bar's breadcrumb and the chevron before it; also a config's share
		 * code and the heading of the color picker's saved colors.
		 */
		TextBright: string
		/**
		 * The tab in the top bar's breadcrumb, before the open page; secondary text of the hint,
		 * keybind and hotkey panels and the tour; a row's hint icon on hover.
		 */
		TextDim: string
		/**
		 * The sub-panel's title and the small capitals over its groups of rows; a preset's name at
		 * rest, a search result's name and icon, and the section headings of the catalogue.
		 */
		TextSection: string
		/**
		 * Title of a sub-settings panel, a widget card and a config section; the detail line of a
		 * success or warning toast.
		 */
		TextCardTitle: string
		/**
		 * Rows of the rail, the top tabs and the sub-panel at rest, label and icon, and the chevron
		 * and icon of a section card's header.
		 */
		TextNavIdle: string
		/**
		 * A rail, top tab or sub-panel label on hover, a language menu entry on hover, and the
		 * hovered icon of a window control button or of a bare icon button, such as the history
		 * arrows.
		 */
		TextNavHover: string
		/**
		 * Secondary text: row and section descriptions, hints, counts, empty states, a text field's
		 * placeholder; also the idle icon of ghost and reset buttons.
		 */
		TextMuted: string
		/**
		 * Labels and icons of controls at rest: page tabs, segmented switches, option cards,
		 * pagination arrows, key caps in hints, the window's control buttons, the resize grip.
		 */
		TextControl: string
		/**
		 * What cannot be used right now: a disabled context menu item, a pagination arrow at its end,
		 * a back or forward arrow with nowhere to go. Also the faintest text of a HUD card.
		 */
		TextDisabled: string
		/**
		 * Text of tooltips and the copy flash, and the label of a secondary button and the icon of a
		 * close button at rest.
		 */
		TextTooltip: string
		/** Title over a card of settings on a page. */
		TextHeading: string
		/** The value a settings row shows beside its label: a slider's number, a key bind. */
		TextValue: string
		/** Track of a switch that is off, in the menu, the driver flyout and on HUD cards. */
		SwitchOff: string
		/**
		 * Fill of the circle riding a switch track or a slider rail. A light theme keeps it
		 * near-white, tinted off the border just enough not to melt into the card, rather than
		 * letting it follow the dark text.
		 */
		Knob: string
		/** Rail of a slider and the tick marks under it; also the empty track of a HUD card's bar. */
		SliderTrack: string
		/**
		 * The lines between the buttons of the sub-panel's filter bar. The resize seam of the rail
		 * and the sub-panel is mixed from it.
		 */
		FilterDivider: string
		/** Thumb of a scrollbar, and the bar under the top tabs when they scroll. */
		ScrollThumb: string
		/** A scrollbar thumb on hover or while it is dragged. */
		ScrollThumbHover: string
		/**
		 * Wash behind a row on hover: a settings row, a dropdown option, a search result, a section
		 * card's header, a page tab.
		 */
		RowHover: string
		/** Wash behind a rail row on hover. */
		NavRowHover: string
		/**
		 * Fill of the selected language in the language menu, and of an entry on hover there, in the
		 * presets picker and among the color picker's modes.
		 */
		MenuItemBg: string
		/** A dropdown option or a color picker mode at rest, and the icon of a description row. */
		MenuItemText: string
		/**
		 * Fill of the menu window and of the dialogs over it: modals, the hint and keybind panels, a
		 * tooltip's side panel. A HUD card is filled with it everywhere but the panels scope.
		 */
		GlassBg: string
		/**
		 * Fill of the popovers: context menus, dropdowns, tooltips, the presets picker, the search
		 * modal, the driver flyout. HUD overlay panels take it too.
		 */
		GlassBgMenu: string
		/**
		 * Fill of the panels placed on the screen: floating windows, the hotkeys panel, the script
		 * profiler, and HUD cards in the panels scope.
		 */
		GlassBgPanel: string
		/**
		 * Wash behind a ghost button on hover; also behind a sub-settings trigger, a text list item
		 * and a preset card.
		 */
		TriggerHover: string
		/**
		 * Edge of glass surfaces: modal dialogs, the hint and keybind panels, a node's sub-settings
		 * panel, the script profiler. Also the edge of key tiles and image tile marks.
		 */
		GlassBorder: string
		/**
		 * The 1dp light line inside the top edge of modal dialogs, the hint panel and the keybind
		 * dialog; also the fill of a sub-settings trigger while its panel is open.
		 */
		GlassHighlight: string
		/** An inset `box-shadow` value in the surface color. Nothing in the menu draws with it. */
		PillInset: string
		/**
		 * The `backdrop-filter` that frosts what stands behind glass, `blur(<n>dp)` or `none`:
		 * popovers, dialogs, floating windows, the script profiler. The window's own blur is built
		 * on it.
		 */
		GlassBlur: string
		/**
		 * Scrim behind a modal dialog, the keybind dialog and the catalogue; also the veil under a
		 * tile's remove mark.
		 */
		BackdropDim: string
		/** The lighter scrim the search modal lays over the window. */
		BackdropDimSoft: string
		/**
		 * On a slider held inside its scale, the hatching over the part it cannot reach and the tick
		 * where that part begins.
		 */
		LockedMark: string
		/**
		 * Dot beside a setting not seen before, and on the rail row, sub-panel row or page tab that
		 * leads to one; also the icon of a checkmark toggle that is on.
		 */
		MarkNew: string
		/** Dot beside a setting that differs from its default. */
		MarkChanged: string
		/**
		 * Destructive actions and errors: a confirm dialog's cancel button, a delete or reset row, a
		 * key bound twice, an error toast; also the icon of a checkmark toggle that is off.
		 */
		Danger: string
		/**
		 * The lighter red of text and small marks: a danger button's label at rest, unless it would
		 * not read there, an error toast's detail line, a liked config, a remove cross on hover.
		 */
		DangerSoft: string
		/**
		 * Wash behind a destructive row or button on hover, and the edge of a danger button at rest.
		 * A safe-mode card that is off is tinted toward it.
		 */
		DangerBg: string
		/**
		 * Edge of an invalid text field and of a safe-mode card that is off. A danger button takes it
		 * as fill and edge on hover.
		 */
		DangerBorder: string
		/**
		 * A success toast or tag, a slider note in the good tone, and a script under 0.5 ms a second
		 * in the profiler.
		 */
		StatusGood: string
		/**
		 * A warning toast or tag, a slider note in the warn tone, a key conflict in the keybind
		 * dialog, a config meter at 80% or more, a script of 0.5 to 25 ms a second in the profiler.
		 */
		StatusWarn: string
		/**
		 * A slider note in the bad tone, a full config meter, and a script of 25 ms a second or more
		 * in the profiler.
		 */
		StatusBad: string
	}
	/**
	 * A palette token a theme can override with a color of its own: every key of
	 * {@link IThemePalette} but `GlassBlur` and `PillInset`, which are no colors, and the derived
	 * `PopoverBg`.
	 */
	type PaletteColorToken = Exclude<keyof IThemePalette, "GlassBlur" | "PillInset" | "PopoverBg">
	/** One group of color rows on the Colors page of the theme settings. */
	interface IPaletteGroup {
		/** Title of the group on the page. */
		Name: string
		/** Path of the group's icon. */
		Icon: string
		/** The tokens the group lists, top to bottom. */
		Tokens: PaletteColorToken[]
	}
	/** The palette of the default theme, which every scope wears until a theme is put on. */
	const DefaultPalette: IThemePalette
	/** The label of each token's row on the Colors page. */
	const PaletteTokenNames: Record<PaletteColorToken, string>
	/**
	 * The icon of each token's row on the Colors page: a picture of what the token paints, so
	 * `CardBg` shows a card and `SliderTrack` a slider.
	 *
	 * @example
	 * const picker = node.AddColorPicker(MenuSDK.PaletteTokenNames[token], color)
	 * picker.IconPath = MenuSDK.PaletteTokenIcons[token]
	 */
	const PaletteTokenIcons: Record<PaletteColorToken, MenuIconPath>
	/** The groups of the Colors page, in the order it shows them. */
	const PaletteGroups: IPaletteGroup[]
}
