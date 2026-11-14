// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The value of {@link EntryCommon.kind}: one per interface of the {@link Entry} union. */
	type EntryKind = "node" | "toggle" | "slider" | "range" | "dropdown" | "multiSelect" | "keybind" | "button" | "color" | "text" | "list" | "images" | "presets" | "description"
	/** One picture, GIF or video of a {@link MenuHint}. */
	interface MenuHintMedia {
		/**
		 * What {@link src} holds. A GIF wears a badge, and a GIF or a video gets play, restart and
		 * seek controls.
		 */
		kind: "image" | "gif" | "video"
		/** Path of the file; `""` draws a "Media not found" box in its place. */
		src: string
		/** Text under the enlarged view when there is no {@link caption}; translated. */
		alt?: string
		/** A line under the media, and under its enlarged view; translated. */
		caption?: string
		/** Width-to-height ratio of the media's box, which is 280 dp wide; 16:9 when unset. */
		ratio?: number
		/**
		 * How the media fills its box: `"cover"`, the default, fills it and crops the rest;
		 * `"contain"` shows all of it. The enlarged view always shows all of it.
		 */
		fit?: "cover" | "contain"
	}
	/**
	 * The panel an entry's hint glyph opens on hover and keeps open on a click. Every part is
	 * optional, and they stand in the order declared here; {@link mediaFirst} moves the media up.
	 */
	interface MenuHint {
		/** Trigger glyph: the default (i) states a fact, "help" asks "how does this work". */
		glyph?: "info" | "help"
		/** The heading at the top; translated. */
		title?: string
		/** A paragraph under the title; translated. */
		text?: string
		/** Lines under the text, each after a dot; translated. */
		bullets?: string[]
		/** Key names drawn as keycaps under the bullets, as given. */
		keys?: string[]
		/** A boxed line under the keys, in the colour {@link noteTone} picks; translated. */
		note?: string
		/**
		 * `"warn"` draws the {@link note} in the theme's warning colour; `"tip"`, the default, tints
		 * it with the accent.
		 */
		noteTone?: "tip" | "warn"
		/**
		 * Pictures, GIFs or videos under the note; several show one at a time, with dots to switch.
		 * A click on one opens it enlarged.
		 */
		media?: MenuHintMedia | MenuHintMedia[]
		/** Whether the {@link media} stands right under the title rather than under the note. */
		mediaFirst?: boolean
		/** A small muted line at the end; translated. */
		meta?: string
	}
	/**
	 * Which stored document an entry's value is written to: the per-game config of the scripts, the
	 * changer's config, or the theme the account wears. They are written, read and switched apart,
	 * so an entry belongs to one.
	 */
	type EntryDocument = "config" | "changer" | "theme"
	/**
	 * An icon button a script puts on a row's right, before the row's settings button and drawn as
	 * it is: a lock, a pin. The row is drawn again whenever its list is handed over anew.
	 */
	interface RowAction {
		/** The glyph, a `MenuIcons` path. */
		readonly icon: string
		/** What hovering it says; translated. */
		readonly tooltip: string
		/** Whether it shows as on: the glyph in the accent. */
		readonly active: boolean
		/** Runs on a click on the button, unless the row is locked. */
		readonly run: () => void
	}
	/**
	 * The fields every entry has, node or control. A field the handle has a member for is changed
	 * through it: a direct write runs no listener, schedules no save and redraws nothing.
	 */
	interface EntryCommon {
		/**
		 * What the entry is, a node or one of the controls. Checking it narrows an {@link Entry} to
		 * the interface of that kind.
		 */
		readonly kind: EntryKind
		/**
		 * The name the script created the entry with, untranslated: the menu shows its translation,
		 * and the config stores the entry under it.
		 */
		readonly name: string
		/** The node the entry was created in; `undefined` for the menu's root. */
		readonly parent: Nullable<NodeEntry>
		/**
		 * Text shown while the pointer rests on the row; translated. Changed through the handle's
		 * `tooltip`, which redraws the menu.
		 */
		tooltip: string
		/**
		 * A line under the row's name, translated; `undefined` for none. The menu search matches it.
		 * Changed through the handle's `Description`, which redraws the menu.
		 */
		description?: string
		/**
		 * The panel the row's hint glyph opens; `undefined` for none. Changed through the handle's
		 * `Hint`, which redraws the menu.
		 */
		hint?: MenuHint
		/**
		 * Path of the entry's icon; `""` for none. Changed through the handle's `IconPath`, which
		 * redraws the menu.
		 */
		iconPath: string
		/**
		 * Sort key among the entries of one node, lower first, in a node that sorts its children.
		 * Changed through the handle's `Priority`, which sorts the node again; a direct write does not.
		 */
		priority: number
		/**
		 * Whether the entry is shown in the menu; a hidden one is also out of the search, with
		 * everything under it. Changed through the handle's `IsVisible`, which redraws the menu.
		 */
		visible: boolean
		/**
		 * Runtime visibility in the hotkeys panel; false also excludes descendant binds - out of play
		 * now: the bind dialog does not list them as taking a key. Defaults to true.
		 */
		hotkeysVisible?: boolean
		/**
		 * Whether the entry is kept out of the menu search and out of the rows and pages the menu
		 * lists, with everything under it. No handle member sets it: write it, then call the
		 * handle's `Update` to redraw the menu.
		 */
		searchHidden: boolean
		/** Extra words the menu search matches besides the name, each also tried in its translations. */
		searchKeywords?: readonly string[]
		/**
		 * Whether the script has locked the entry. A locked row, and every row under a locked node,
		 * takes no click, and no key or logic rule acts on it. Changed through the handle's
		 * `IsDisabled`, which redraws the menu.
		 */
		disabled: boolean
		/**
		 * Whether the entry is new: it existed when the user's config was loaded at start, and this
		 * machine had not shown it before. Its row wears the "new" mark until the pointer has been
		 * over it; a node wears it while an entry under it does.
		 */
		firstTime: boolean
		/**
		 * Whether the entry is written to its {@link document} and read back from it. Off from the
		 * start on a button and a note.
		 */
		saveConfig: boolean
		/**
		 * Which stored document the entry is written to; taken from its node at creation and changed
		 * with it through {@link Node.Document}.
		 */
		document: EntryDocument
		/**
		 * The package that created the entry, as `SharedSDK.CurrentPackage` named it then, or its
		 * node's when none was current; `""` when unknown. A node two packages add keeps the first.
		 */
		readonly owner: string
		/**
		 * Colour the entry's icon is drawn in; `undefined` for the row's own tint. Changed through
		 * the handle's `IconColor`, which redraws the menu.
		 */
		iconColor: Nullable<Color>
		/**
		 * Corner radius of the entry's icon, in dp; `-1`, the default, leaves the icon as its row
		 * draws it. A node takes it through {@link Node.IconRound}, which redraws the menu.
		 */
		iconRound: number
		/**
		 * A theme token naming the colour of a mark the row always wears, in place of the "new" and
		 * changed marks; `undefined` for those. A toggle takes it through
		 * {@link Toggle.MarkColorToken}, which redraws the menu.
		 */
		markColorToken?: string
		/**
		 * The node of the settings popover off the entry's row, made by {@link Node.AddSubSettings}
		 * or {@link Node.AddTileSettings}; `undefined` for none.
		 */
		subSettings?: NodeEntry
		/** Icon buttons a script put on the row's right, before its settings button. */
		rowActions?: readonly RowAction[]
		/**
		 * The entry that draws this one in its own row or panel, so it has no row of its own: the
		 * row whose swatch or header switch it is, the row its settings popover hangs off, the node
		 * {@link Node.Host} gave it to. `undefined` for an entry on a row of its own.
		 */
		hostedBy?: Entry
		/**
		 * Entry this one is a stand-in for. When set, the row's context menu offers
		 * navigation to the target instead of to the row itself, so generated lists
		 * (the keybinds list) can jump to the setting they mirror.
		 */
		revealTarget?: Entry
		/**
		 * Values a row draws but keeps in entries of their own: resetting the row resets them too,
		 * and the row wears the changed mark while any of them is changed.
		 */
		companions?: Entry[]
	}
	/**
	 * Whether a switch that is off stands over the entry: the {@link NodeEntry.gate} or toggle
	 * {@link NodeEntry.headerControl} of a node above it, or the header switch of its own image
	 * selector. The switch itself is not inert. An inert row is drawn in a muted accent and stays
	 * as editable as any other.
	 */
	function IsEntryInert(entry: Entry): boolean
	/**
	 * A filter button under a node's list of pages: a click hides or shows the pages of its group.
	 * A node lists its buttons in {@link NodeEntry.filterGroups}.
	 */
	interface MenuFilterGroup {
		/** What a page puts in its {@link NodeEntry.filterGroup} to belong to the group. */
		id: number
		/** Path of the button's icon. */
		icon: string
		/**
		 * What hovering the button says; translated. With {@link NodeEntry.groupHeadings} on, it
		 * also heads the group's pages.
		 */
		tooltip?: string
		/** Colour of the icon; the theme's text colour when unset. */
		color?: Color
	}
	/** The banner over a page while its {@link NodeEntry.gate} is off. */
	interface DisabledNotice {
		/** The banner's heading; translated. */
		title: string
		/** The line under the heading; translated. */
		description: string
		/** The label of the banner's button, which turns the gate on; translated. */
		enableText: string
	}
	/** A ready sequence a {@link SequenceSource} offers an empty tab: its name, and its steps. */
	interface SequencePreset {
		/** The preset's name, shown before its steps; translated. */
		readonly label: string
		/** Its steps in order, as image values an image selector takes. */
		readonly values: readonly string[]
	}
	/**
	 * The tabs of image sequences, such as a spell combo or a build order per tab, that a
	 * {@link NodeEntry.sequences} row draws and edits, one tab in use. The row keeps none of it: it
	 * reads the source every time it draws and hands every edit back, so the script stores the
	 * steps and decides what goes where.
	 */
	interface SequenceSource {
		/** One short label per tab, such as a letter or a number; each tab holds one sequence. */
		readonly Tabs: readonly string[]
		/** The tab in use, which is the one the row shows. */
		readonly Active: number
		/** Puts tab `tab` in use: a click on it asks for that. */
		Select(tab: number): void
		/** Tab `tab`'s steps in order, as image values an image selector takes. */
		Steps(tab: number): readonly string[]
		/** What the plus offers to add to tab `tab`; nothing it could not take. */
		Picks(tab: number): readonly string[]
		/** Adds `value` to tab `tab`, where the script wants it - the end, as a rule. */
		Add(tab: number, value: string): void
		/** Moves step `from` of tab `tab` to where its step `to` stands, or leaves it if it may not. */
		Move(tab: number, from: number, to: number): void
		/** Takes step `step` of tab `tab` out. */
		Remove(tab: number, step: number): void
		/** Takes every step of tab `tab` out. */
		Clear(tab: number): void
		/** What tab `tab` is called where there is room: its tooltip. */
		Title(tab: number): string
		/** A line under the tabs saying what tab `tab` is; empty for none. */
		Caption(tab: number): string
		/** What step `step` of tab `tab` wears in its corner - its place, as a rule; empty for nothing. */
		Badge(tab: number, step: number): string
		/** Whether step `step` of tab `tab` wears a line under it: one set apart from the steps before it. */
		Marked(tab: number, step: number): boolean
		/** The sequences an empty tab `tab` offers in place of its steps; none for no offer. */
		Presets(tab: number): readonly SequencePreset[]
		/** Fills tab `tab` with preset `preset` of {@link Presets}. */
		LoadPreset(tab: number, preset: number): void
		/**
		 * The key bind drawn as a row under tab `tab`'s steps, whose key the tab's tooltip shows;
		 * `undefined` for none.
		 */
		Key(tab: number): Nullable<{
			readonly entry: KeybindEntry
		}>
	}
	/** The record behind a node: the `entry` of a {@link Node}. */
	interface NodeEntry extends EntryCommon {
		readonly kind: "node"
		/**
		 * The entries the node holds, in the order the menu lists them. The handle's `Add…` calls
		 * add to it, sorted while {@link sortNodes} is on; {@link Node.entries} hands them out as
		 * handles.
		 */
		readonly children: Entry[]
		/**
		 * Whether the node itself is open: a card unfolded, a page picked. {@link Node.IsOpen} reads
		 * it with the nodes above and sets it as a click does; {@link Node.SetOpenRaw} sets it alone.
		 */
		expanded: boolean
		/**
		 * Whether the node's card folds on a click on its header; `undefined` counts as on. Changed
		 * through {@link Node.Collapsible}, which also opens the card when it turns this off.
		 */
		collapsible?: boolean
		/**
		 * Whether the node keeps its children sorted: by {@link EntryCommon.priority}, then by kind,
		 * then by name, with an entry named "State" first. Changed through {@link Node.SortNodes},
		 * which sorts them by priority when it turns this on.
		 */
		sortNodes: boolean
		/**
		 * Whether the node's icon takes the menu's tint; off, it keeps its own colours. On by default.
		 * Changed through {@link Node.IconTint}, which redraws the menu.
		 */
		iconTint: boolean
		/** Width-to-height ratio of the icon in navigation rows; omitted keeps the square default. */
		iconAspectRatio?: number
		/**
		 * The id of the parent's {@link filterGroups} entry the node belongs to; `undefined` for
		 * none, and no filter hides it then. Changed through {@link Node.FilterGroup}, which
		 * redraws the menu.
		 */
		filterGroup: Nullable<number>
		/**
		 * The filter buttons under the node's list of pages. Changed through
		 * {@link Node.FilterGroups}, which redraws the menu.
		 */
		filterGroups: MenuFilterGroup[]
		/**
		 * The ids of the groups whose filter button is off, their pages left out of the list. The
		 * buttons change it, revealing a page turns its group back on, and it is not saved.
		 */
		filtersOff: Set<number>
		/**
		 * Whether the node's list of pages stands under one heading per {@link filterGroups} entry,
		 * pages of no group on top, while nothing is searched. Changed through
		 * {@link Node.GroupHeadings}, which redraws the menu.
		 */
		groupHeadings?: boolean
		/**
		 * Whether the node keeps the config values no entry of its own holds yet and writes them back
		 * on save, so an entry created later still finds its value. On by default.
		 */
		saveUnusedConfigs: boolean
		/**
		 * The raw config subtree last applied to the node, kept while {@link saveUnusedConfigs} is
		 * on: an entry created later takes its value from it, and a save writes back what no entry
		 * holds.
		 */
		stored?: Record<string, unknown>
		/**
		 * Whether each child node is a unit of its own when settings are picked out of a config: a
		 * hero of a hero list rather than the list as one. Changed through
		 * {@link Node.ConfigCollection}.
		 */
		configCollection?: boolean
		/**
		 * The name of the child page pinned above the node's list of pages; `undefined` for none.
		 * Changed through {@link Node.PinnedName}, which also opens that page.
		 */
		pinnedName?: string
		/**
		 * The heading over the pinned page, translated and in capitals; `undefined` for none.
		 * Changed through {@link Node.PinnedLabel}, which redraws the menu.
		 */
		pinnedLabel?: string
		/**
		 * The heading over the node's list of pages in place of its name; `undefined` keeps the
		 * name. Changed through {@link Node.SubLabel}, which redraws the menu.
		 */
		subLabel?: string
		/** Icon of this node's General entry and of the card holding its own rows; omitted keeps the home glyph. */
		generalIcon?: string
		/**
		 * The placeholder of a search field over the node's list of pages; the field is there only
		 * while this is set. Changed through {@link Node.SearchPlaceholder}, which redraws the menu.
		 */
		searchPlaceholder?: string
		/**
		 * Whether this node opens in a popover instead of on the page: the extra settings of a row,
		 * or a settings row of its own carrying nothing but its name, its swatches and the button.
		 */
		popover?: boolean
		/** Heading of this node's popover, where it should differ from the name of the row hosting it. */
		popoverTitle?: string
		/** Preferred settings-popover width in dp; omitted uses the compact default. */
		popoverWidth?: number
		/**
		 * Whether this popover holds settings per tile of its host image selector, a child node
		 * named after each tile's value and opened off that tile, rather than settings of the whole
		 * row opened off a button. Set by {@link Node.AddTileSettings}.
		 */
		byTile?: boolean
		/** Colour pickers riding this node's settings row, which lose rows of their own. */
		swatches?: ColorEntry[]
		/** Optional status glyphs before the settings button, separate from the row's main icon. */
		statusIconPaths?: readonly string[]
		/** Kept for {@link Node.TextColor}; nothing in the menu draws with it. */
		textColor?: Color
		/** Kept for {@link Node.IconGrayScale}; nothing in the menu draws with it. */
		iconGrayScale?: boolean
		/** Whether this node's row in a navigation list reads faded: its icon and name at half weight. */
		muted?: boolean
		/**
		 * Whether the node's child pages stand as tabs along the top of its page, one shown at a
		 * time. Changed through {@link Node.TabbedChildren}, which redraws the menu.
		 */
		tabbedChildren?: boolean
		/**
		 * Whether a top-level tab lays its child nodes out as section cards on its own page instead
		 * of listing them as sub-pages in the navigation column.
		 */
		inlinePages?: boolean
		/**
		 * Whether this child of a top-level tab stands as a tab along the top of the tab's General
		 * page instead of as a page in the navigation column.
		 */
		generalTab?: boolean
		/**
		 * Whether this page of a top-level tab stands in the navigation column right under the General
		 * entry, as a row of its own like it, instead of in the list of the tab's pages.
		 */
		besideGeneral?: boolean
		/**
		 * Whether this node stands as one row of the card holding it, with its name and header
		 * switch on the title line and its child nodes as tiles under it, instead of as a page or a
		 * fold of rows. Changed through {@link Node.Tiles}, which redraws the menu.
		 */
		tiles?: boolean
		/**
		 * What this node edits when it stands as one row of the card holding it: tabs of sequences of
		 * image steps the script keeps, the one in use shown, instead of a page or a fold of rows.
		 */
		sequences?: SequenceSource
		/**
		 * The control the node draws in its header instead of as a row: at the end of its card's
		 * title line, or in the top bar over its page. A toggle there makes everything under the
		 * node inert while it is off. Changed through {@link Node.HeaderControl}, which redraws the
		 * menu.
		 */
		headerControl?: ValueEntry
		/** Toggle whose off state makes every card of this page read as inert. */
		gate?: ToggleEntry
		/**
		 * The banner over the node's page while its {@link gate} is off; `undefined` for none.
		 * Changed through {@link Node.DisabledNotice}, which redraws the menu.
		 */
		disabledNotice?: DisabledNotice
		/**
		 * Draws the node's body in place of its rows: a page, the body of a card, or the panel of a
		 * settings popover. Changed through {@link Node.CustomPage}, which redraws the menu.
		 */
		customPage?: () => React.ReactNode
		/**
		 * Called on the menu's Back command while the node's page is shown: `true` means it handled
		 * the command, `false` lets the navigation history go back. Changed through
		 * {@link Node.BackAction}, which redraws the menu.
		 */
		backAction?: () => boolean
		/** Whether the node's pages, and its children's, drop the top bar and give its height to the page. */
		hideTopBar?: boolean
	}
	/** A button a note carries at its end, which a click anywhere on the note presses too. */
	interface DescriptionAction {
		/** The button's label, a localization key. */
		readonly label: string
		/** Runs after a click on the note or its button, unless the row is locked. */
		readonly run: () => void
	}
	/**
	 * Where the thing a note names stands: a short word at the note's end in the tone it reads as,
	 * and, when there is more to say, a line under the note saying why.
	 */
	interface DescriptionStatus {
		/** The word at the end, a localization key. */
		readonly text: string
		/** What it says about the thing. Muted where it is left out. */
		readonly tone?: SliderNoteTone
		/** The line under the note, a localization key; none for a status the word says whole. */
		readonly detail?: string
	}
	/**
	 * The record behind a note: the `entry` of a {@link ShortDescription}. A section header is one
	 * too, with {@link header} set.
	 */
	interface DescriptionEntry extends EntryCommon {
		readonly kind: "description"
		/**
		 * Whether the note is drawn highlighted, as a hovered row is. Changed through
		 * {@link ShortDescription.Selected}, which redraws the menu.
		 */
		selected: boolean
		/**
		 * Whether the entry is a section header: its icon and name as a heading, with no status or
		 * button. Set by {@link Node.AddSectionHeader}.
		 */
		header?: boolean
		/**
		 * The button at the note's end; `undefined` for none. Changed through
		 * {@link ShortDescription.SetAction}, which redraws the menu.
		 */
		action?: DescriptionAction
		/**
		 * The word at the note's end and, with a `detail`, the line under it; `undefined` for none.
		 * Changed through {@link ShortDescription.Status}, which redraws the menu.
		 */
		status?: DescriptionStatus
	}
	/** How a hotkey drives its entry: apply on every press, or follow the key while it is held. */
	type HotkeyMode = "toggle" | "hold"
	/** When a bound hotkey appears in the on-screen hotkeys panel. */
	type HotkeyVisibility = "hidden" | "active" | "always"
	/**
	 * What holds an entry at a stored value: a hotkey while its key is engaged, a logic rule while
	 * its condition holds. Both drive the entry and let it go the same way — only what turns them
	 * on differs.
	 */
	interface EntryDriver<T = unknown> {
		/** Value the driver holds the entry at while it is active. */
		value: T
		/** Whether the driver is currently holding the entry at its value; not persisted. */
		active: boolean
		/** Value the entry held before the driver engaged, restored on release; not persisted. */
		restore?: T
	}
	/**
	 * A key bound to an entry from its row's context menu. While the hotkey is active it drives
	 * the entry to {@link EntryDriver.value}; a hold-mode hotkey reverts on release, a toggle-mode
	 * one applies on every press.
	 */
	interface EntryHotkey<T = unknown> extends EntryDriver<T> {
		/** Packed bind code (`PackBind` in Store/Bind), 0 while unbound. */
		bind: number
		/** "toggle" applies the value on every press, "hold" drives it only while the key is down. */
		mode: HotkeyMode
		/** When this hotkey appears in the on-screen hotkeys panel. */
		visibility: HotkeyVisibility
		/** Whether this hotkey blocks its key from reaching the game. Off by default. */
		claimsKey: boolean
	}
	/** Which side of its threshold a logic rule holds its value on. */
	type LogicWhen = "after" | "before"
	/**
	 * A condition bound to an entry from its row's context menu. While the match clock stands on the
	 * {@link when} side of {@link at} the rule drives the entry to its value, and puts back whatever
	 * the entry held before as soon as it does not — so the next match arms the rule again.
	 */
	interface EntryLogic<T = unknown> extends EntryDriver<T> {
		/** Whether the rule holds its value after the threshold or before it. */
		when: LogicWhen
		/** Threshold on the match clock, in seconds. */
		at: number
	}
	/** A logic rule as a script declares one and the config stores it. */
	interface LogicRule<T = unknown> {
		/** Whether the rule holds its value after the threshold or before it. */
		when: LogicWhen
		/** Threshold on the match clock, in seconds. */
		at: number
		/** Value the rule holds the entry at. */
		value: T
	}
	/** Hotkey of a toggle: a press flips the switch or drives it to the stored state. */
	type ToggleHotkey = EntryHotkey<boolean>
	/** Hotkey of a slider: while active the slider holds the stored number. */
	type SliderHotkey = EntryHotkey<number>
	/**
	 * Hotkey of a dropdown: while active the stored option is selected. Keyed by the option's
	 * value rather than by index, so a renamed or reordered list cannot move it onto a
	 * different item.
	 */
	type DropdownHotkey = EntryHotkey<string>
	/** Hotkey of a multiselect: the option values selected while the hotkey is active. */
	type MultiSelectHotkey = EntryHotkey<string[]>
	/** Logic rule of a toggle: while its condition holds the switch sits at the stored state. */
	type ToggleLogic = EntryLogic<boolean>
	/** Logic rule of a slider: while its condition holds the slider sits at the stored number. */
	type SliderLogic = EntryLogic<number>
	/**
	 * Logic rule of a dropdown: while its condition holds the stored option is selected. Keyed by
	 * the option's value for the same reason a dropdown hotkey is.
	 */
	type DropdownLogic = EntryLogic<string>
	/** Logic rule of a multiselect: the option values selected while its condition holds. */
	type MultiSelectLogic = EntryLogic<string[]>
	/** The record behind a switch: the `entry` of a {@link Toggle}. */
	interface ToggleEntry extends EntryCommon {
		readonly kind: "toggle"
		/** The value the entry was created with, which a reset puts back. */
		readonly defaultValue: boolean
		/**
		 * Whether the switch is on. Changed through {@link Toggle.value}, which runs the listeners
		 * and schedules a save.
		 */
		value: boolean
		/** The value Safe mode holds the switch at; every set lands on it while it stands. */
		holdValue?: boolean
		/** Colours riding this toggle's row, shown while it is on. */
		swatches?: ColorEntry[]
		/** Keys bound to this toggle from its context menu, in creation order. */
		hotkeys: ToggleHotkey[]
		/** Conditions bound to this toggle from its context menu, in creation order. */
		logic: ToggleLogic[]
		/** The rules the toggle starts with and a reset puts back; none while undefined. */
		defaultLogic?: LogicRule<boolean>[]
		/** Called with the entry on every change of its value; the handle's `OnValue` adds one. */
		listeners: ((entry: ToggleEntry) => void)[]
	}
	/**
	 * How a slider's note reads: `muted` states a fact, the other three grade what the value buys
	 * against the theme's own status poles, so the line keeps its meaning on every palette.
	 */
	type SliderNoteTone = "muted" | "good" | "warn" | "bad"
	/**
	 * The line under a slider's rail saying what the value it stands at means - the risk tier it
	 * falls in, the cost it buys, the name of the range it lands in. It belongs to the slider
	 * rather than to a row of its own: nothing is drawn between the two, and a note replacing
	 * another one swaps through a blur instead of appearing under the control.
	 */
	interface SliderNote {
		/** The line itself, localized like every other string a script hands the menu. */
		readonly text: string
		/** The glyph in front of it; a note without one starts at the text. */
		readonly iconPath?: string
		/** What the line says about the value. Muted where it is left out. */
		readonly tone?: SliderNoteTone
	}
	/**
	 * A stretch of a slider's range, from {@link from} to {@link to}, and the tone its values read
	 * as. A slider's zones paint its rail as one ramp, the tones blending at their seams, bright up
	 * to the thumb and veiled beyond it. A locked or inert slider shows its accent instead.
	 */
	interface SliderZone {
		/** The value the stretch starts at. */
		readonly from: number
		/** The value the stretch ends at. */
		readonly to: number
		/**
		 * The tone the stretch is painted in: the theme's status colour for `"good"`, `"warn"` and
		 * `"bad"`, its muted text colour for `"muted"`.
		 */
		readonly tone: SliderNoteTone
	}
	/** The record behind a slider: the `entry` of a {@link Slider}. */
	interface SliderEntry extends EntryCommon {
		readonly kind: "slider"
		/** The value the entry was created with, which a reset puts back. */
		readonly defaultValue: number
		/** The declared range. A script that only learns the ceiling at runtime may move it. */
		min: number
		/**
		 * The top of the range. Changed through {@link Slider.max}, which brings the value back
		 * under it.
		 */
		max: number
		/** How many decimals the value keeps: every set rounds it to them. */
		readonly precision: number
		/**
		 * Where the slider stands, within the range and its clamps and rounded to {@link precision}.
		 * Changed through {@link Slider.value}, which clamps and rounds it, runs the listeners and
		 * schedules a save.
		 */
		value: number
		/**
		 * A floor the value cannot go below; `undefined` for none. Changed through
		 * {@link Slider.clampMin}, which raises the value to it where it lies below.
		 */
		clampMin?: number
		/**
		 * A ceiling the value cannot go above; `undefined` for none. Changed through
		 * {@link Slider.clampMax}, which lowers the value to it where it lies above.
		 */
		clampMax?: number
		/**
		 * A unit written after the value, translated; `undefined` for none. Changed through
		 * {@link Slider.Suffix}, which redraws the menu.
		 */
		suffix?: string
		/** Whether the rail rides the row beside the label instead of hanging below it. */
		inline?: boolean
		/**
		 * Labelled marks under the rail: `true` spaces them over the range on a round stride, an
		 * array marks those values; `undefined` for none. Changed through {@link Slider.Ticks},
		 * which redraws the menu.
		 */
		ticks?: number[] | true
		/**
		 * The line under the rail; `undefined` for none. Changed through {@link Slider.Note}, which
		 * redraws the menu.
		 */
		note?: SliderNote
		/**
		 * The stretches of the range the rail is painted in; `undefined` for the accent. Changed
		 * through {@link Slider.Zones}, which redraws the menu.
		 */
		zones?: SliderZone[]
		/**
		 * Whether a drag along the rail calls the listeners once, when it ends, instead of at every
		 * value it passes; a change made any other way calls them at once.
		 */
		callOnRelease: boolean
		/** Keys bound to this slider from its context menu, in creation order. */
		hotkeys: SliderHotkey[]
		/** Conditions bound to this slider from its context menu, in creation order. */
		logic: SliderLogic[]
		/** The rules the slider starts with and a reset puts back; none while undefined. */
		defaultLogic?: LogicRule<number>[]
		/**
		 * Called with the entry on every change of its value; the handle's `OnValue` adds one.
		 * With {@link callOnRelease} on, a drag along the rail calls them once, when it ends.
		 */
		listeners: ((entry: SliderEntry) => void)[]
		/**
		 * Called with the entry when a drag along the rail ends, whether or not the value moved; the
		 * handle's `OnChangeFinished` adds one.
		 */
		finishListeners: ((entry: SliderEntry) => void)[]
	}
	/**
	 * A span picked on one rail with two thumbs: every value from {@link low} to {@link high}, both
	 * on a {@link step} of the declared range and the low end never past the high one.
	 */
	interface RangeEntry extends EntryCommon {
		readonly kind: "range"
		/** The low end the entry was created with, which a reset puts back. */
		readonly defaultLow: number
		/** The high end the entry was created with, which a reset puts back. */
		readonly defaultHigh: number
		/** The bottom of the range: no end goes below it. */
		readonly min: number
		/** The top of the range: no end goes above it. */
		readonly max: number
		/** The distance between two values the thumbs can stand on, counted from {@link min}. */
		readonly step: number
		/** How many decimals the step has, which every value is written with. */
		readonly precision: number
		/**
		 * The low end of the span, on a step and never past {@link high}. Changed through
		 * {@link RangeSlider.low} or {@link RangeSlider.Set}, which put it on a step, run the
		 * listeners and schedule a save.
		 */
		low: number
		/**
		 * The high end of the span, on a step and never below {@link low}. Changed through
		 * {@link RangeSlider.high} or {@link RangeSlider.Set}, which put it on a step, run the
		 * listeners and schedule a save.
		 */
		high: number
		/**
		 * A unit written after each end's number, translated; `undefined` for none. Changed through
		 * {@link RangeSlider.Suffix}, which redraws the menu.
		 */
		suffix?: string
		/** Called with the entry on every change of its value; the handle's `OnValue` adds one. */
		listeners: ((entry: RangeEntry) => void)[]
	}
	/** The record behind a dropdown: the `entry` of a {@link Dropdown}. */
	interface DropdownEntry extends EntryCommon {
		readonly kind: "dropdown"
		/** The index of the option the entry was created with, which a reset selects again. */
		readonly defaultValue: number
		/**
		 * The options, as names the menu translates when it shows them. Changed through
		 * {@link Dropdown.SetOptions}, which keeps the selection on its option where that option
		 * stays, and runs the listeners.
		 */
		values: string[]
		/**
		 * The index in {@link values} of the selected option. Changed through
		 * {@link Dropdown.SelectedID}, which keeps it in range, runs the listeners and schedules a
		 * save.
		 */
		selectedID: number
		/**
		 * The option a config stored past the end of {@link values}: options the script has not
		 * offered yet. It is written back as stored and taken once the options reach it; a choice
		 * made meanwhile drops it.
		 */
		unplacedOption?: number
		/** The option Safe mode holds the dropdown at; every set lands on it while it stands. */
		holdOption?: number
		/**
		 * One image per option, by its index in {@link values}; `""` for an option without one. Drawn
		 * beside the options and the selection, and as the cards of the `"cards"` {@link layout}.
		 * Set through {@link Dropdown.SetOptionIcons}.
		 */
		icons?: string[]
		/** How the options are offered; a list when unset. */
		layout?: DropdownLayout
		/**
		 * A small icon riding the corner of each option's card, parallel to {@link values} and empty
		 * where an option has none - what an option can do that its picture does not show.
		 */
		marks?: string[]
		/**
		 * The colour pickers on each option's row, by option value; `undefined` for none. Set
		 * through {@link Dropdown.PairColors}.
		 */
		swatches?: OptionSwatches
		/** Keys bound to this dropdown from its context menu, in creation order. */
		hotkeys: DropdownHotkey[]
		/** Conditions bound to this dropdown from its context menu, in creation order. */
		logic: DropdownLogic[]
		/** The rules the dropdown starts with and a reset puts back; none while undefined. */
		defaultLogic?: LogicRule<string>[]
		/**
		 * Called with the entry on every change of its value and when its options are replaced; the
		 * handle's `OnValue` adds one.
		 */
		listeners: ((entry: DropdownEntry) => void)[]
	}
	/**
	 * How a dropdown offers its options: `"list"` opens them in a popover from the row, `"cards"`
	 * lays them out under the row as picture cards, each picked with one click.
	 */
	type DropdownLayout = "list" | "cards"
	/**
	 * Colour pickers riding an option's own row, keyed by the option's value for the same reason
	 * the selection is: a renamed or reordered list must not move them onto a different item.
	 */
	type OptionSwatches = Map<string, ColorEntry[]>
	/**
	 * Selection is keyed by value rather than by index, so reordering or renaming
	 * the list cannot silently move a stored choice onto a different item.
	 */
	interface MultiSelectEntry extends EntryCommon {
		readonly kind: "multiSelect"
		/** The option values selected when the entry was created, which a reset selects again. */
		readonly defaultValue: string[]
		/**
		 * The options, as names the menu translates when it shows them. Changed through
		 * {@link MultiSelect.SetOptions}, which runs the listeners; {@link enabled} keeps the state
		 * of a name that leaves.
		 */
		values: string[]
		/**
		 * Whether each option is selected, by option value, kept for a value that left
		 * {@link values}. Changed through {@link MultiSelect.SelectedNames} or
		 * {@link MultiSelect.Select}, which run the listeners and schedule a save.
		 */
		enabled: Map<string, boolean>
		/**
		 * The colour pickers on each option's row, by option value; `undefined` for none. Set
		 * through {@link MultiSelect.PairColors}.
		 */
		swatches?: OptionSwatches
		/** Keys bound to this multiselect from its context menu, in creation order. */
		hotkeys: MultiSelectHotkey[]
		/** Conditions bound to this multiselect from its context menu, in creation order. */
		logic: MultiSelectLogic[]
		/** The rules the multiselect starts with and a reset puts back; none while undefined. */
		defaultLogic?: LogicRule<string[]>[]
		/**
		 * Called with the entry on every change of its value and when its options are replaced; the
		 * handle's `OnValue` adds one.
		 */
		listeners: ((entry: MultiSelectEntry) => void)[]
	}
	/** The record behind a key bind: the `entry` of a {@link Keybind}. */
	interface KeybindEntry extends EntryCommon {
		readonly kind: "keybind"
		/** Runtime active state for the hotkeys panel; undefined follows the physical key. */
		hotkeysActive?: boolean
		/** Whether this keybind is hidden from the hotkeys panel until the user changes its visibility. */
		defaultHotkeysHidden: boolean
		/** Saved user preference to exclude this keybind from the hotkeys panel. */
		hotkeysHidden?: boolean
		/**
		 * The name of the key the bind was created with, as `SharedSDK.KeyNames` spells it; `""`
		 * for none. Changed through {@link Keybind.defaultKey}, which also sets {@link defaultKeyIdx}.
		 */
		defaultKey: string
		/**
		 * The bind code a reset assigns, packed as {@link assignedKey} is; `0` for none. It starts as
		 * the key {@link defaultKey} names, which is also what the bind starts on.
		 */
		defaultKeyIdx: number
		/**
		 * The bound key as a bind code, the key in the low byte and a held modifier in the high one;
		 * `0` while unbound. Changed through {@link Keybind.assignedKey}, which runs the listeners
		 * and schedules a save.
		 */
		assignedKey: number
		/**
		 * Whether the bound key is held down, as the bind last saw it. The menu sets it on each press
		 * and release and runs the listeners then; it is not saved.
		 */
		active: boolean
		/**
		 * Whether the bind answers a press while the menu is open, outside a game and while the game
		 * has taken the keyboard. Off by default.
		 */
		activatesInMenu: boolean
		/**
		 * Whether a press this bind answers is taken from the game. Off by default so the
		 * menu action and the game's action can both respond to the same press.
		 */
		claimsKey: boolean
		/**
		 * Whether the press that made the bind active was taken from the game. Auto-repeats of that
		 * key and its release are then taken too: the game never saw the key go down, so it must not
		 * see it held or come up either, or it would keep the key pressed until the window loses focus.
		 */
		claimed: boolean
		/**
		 * Whether the key capture popup offers a button that binds the left mouse button. On by
		 * default.
		 */
		allowLeftMouse: boolean
		/**
		 * Whether the key capture records a combination, a key pressed while another is held. On by
		 * default.
		 */
		allowCombinations: boolean
		/**
		 * The mode the bind is declared with, which a reset returns to. Set, its row offers a
		 * Hold/Toggle switch beside the key; undefined, the bind has no mode.
		 */
		defaultMode?: HotkeyMode
		/** The mode the player picked; read while {@link defaultMode} is set. */
		mode?: HotkeyMode
		/**
		 * Called with the entry when the bound key goes down or up and when the key or the mode is
		 * changed; the handle's `OnValue`, `OnPressed` and `OnRelease` add to it.
		 */
		listeners: ((entry: KeybindEntry) => void)[]
	}
	/** Visual emphasis of an action button. */
	type ButtonVariant = "primary" | "secondary" | "ghost" | "danger"
	/** Height and spacing scale of an action button. */
	type ButtonSize = "sm" | "md"
	/** The record behind a button: the `entry` of a {@link Button}. */
	interface ButtonEntry extends EntryCommon {
		readonly kind: "button"
		/**
		 * How the button is drawn; `"secondary"` by default. Changed through {@link Button.Variant},
		 * which redraws the menu.
		 */
		variant: ButtonVariant
		/**
		 * The button's height and spacing; `"md"` by default. Changed through {@link Button.Size},
		 * which redraws the menu.
		 */
		size: ButtonSize
		/**
		 * Called with the entry on every press of the button, by a click or {@link Button.Trigger};
		 * the handle's `OnValue` adds one.
		 */
		listeners: ((entry: ButtonEntry) => void)[]
	}
	/**
	 * How a picker makes its colour: one colour, a gradient laid across the surface from one colour
	 * to another, or a hue walking the whole circle at the entry's period.
	 */
	type ColorMode = "solid" | "gradient" | "rainbow"
	/** The record behind a colour picker: the `entry` of a {@link ColorPicker}. */
	interface ColorEntry extends EntryCommon {
		readonly kind: "color"
		/** The colour the entry was created with. A reset puts it back as a solid colour. */
		readonly defaultColor: Color
		/** The colour itself, and the first stop of a gradient or the seed of a rainbow. */
		color: Color
		/**
		 * How the colour is made. Changed through {@link ColorPicker.Mode}, which keeps it among
		 * {@link modes}, runs the listeners and schedules a save.
		 */
		mode: ColorMode
		/** The colour at the far end of a gradient; the other modes never read it. */
		color2: Color
		/** How long a rainbow takes to come back round, in seconds. */
		period: number
		/**
		 * The modes the palette offers, solid always among them. A picker whose owner reads it
		 * once, on change, keeps to one colour: an animation nobody samples is a colour that never
		 * moves; one whose owner tints a picture offers no gradient, since a tint is one colour.
		 */
		modes: readonly ColorMode[]
		/**
		 * The colour this picker stands for while nobody has touched it, read every render. A default
		 * that follows the theme rather than a literal, for a swatch whose owner draws in the theme's
		 * own ink until it is given a colour of its own.
		 *
		 * {@link defaultColor} stays the literal it was declared with: it is what a config is compared
		 * against, and one that moved with the theme would make the same config read differently on
		 * two machines.
		 */
		follows?: () => Color
		/**
		 * Runs the value listeners once the hand lets go rather than on every colour a drag passes
		 * through, for an owner whose work per colour is dear - a glyph effect baked per colour.
		 */
		callOnRelease: boolean
		/**
		 * Called with the entry on every change of its value; the handle's `OnValue` adds one.
		 * With {@link callOnRelease} on, a drag across the palette calls them once, when it ends.
		 */
		listeners: ((entry: ColorEntry) => void)[]
	}
	/** The record behind a text field: the `entry` of a {@link TextInput}. */
	interface TextEntry extends EntryCommon {
		readonly kind: "text"
		/** What the empty field shows, translated; `""` for the menu's generic placeholder. */
		readonly placeholder: string
		/**
		 * The text in the field. Changed through {@link TextInput.text}, which runs the listeners
		 * and schedules a save.
		 */
		text: string
		/** Called with the entry on every change of its value; the handle's `OnValue` adds one. */
		listeners: ((entry: TextEntry) => void)[]
	}
	/**
	 * A list of short strings the user edits in the row itself: a field to type a new one into and
	 * a row per string with its own remove control. Values are trimmed, cut at `maxLength` and
	 * kept unique; the list stops growing at `maxItems`.
	 */
	interface ListEntry extends EntryCommon {
		readonly kind: "list"
		/** The longest string the list takes; a longer one is cut to it. */
		readonly maxLength: number
		/** How many strings the list holds at most. */
		readonly maxItems: number
		/** Replaced whole on every change and never mutated in place, so a held reference reads as it was. */
		values: string[]
		/** The values the entry was created with, kept for resets and the changed mark. */
		defaultValues: string[]
		/** The row's own field, never attached to the tree: it carries what is being typed. */
		readonly draft: TextEntry
		/** Called with the entry on every change of its value; the handle's `OnValue` adds one. */
		listeners: ((entry: ListEntry) => void)[]
	}
	/**
	 * How an image selector draws its tiles: `"square"`, the default, as rounded tiles widened for
	 * a wide picture up to a cap; `"item"` in the picture's own proportions; `"hero"` as 16:9 cards;
	 * `"circle"` as round 30 dp chips.
	 */
	type ImageVariant = "square" | "item" | "hero" | "circle"
	/** One value a catalogue offers, as the picker's browse modal lists it. */
	interface CatalogueValue {
		/** The value itself, which is also what the tile's image is resolved from. */
		readonly value: string
		/** What the tile is called, localized before it is shown. */
		readonly label: string
		/** Short text displayed over the image's upper-right corner. */
		readonly cornerLabel?: string
		/** Semantic accent for the corner label; the menu accent is used when omitted. */
		readonly cornerAccent?: string
		/** Words the modal's search matches besides the label, such as what the value does. */
		readonly keywords?: string
		/**
		 * Whether the tile starts chosen, and comes back chosen on a reset, in place of the picker's
		 * state for new tiles.
		 */
		readonly enabled?: boolean
	}
	/** A titled run of values in the browse modal, such as one shop category. */
	interface CatalogueSection {
		/**
		 * The section's heading; translated. A search in the browse modal that matches it lists the
		 * whole section.
		 */
		readonly title: string
		/** The values the section offers, in the order it lists them. */
		readonly values: readonly CatalogueValue[]
		/** Colour the heading and a chosen tile's edge wear, in place of the theme's accent. */
		readonly accent?: string
	}
	/** The record behind an image selector: the `entry` of an {@link ImageSelector}. */
	interface ImagesEntry extends EntryCommon {
		readonly kind: "images"
		/**
		 * How the tiles are drawn; `"square"` when unset. Changed through
		 * {@link ImageSelector.Variant}, which redraws the menu.
		 */
		variant?: ImageVariant
		/**
		 * The tile values in their current order, each also what its tile's image is resolved from.
		 * Set whole through {@link ImageSelector.values}, which also makes the list and its current
		 * states the defaults.
		 */
		values: string[]
		/** The arrangement the entry was created with, kept for resets. */
		defaultOrder: string[]
		/**
		 * Whether each tile is chosen, by value; it may hold values the row does not show yet. A
		 * click on a tile switches it; {@link ImageSelector.enabledValues} replaces it whole and runs
		 * no listener.
		 */
		enabled: Map<string, boolean>
		/**
		 * Whether the config keeps the tiles' order, as a draggable row does, so a tile added later
		 * takes the place the config kept for it. On when the selector was created with its defaults
		 * as a non-empty list of pairs.
		 */
		ordered: boolean
		/** Lets the user rearrange the grid by dragging tiles. */
		draggable: boolean
		/**
		 * Whether a tile starts chosen when neither the declared defaults nor the config give it a
		 * state; also what {@link ImageSelector.AddImage} takes when given no state.
		 */
		createdDefault: boolean
		/** The state each tile was declared with, kept for resets and the changed mark. */
		defaultEnabled: Map<string, boolean>
		/**
		 * The tile values in the order the config last applied to the row listed them. In an ordered
		 * or draggable row a tile added later takes its place from it, and a save keeps a tile the
		 * script has not added yet in that place.
		 */
		storedOrder: string[]
		/**
		 * What the row's own tiles are chosen from. A picker with a catalogue keeps the chosen tiles
		 * in the row and hands the rest to a modal, so a hundred-value picker stays one row tall.
		 */
		catalogue: readonly CatalogueSection[]
		/**
		 * Values the grid leaves out for now. They keep their place in {@link values}, their state
		 * and their config; only their tiles are not drawn.
		 */
		hidden?: ReadonlySet<string>
		/**
		 * The switch standing at the end of the row's title line, which runs what the tiles choose
		 * for. It is hosted by the row and has none of its own.
		 */
		headerControl?: ToggleEntry
		/**
		 * Called with the entry when a tile is switched or moved and on a reset; the handle's
		 * `OnValue` adds one. A config applied to the row, the handle's property setters and
		 * {@link ImageSelector.AddImage} call none.
		 */
		listeners: ((entry: ImagesEntry) => void)[]
	}
	/** One preset of a preset selector: its display name and the catalogue values it claims. */
	interface PresetGroup {
		/**
		 * Identity that survives renames and the removal of other presets, unique within its entry.
		 * What a script keys per-preset state of its own by; the base preset always carries 0.
		 */
		readonly id: number
		/**
		 * The preset's name, unique among the selector's presets; the base preset carries
		 * {@link PresetsEntry.baseName}. The user renames it in the panel, and
		 * {@link PresetSelector.Load} replaces every preset.
		 */
		name: string
		/**
		 * The catalogue values the preset claims, none of them claimed by another preset; the base
		 * claims none. The user edits them in the panel, and {@link PresetSelector.Load} replaces
		 * every preset.
		 */
		values: string[]
	}
	/**
	 * A preset selector: a row showing the chosen preset, opening a panel that lists a permanent
	 * base preset above the user's own. Every other preset claims values from the catalogue, each
	 * value belonging to at most one preset; values the base covers are whatever no other claims.
	 */
	interface PresetsEntry extends EntryCommon {
		readonly kind: "presets"
		/** Name of the permanent first preset. It claims no values and cannot be renamed or removed. */
		readonly baseName: string
		/** Heading of the row's panel where it should differ from the row's own name. */
		panelTitle?: string
		/**
		 * Why the selector refuses a click while it is disabled, told on hover: a first line, and
		 * past a line break the way out.
		 */
		disabledReason?: string
		/** Every preset, the base always first. Mutate only through the Store's preset calls. */
		presets: PresetGroup[]
		/**
		 * The index in {@link presets} of the selected preset, `0` for the base. Changed through
		 * {@link PresetSelector.SelectedID}, which keeps it in range, runs the listeners and
		 * schedules a save.
		 */
		selected: number
		/** The {@link PresetGroup.id} the next new preset gets; the selector counts it up itself. */
		nextId: number
		/** What preset values are picked from, laid out section by section like a browse catalogue. */
		catalogue: readonly CatalogueSection[]
		/**
		 * Called with the entry on every change of its presets or of the selection; the handle's
		 * `OnValue` adds one.
		 */
		listeners: ((entry: PresetsEntry) => void)[]
		/**
		 * Who carries one preset's settings over to another. The selector owns no settings of its
		 * own, so the panel offers Copy/Paste only while something is listening here.
		 */
		copyListeners: ((from: PresetGroup, to: PresetGroup) => void)[]
	}
	/** Any entry but a node: a control or a note. */
	type ValueEntry = ToggleEntry | SliderEntry | RangeEntry | DropdownEntry | MultiSelectEntry | KeybindEntry | ButtonEntry | ColorEntry | TextEntry | ListEntry | ImagesEntry | PresetsEntry | DescriptionEntry
	/** Any entry of the menu tree, a node or not; {@link EntryCommon.kind} tells which. */
	type Entry = NodeEntry | ValueEntry
	/** Entries whose rows carry hotkeys and logic rules from the context menu. */
	type DriverHolder = ToggleEntry | SliderEntry | DropdownEntry | MultiSelectEntry
	/** A value a hotkey or a logic rule holds its entry at, of whatever kind the entry carries. */
	type DriverValue = boolean | number | string | string[]
}
