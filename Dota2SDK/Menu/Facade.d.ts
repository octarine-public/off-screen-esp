// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * What every menu control and node has: a name, a tooltip, an icon, visibility and a place among
	 * its siblings.
	 */
	interface Handle<E extends EntryCommon> {
		/** The stored entry this handle reads and writes. */
		readonly entry: E
		/**
		 * Whether a callback added with `OnValue` is also called once at the moment it is added.
		 * `true` except on a button.
		 */
		executeOnAdd: boolean
		/** Whether the control is shown in the menu. */
		get IsVisible(): boolean
		set IsVisible(value: boolean)
		/** Whether this entry and its descendants may appear in the hotkeys panel. Does not hide menu settings or change key handling. */
		get HotkeysVisible(): boolean
		set HotkeysVisible(value: boolean)
		/**
		 * Whether the control is disabled, by the script or by a Safe mode lock. Setting it changes
		 * the script's part only.
		 */
		get IsDisabled(): boolean
		set IsDisabled(value: boolean)
		/** The same as {@link Name}. */
		get InternalName(): string
		/** The tooltip as the script set it, untranslated. */
		get InternalTooltipName(): string
		/**
		 * Extra words the menu search finds this control by, besides its name. A keyword is matched
		 * in its translations too.
		 * @example
		 * distance.SearchKeywords = ["Camera zoom", "Zoom out"]
		 */
		get SearchKeywords(): readonly string[]
		set SearchKeywords(value: readonly string[])
		/** Path of the control's icon. */
		get IconPath(): string
		set IconPath(value: string)
		/**
		 * Calls `callback` for every node above this control, nearest first. With `includeSelf`, a
		 * node is passed itself before them.
		 */
		foreachParent(callback: (node: Node) => void, includeSelf?: boolean): void
		/** Whether `predicate` holds for every node above this control; stops at the first that fails. */
		everyParent(predicate: (node: Node) => boolean): boolean
		/** The node this control sits in; a tab's is the menu's root node, which alone has none. */
		get parent(): Nullable<Node>
		/**
		 * Links other controls to this row: resetting the row resets them, and the row shows as
		 * changed while any of them is. For a row that displays values kept in hidden controls.
		 * @example
		 * state.Companions(sound, volume)
		 */
		Companions(...handles: {
			readonly entry: Entry
		}[]): this
		/** The opposite of {@link IsVisible}. */
		get IsHidden(): boolean
		set IsHidden(value: boolean)
		/** The name the control was created with, as the script gave it. */
		get Name(): string
		/** The hint shown with the control; `undefined` for none. */
		get Hint(): Nullable<MenuHint>
		set Hint(value: Nullable<MenuHint>)
		/** The control's description; `""` when it has none. */
		get Description(): string
		set Description(value: string)
		/**
		 * The control this row stands in for. When set, the row's context menu offers "Go to", which
		 * opens the target the way picking it in the search does.
		 * @example
		 * const row = list.AddKeybind(path.join(" > "), source.assignedKeyStr)
		 * row.RevealTarget = source
		 */
		get RevealTarget(): Nullable<AnyHandle>
		set RevealTarget(value: Nullable<AnyHandle>)
		/**
		 * Extra items for this control's context menu, shown under the built-in ones. The function
		 * is called every time the menu opens. On a page shown as a tab they also appear in the menu
		 * a right click on the tab opens.
		 * @example
		 * page.ContextItems = () => [
		 * 	{ icon: "menu/ui/copy.svg", label: "Take style", disabled: false, run: take }
		 * ]
		 */
		get ContextItems(): Nullable<() => readonly ContextMenuItem[]>
		set ContextItems(value: Nullable<() => readonly ContextMenuItem[]>)
		/**
		 * Icon buttons at the right of the row, before its settings button. Assign a new array to
		 * redraw them after one changes.
		 * @example
		 * selector.RowActions = [
		 * 	{ icon: MenuSDK.MenuIcons.LockKeyhole, tooltip: "Default order", active: locked, run: flip }
		 * ]
		 */
		get RowActions(): readonly RowAction[]
		set RowActions(value: readonly RowAction[])
		/** Text shown while the pointer rests on the control. */
		get tooltip(): string
		set tooltip(value: string)
		/** Whether the control holds its default value. A control without a value answers `true`. */
		IsDefault(): boolean
		/** `true` when the control is not saved to the config or holds its default value. */
		get IsDefaultValue(): boolean
		/** Whether this is a node: a container of other controls. */
		get IsNode(): boolean
		/** Puts the default value back. */
		ResetToDefault(): void
		/** Redraws the menu; the same as {@link Update}. */
		UpdateIsDefault(): void
		/** Redraws the menu. */
		Update(): void
		/**
		 * Sort key among the controls of one node: lower comes first. Used only in a node that sorts
		 * its children.
		 */
		get Priority(): number
		set Priority(value: number)
		/** Colour the icon is drawn in; `undefined` when none is set. */
		get IconColor(): Nullable<Color>
		set IconColor(value: Nullable<Color>)
		/** Removes the control from its node. `false` when it has no node or is no longer in it. */
		DetachFromParent(): boolean
		/** Redraws the menu; the same as {@link Update}. */
		OnConfigLoaded(): void
		/**
		 * Whether this machine had not shown the control before the config was loaded at start. Its
		 * row carries the "new" mark until the pointer has been over it.
		 */
		get FirstTime(): boolean
		/** Whether the control's value is saved to the config. */
		get SaveConfig(): boolean
		set SaveConfig(value: boolean)
	}
	/** A driven value as a script hands it over: whatever kind the owning entry carries. */
	type DrivenValue = boolean | number | string | string[]
	/**
	 * One hotkey riding an entry — the object the row's context menu edits. All
	 * setters persist to the config and repaint the menu. `T` is the driven
	 * value: boolean for a toggle, number for a slider, an option's value string
	 * for a dropdown, or option values for a multiselect.
	 */
	class HotkeyHandle<T extends DrivenValue> {
		/** The stored hotkey this handle reads and writes. */
		public readonly hotkey: EntryHotkey<T>
		/**
		 * A handle over `hotkey`, one of the hotkeys of the entry `owner`. A control's `AddHotkey` and
		 * `Hotkeys` hand these out.
		 */
		constructor(owner: DriverHolder, 
		/** The stored hotkey this handle reads and writes. */
		hotkey: EntryHotkey<T>)
		/** Packed bind code, 0 while unbound. */
		public get Bind(): number
		public set Bind(value: number)
		/**
		 * Full display name of the bind: "Ctrl + F" for combinations, "F" for
		 * single keys, "None" while unbound.
		 */
		public get BindName(): string
		/** "toggle" applies the value on every press, "hold" drives it only while the key is down. */
		public get Mode(): HotkeyMode
		public set Mode(value: HotkeyMode)
		/** Whether this hotkey blocks game input. Off by default; saved with the hotkey. */
		public get ClaimsKey(): boolean
		public set ClaimsKey(value: boolean)
		/**
		 * Value the hotkey drives the entry to while active. A slider's value is
		 * clamped and rounded like the slider itself; dropdown and multiselect
		 * values must name existing options or the assignment is ignored.
		 */
		public get Value(): T
		public set Value(value: T)
		/**
		 * The driven value as the on-screen panel writes it: empty for a toggle,
		 * the number with the slider's precision and suffix, the option of a
		 * dropdown, or the multiselect summary. What tells two hotkeys of one entry
		 * apart in a listing.
		 */
		public get ValueName(): string
		/**
		 * {@link ValueName} in the menu's language: the slider's suffix, the dropdown's option and
		 * the multiselect's options translated the way the menu shows them.
		 */
		public get LocalizedValueName(): string
		/** When this hotkey appears in the on-screen hotkeys panel. */
		public get Visibility(): HotkeyVisibility
		public set Visibility(value: HotkeyVisibility)
		/** Whether the hotkey is currently driving the entry to its value. */
		public get IsActive(): boolean
		/** Removes the hotkey from its entry. */
		public Remove(): void
	}
	/**
	 * One logic rule riding an entry — the object the row's context menu edits. The rule holds its
	 * entry at {@link LogicHandle.Value} while the match clock stands on its side of the threshold,
	 * and puts back what the entry held before as soon as it does not, so every match arms it
	 * again. All setters persist to the config and repaint the menu.
	 */
	class LogicHandle<T extends DrivenValue> {
		/** The stored rule this handle reads and writes. */
		public readonly rule: EntryLogic<T>
		/**
		 * A handle over `rule`, one of the logic rules of the entry `owner`. A control's `AddLogic` and
		 * `Logic` hand these out.
		 */
		constructor(owner: DriverHolder, 
		/** The stored rule this handle reads and writes. */
		rule: EntryLogic<T>)
		/** Whether the rule holds its value after its threshold or before it. */
		public get When(): LogicWhen
		public set When(value: LogicWhen)
		/** Threshold on the match clock, in seconds. */
		public get At(): number
		public set At(value: number)
		/** The threshold as the menu writes it: `"5:00"`, `"12:30"`. */
		public get AtName(): string
		/**
		 * Value the rule holds the entry at while its condition does. A slider's value is clamped
		 * and rounded like the slider itself; dropdown and multiselect values must name existing
		 * options or the assignment is ignored.
		 */
		public get Value(): T
		public set Value(value: T)
		/**
		 * The held value as the menu writes it: empty for a toggle, the number with the slider's
		 * precision and suffix, the option of a dropdown, or the multiselect summary.
		 */
		public get ValueName(): string
		/** Whether the rule is holding the entry at its value right now. */
		public get IsActive(): boolean
		/** Removes the rule, putting back what the entry held before it engaged. */
		public Remove(): void
	}
	/** An on/off switch. */
	class Toggle implements Handle<ToggleEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/**
		 * Theme token whose colour the row's mark is drawn in, in place of the "new" and "changed"
		 * marks; `""` for none.
		 */
		public get MarkColorToken(): string
		public set MarkColorToken(value: string)
		/** Calls every {@link OnValue} callback now, without changing the value. */
		public TriggerOnValueChangedCBs(): Toggle
		/** {@link OnValue} for the changes that leave the switch off. */
		public OnDeactivate(callback: (caller: Toggle) => void): Toggle
		/**
		 * Whether the switch is on. A set that changes it runs the {@link OnValue} callbacks; while
		 * {@link HoldValue} is set, the held value is stored instead.
		 */
		public get value(): boolean
		public set value(next: boolean)
		/**
		 * A value the switch is locked to, or `undefined` while it is free. Setting one applies it at
		 * once, and every later change, whether from a click, a hotkey, a rule or a config, is
		 * replaced by it. Safe mode locks switches this way.
		 */
		public get HoldValue(): Nullable<boolean>
		public set HoldValue(value: Nullable<boolean>)
		/** The value the switch was created with. */
		public get defaultValue(): boolean
		/**
		 * Calls `callback` every time the value changes, and once right away unless
		 * {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: Toggle) => void): Toggle
		/** {@link OnValue} for the changes that leave the switch on. */
		public OnActivate(callback: (caller: Toggle) => void): Toggle
		/**
		 * Puts colour pickers on this switch's row as swatches left of the switch. The pickers lose
		 * their own rows and show only while the switch is on; hovering a swatch shows its name.
		 * @example
		 * const crates = objects.AddToggle("Crates", true)
		 * crates.PairColors(objects.AddColorPicker("Crate color", new Color(210, 180, 140)))
		 */
		public PairColors(...pickers: ColorPicker[]): Toggle
		/** The colour pickers attached with {@link PairColors}. */
		public get PairedColors(): ColorPicker[]
		/**
		 * Adds a hotkey for this switch, as "New Hotkey" in its context menu does. Hotkeys are saved
		 * in the config and every call adds one more, so call it on a user action, not on script load.
		 * @example
		 * const panic = state.AddHotkey("F4", "hold")
		 * panic.Value = false
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<boolean>
		/** The hotkeys of this switch, oldest first. */
		public get Hotkeys(): HotkeyHandle<boolean>[]
		/**
		 * Adds a logic rule for this switch, as "New logic" in its context menu does; the rule takes
		 * the switch's current state until it is edited. Rules are saved in the config and every call
		 * adds one more, so call it on a user action, not on script load.
		 * @example
		 * const lateGame = state.AddLogic("after", 5 * 60)
		 * lateGame.Value = false
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<boolean>
		/** The logic rules of this switch, oldest first. */
		public get Logic(): LogicHandle<boolean>[]
		/**
		 * Gives the switch a logic rule of its own, at `at` seconds of match time. A config with no
		 * rules saved for the switch starts with it, the user edits or removes it like any other, and
		 * "Reset to default" puts it back. Call it once, where the switch is created.
		 * @example
		 * state.AddDefaultLogic("after", 15 * 60, false)
		 */
		public AddDefaultLogic(when: LogicWhen, at: number, value: boolean): Toggle
	}
	interface Toggle extends Handle<ToggleEntry> {}
	/**
	 * A number picked on a rail from {@link Slider.min} to {@link Slider.max}, rounded to the
	 * precision the slider was created with.
	 */
	class Slider implements Handle<SliderEntry> {
		public IsDefault(): boolean
		/** A unit written after the number, localized like a label; `""` for none. */
		public get Suffix(): string
		public set Suffix(value: string)
		/**
		 * Lays the rail out on the row itself, between the label and the value, so the slider stands
		 * as tall as a toggle: for a panel of many sliders read side by side. A slider with
		 * {@link Ticks} keeps its rail below the label, where the tick labels have room.
		 * @example
		 * strength.Inline = true
		 */
		public get Inline(): boolean
		public set Inline(value: boolean)
		/**
		 * A live line under the rail naming what the value the slider stands at means - the
		 * detection-risk tier it falls in, the cost it buys, the range the number lands in. It
		 * rides the slider's own row, so nothing is drawn between the two and the pair reads as
		 * one control; a note replacing another one swaps through a blur, and `undefined` takes
		 * the line away.
		 * @example
		 * smooth.OnValue(caller => {
		 * 	caller.Note =
		 * 		caller.value >= 66
		 * 			? { text: "Minimal detection risk", iconPath: "shield-check.svg", tone: "good" }
		 * 			: { text: "High detection risk", iconPath: "triangle-warning.svg", tone: "bad" }
		 * })
		 */
		public get Note(): Nullable<SliderNote>
		public set Note(value: Nullable<SliderNote>)
		/**
		 * The rail painted in the tones stretches of the range read as, so what the value buys is
		 * in the colour under the thumb and where the {@link Note} is going to change is in view
		 * before the thumb gets there. The tones run into one another at their seams, the way a
		 * health bar's do; the ramp is bright up to the thumb and a ghost of itself beyond it. A
		 * value on a seam belongs to the later zone, and `undefined` gives the rail its accent back.
		 * @example
		 * smooth.Zones = [
		 * 	{ from: 0, to: 33, tone: "bad" },
		 * 	{ from: 33, to: 66, tone: "warn" },
		 * 	{ from: 66, to: 100, tone: "good" }
		 * ]
		 */
		public get Zones(): Nullable<SliderZone[]>
		public set Zones(value: Nullable<SliderZone[]>)
		/**
		 * Labelled tick marks under the track. `true` derives ticks from the range
		 * on a round stride; an array labels exactly those values.
		 * @example
		 * distance.Ticks = true
		 */
		public get Ticks(): Nullable<number[] | true>
		public set Ticks(value: Nullable<number[] | true>)
		public ResetToDefault(): void
		/**
		 * A floor inside the range: the rail still starts at {@link min}, but the value is kept at or
		 * above this one. `undefined` for none. Setting it brings the current value within it.
		 */
		public get clampMin(): Nullable<number>
		public set clampMin(value: Nullable<number>)
		/**
		 * A ceiling inside the range: the rail still ends at {@link max}, but the value is kept at or
		 * below this one. `undefined` for none. Setting it brings the current value within it.
		 */
		public get clampMax(): Nullable<number>
		public set clampMax(value: Nullable<number>)
		public get min(): number
		/** Moves the floor; the current value follows it. */
		public set min(value: number)
		public get max(): number
		/**
		 * Moves the ceiling; the current value follows it. For a slider whose real limit is only
		 * known once the game says so - an ability's cast range, a cooldown.
		 */
		public set max(value: number)
		/**
		 * The number the slider stands at. A set is kept within the range and any {@link clampMin} or
		 * {@link clampMax}, rounded to the precision, and runs the {@link OnValue} callbacks when it
		 * changes the value.
		 */
		public get value(): number
		public set value(next: number)
		/** What this slider was declared with. {@link ResetToDefault} puts it back. */
		public get defaultValue(): number
		/**
		 * Calls `callback` every time the value changes, and once right away unless
		 * {@link executeOnAdd} is off. With {@link CallOnRelease} on, a drag along the rail calls it
		 * once, when the drag ends.
		 */
		public OnValue(callback: (caller: Slider) => void): Slider
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Slider
		/**
		 * Calls `callback` every time a drag along the rail ends, whether or not it moved the value.
		 * A change made any other way does not call it.
		 */
		public OnChangeFinished(callback: (caller: Slider) => void): Slider
		/**
		 * Whether the {@link OnValue} callbacks wait for the hand to let go: on, a drag along the rail
		 * calls them once, when it ends, and a change made any other way calls them at once. Off by
		 * default.
		 */
		public get CallOnRelease(): boolean
		public set CallOnRelease(value: boolean)
		/**
		 * Adds a hotkey driving this slider, exactly like "New Hotkey" in the row's
		 * context menu; it captures the slider's current value until edited. A
		 * toggle-mode hotkey swaps the slider between the stored value and the one
		 * it had before; a hold-mode one restores the previous value on release.
		 * Hotkeys persist in the config, so call it on a user action rather than on
		 * every script load — each call adds another hotkey.
		 * @example
		 * const boost = fov.AddHotkey("F", "hold")
		 * boost.Value = 120
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<number>
		/** The hotkeys riding this slider, in creation order. */
		public get Hotkeys(): HotkeyHandle<number>[]
		/**
		 * Adds a logic rule driving this slider, exactly like "New logic" in the
		 * row's context menu; it captures the slider's current value until edited.
		 * Rules persist in the config, so call it on a user action rather than on
		 * every script load — each call adds another rule.
		 * @example
		 * const earlyGame = fov.AddLogic("before", 5 * 60)
		 * earlyGame.Value = 120
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<number>
		/** The logic rules riding this slider, in creation order. */
		public get Logic(): LogicHandle<number>[]
		/**
		 * Gives the slider a logic rule of its own, as {@link Toggle.AddDefaultLogic} does a switch.
		 * `value` is clamped and rounded like the slider's own.
		 * @example
		 * fov.AddDefaultLogic("before", 5 * 60, 120)
		 */
		public AddDefaultLogic(when: LogicWhen, at: number, value: number): Slider
	}
	interface Slider extends Handle<SliderEntry> {}
	/**
	 * A span picked on one rail with two thumbs, for a setting that is a stretch of values rather
	 * than one: a delay drawn anew each time from between its ends, a band a reading has to fall in.
	 * Each end is rounded to the precision and kept in the range, and the low end never passes the
	 * high one - drag a thumb into the other and the two meet. Its value is saved as the pair.
	 * @example
	 * const reaction = tab.AddRangeSlider("Reaction (ms)", 150, 250, 0, 500)
	 * const delay = Math.randomRange(reaction.low, reaction.high) / 1000
	 */
	class RangeSlider implements Handle<RangeEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** A unit written after each end's number, localized like a label. */
		public get Suffix(): string
		public set Suffix(value: string)
		/** The low end of the rail. */
		public get min(): number
		/** The high end of the rail. */
		public get max(): number
		/** The distance between two values the thumbs can stand on. */
		public get step(): number
		/** The low end of the span. Set past the high end, the two swap. */
		public get low(): number
		public set low(value: number)
		/** The high end of the span. Set below the low end, the two swap. */
		public get high(): number
		public set high(value: number)
		/** Sets both ends at once, taken the right way round whichever order they come in. */
		public Set(low: number, high: number): void
		/** The low end this span was declared with. {@link ResetToDefault} puts it back. */
		public get defaultLow(): number
		/** The high end this span was declared with. {@link ResetToDefault} puts it back. */
		public get defaultHigh(): number
		/**
		 * Calls `callback` every time either end moves, and once right away unless
		 * {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: RangeSlider) => void): RangeSlider
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): RangeSlider
	}
	interface RangeSlider extends Handle<RangeEntry> {}
	/** A choice of one option from a list, saved as the option's index. */
	class Dropdown implements Handle<DropdownEntry> {
		/** Not read by the menu: setting it has no effect. */
		public KeepArrowGap: boolean
		public IsDefault(): boolean
		public ResetToDefault(): void
		/**
		 * Index of the selected option in {@link values}. A set lands on {@link HoldOption} while one
		 * is held and is otherwise kept within the list; one that changes the selection runs the
		 * {@link OnValue} callbacks.
		 */
		public get SelectedID(): number
		public set SelectedID(next: number)
		/**
		 * The option the dropdown is pinned to, or nothing while it is free. Pinned, it takes the
		 * option at once and every later set lands on it, and the row reads as locked by Safe mode.
		 */
		public get HoldOption(): Nullable<number>
		public set HoldOption(value: Nullable<number>)
		/** Which option this dropdown was declared with. {@link ResetToDefault} puts it back. */
		public get defaultValue(): number
		/** The options, in order: the live array, so change them through {@link SetOptions}. */
		public get values(): string[]
		/**
		 * The same as {@link values}.
		 * @deprecated the options are {@link values}
		 */
		public get ValuesNames(): string[]
		/**
		 * Replaces the options offered, for a list discovered at runtime rather than declared.
		 * The selection stays on the option it was on where that option survives.
		 * @example
		 * players.SetOptions(["Automatic", ...sources])
		 */
		public SetOptions(values: string[]): Dropdown
		/**
		 * Rides an image on each option, given in the order the options were, so a list of things with
		 * faces is picked from by the face. An option whose entry is empty keeps its name alone.
		 * @example
		 * hero.SetOptionIcons(names.map(name => `${PathData.HeroIconsPath}/${name}_png.vtex_c`))
		 */
		public SetOptionIcons(icons: readonly string[]): Dropdown
		/** The images riding the options, or nothing where the list is names alone. */
		public get optionIcons(): string[]
		/**
		 * Rides a small icon on the corner of each option's card in the `"cards"` {@link Layout}, given
		 * in the order the options were, to mark what an option can do that its picture does not show.
		 * An option whose entry is empty carries no mark.
		 * @example
		 * models.SetOptionMarks(models.values.map(name => (tintable.has(name) ? "menu/ui/palette.svg" : "")))
		 */
		public SetOptionMarks(marks: readonly string[]): Dropdown
		/** The icons marking the options' cards, or nothing where no option carries one. */
		public get optionMarks(): string[]
		/**
		 * How the options are offered: `"list"` opens them in a popover from the row, `"cards"` lays
		 * them out under the row as picture cards drawn from {@link SetOptionIcons}, each picked with
		 * one click. Cards suit a short list of things told apart by their looks.
		 * @example
		 * models.SetOptionIcons(models.values.map(name => `images/models/${name}.png`))
		 * models.Layout = "cards"
		 */
		public get Layout(): DropdownLayout
		public set Layout(value: DropdownLayout)
		/**
		 * Calls `callback` every time the selection changes or {@link SetOptions} changes the
		 * options, and once right away unless {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: Dropdown) => void): Dropdown
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Dropdown
		/**
		 * Rides colour pickers on one option's row, which is where a per-option colour belongs
		 * instead of in a row of its own further down the node.
		 * @example
		 * const team = node.AddDropdown("Show on", ["Enemies", "Allies"], 0)
		 * team.PairColors(0, node.AddColorPicker("Enemy color", new Color(227, 61, 61)))
		 */
		public PairColors(option: number | string, ...pickers: ColorPicker[]): Dropdown
		/**
		 * The colour pickers {@link PairColors} put on `option`, given by index or by name, in the
		 * order they were paired; empty for none.
		 */
		public PairedColors(option: number | string): ColorPicker[]
		/**
		 * Adds a hotkey driving this dropdown, exactly like "New Hotkey" in the
		 * row's context menu; it captures the currently selected option until
		 * edited. A toggle-mode hotkey swaps the selection between the stored
		 * option and the one before; a hold-mode one restores the previous option
		 * on release. Hotkeys persist in the config, so call it on a user action
		 * rather than on every script load — each call adds another hotkey.
		 * @example
		 * const legit = mode.AddHotkey("F2")
		 * legit.Value = "Legit"
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<string>
		/** The hotkeys riding this dropdown, in creation order. */
		public get Hotkeys(): HotkeyHandle<string>[]
		/**
		 * Adds a logic rule driving this dropdown, exactly like "New logic" in the
		 * row's context menu; it captures the selected option until edited. Rules
		 * persist in the config, so call it on a user action rather than on every
		 * script load — each call adds another rule.
		 * @example
		 * const lateGame = mode.AddLogic("after", 10 * 60)
		 * lateGame.Value = "Legit"
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<string>
		/** The logic rules riding this dropdown, in creation order. */
		public get Logic(): LogicHandle<string>[]
		/**
		 * Gives the dropdown a logic rule of its own, as {@link Toggle.AddDefaultLogic} does a switch.
		 * `value` is the option the rule selects; one the dropdown does not have adds nothing.
		 * @example
		 * mode.AddDefaultLogic("after", 10 * 60, "Legit")
		 */
		public AddDefaultLogic(when: LogicWhen, at: number, value: string): Dropdown
	}
	interface Dropdown extends Handle<DropdownEntry> {}
	/**
	 * A list of options, any number of them ticked. Ticks are kept by option name, so reordering or
	 * replacing the options does not move them.
	 */
	class MultiSelect implements Handle<MultiSelectEntry> {
		/** Not read by the menu: setting it has no effect. */
		public KeepArrowGap: boolean
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Which options this list was declared with. {@link ResetToDefault} puts them back. */
		public get defaultValue(): string[]
		/** The options, in order: the live array, so change them through {@link SetOptions}. */
		public get values(): string[]
		/** Selection aligned to `values`, which is the shape a caller usually folds. */
		public get SelectedFlags(): boolean[]
		/** Indices in {@link values} of the ticked options, in order. */
		public get SelectedIDs(): number[]
		/**
		 * The ticked options, in the order of {@link values}. Setting it ticks exactly the options
		 * named; a name that is no option is ignored.
		 */
		public get SelectedNames(): string[]
		public set SelectedNames(next: string[])
		/**
		 * Replaces the options offered, for a list discovered at runtime rather than declared.
		 * The ticks stay on the names they were on, including names that have just gone away,
		 * so an option that comes back comes back chosen.
		 * @example
		 * players.SetOptions(sources)
		 */
		public SetOptions(values: string[]): MultiSelect
		/** Whether the option at index `id` of {@link values} is ticked; `false` out of range. */
		public IsSelected(id: number): boolean
		/** Ticks or unticks the option at index `id` of {@link values}; out of range does nothing. */
		public Select(id: number, selected: boolean): void
		/**
		 * Calls `callback` every time an option is ticked or unticked or {@link SetOptions} changes the
		 * options, and once right away unless {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: MultiSelect) => void): MultiSelect
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): MultiSelect
		/**
		 * Adds a hotkey driving this multiselect, exactly like "New Hotkey" in the
		 * row's context menu; it captures the currently selected options until
		 * edited. A toggle-mode hotkey swaps the selection with the previous one;
		 * a hold-mode one restores the previous selection on release.
		 * @example
		 * const enemies = audience.AddHotkey("F3", "hold")
		 * enemies.Value = ["Enemies"]
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<string[]>
		/** The hotkeys riding this multiselect, in creation order. */
		public get Hotkeys(): HotkeyHandle<string[]>[]
		/**
		 * Adds a logic rule driving this multiselect, exactly like "New logic" in
		 * the row's context menu; it captures the selected options until edited.
		 * @example
		 * const lateGame = audience.AddLogic("after", 5 * 60)
		 * lateGame.Value = ["Enemies"]
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<string[]>
		/** The logic rules riding this multiselect, in creation order. */
		public get Logic(): LogicHandle<string[]>[]
		/**
		 * Gives the multiselect a logic rule of its own, as {@link Toggle.AddDefaultLogic} does a
		 * switch. `value` lists the options the rule selects; one the multiselect does not have adds
		 * nothing.
		 * @example
		 * audience.AddDefaultLogic("after", 5 * 60, ["Enemies"])
		 */
		public AddDefaultLogic(when: LogicWhen, at: number, value: string[]): MultiSelect
		/**
		 * Rides colour pickers on one option's row, which is where a per-option colour belongs
		 * instead of in a row of its own further down the node.
		 * @example
		 * const team = node.AddMultiSelect("Show on", ["Enemies", "Allies"], ["Enemies"])
		 * team.PairColors(
		 * 	"Enemies",
		 * 	node.AddColorPicker("Visible", new Color(61, 181, 106)),
		 * 	node.AddColorPicker("Behind cover", new Color(227, 61, 61))
		 * )
		 */
		public PairColors(option: number | string, ...pickers: ColorPicker[]): MultiSelect
		/**
		 * The colour pickers {@link PairColors} put on `option`, given by index or by name, in the
		 * order they were paired; empty for none.
		 */
		public PairedColors(option: number | string): ColorPicker[]
	}
	interface MultiSelect extends Handle<MultiSelectEntry> {}
	/**
	 * A key bind: one key, or a combination of two, that the user picks and the script hears pressed
	 * and released.
	 */
	class Keybind implements Handle<KeybindEntry> {
		/** Runtime active state shown in Hotkeys. Set undefined to follow the physical key again. */
		public get HotkeysActive(): boolean | undefined
		public set HotkeysActive(value: boolean | undefined)
		public IsDefault(): boolean
		public ResetToDefault(): void
		/**
		 * Whether the bind also answers a press while the menu is open, outside a game, or while the
		 * game has the keyboard for a chat box or a console. Off by default.
		 */
		public get ActivatesInMenu(): boolean
		public set ActivatesInMenu(value: boolean)
		/**
		 * Whether a press this bind answers is taken from the game. Off by default; enable it
		 * to reserve this key for the menu action. Saved with the bind.
		 * @example
		 * this.HoldKey = tree.AddKeybind("Hold Key", "F3")
		 * this.HoldKey.ClaimsKey = true
		 */
		public get ClaimsKey(): boolean
		public set ClaimsKey(value: boolean)
		/**
		 * Name of the bind declared as the default: one key as `SharedSDK.KeyNames` spells it, or a
		 * combination such as `"Ctrl + F"`. Setting it sets {@link defaultKeyIdx} to that bind and
		 * leaves the key bound now as it is.
		 */
		public get defaultKey(): string
		public set defaultKey(value: string)
		/**
		 * The bind a reset returns to, as a number like {@link assignedKey}. {@link defaultKey} sets
		 * it from a key name.
		 */
		public get defaultKeyIdx(): number
		public set defaultKeyIdx(value: number)
		/**
		 * The mode the bind is declared with: set, its row offers a Hold/Toggle switch left of the
		 * key, the player's pick is saved with the bind, and a reset returns to this one. Undefined -
		 * no mode and no switch. The bind reports presses and releases in either mode; {@link Mode}
		 * says how the script should read them.
		 * @example
		 * this.FarmKey = tree.AddKeybind("Farm key", "")
		 * this.FarmKey.defaultMode = "hold"
		 * this.FarmKey.OnPressed(() => (this.FarmKey.Mode === "toggle" ? this.Flip() : this.Start()))
		 * this.FarmKey.OnRelease(() => this.FarmKey.Mode === "hold" && this.Stop())
		 */
		public get defaultMode(): Nullable<HotkeyMode>
		public set defaultMode(value: Nullable<HotkeyMode>)
		/**
		 * The mode the player picked on the bind's switch, or nothing while it has no
		 * {@link defaultMode}. Setting it is a change of the player's: saved, and heard by the value
		 * listeners.
		 */
		public get Mode(): Nullable<HotkeyMode>
		public set Mode(value: HotkeyMode)
		/**
		 * The bind as a name: `"Ctrl + F"` for a combination, `"F"` for one key, `"None"` while
		 * unbound. Set, it takes a name of the same form, each key as `SharedSDK.KeyNames` spells
		 * it; a name it cannot read leaves the bind with no key.
		 */
		public get assignedKeyStr(): string
		public set assignedKeyStr(value: string)
		/**
		 * Shows the capture popup affordance that assigns the left mouse button.
		 * On by default; turn it off where a click is not a sensible trigger.
		 */
		public get AllowLeftMouse(): boolean
		public set AllowLeftMouse(value: boolean)
		/**
		 * Permits recording a two-key combination in the capture popup.
		 * On by default.
		 */
		public get AllowCombinations(): boolean
		public set AllowCombinations(value: boolean)
		/** The same as {@link assignedKey}. */
		public get ConfigValue(): number
		public set ConfigValue(value: number)
		/** {@link OnValue} for the changes that leave the bind pressed. */
		public OnPressed(callback: (caller: Keybind) => void): Keybind
		/**
		 * The bind as a number: 0 while unbound, a key's `SharedSDK.VKeys` code for one key, and
		 * `first * 256 + second` for a combination. A set that changes it runs the {@link OnValue}
		 * callbacks.
		 */
		public get assignedKey(): number
		public set assignedKey(next: number)
		/**
		 * Whether the bind is down: set by a press it answers, cleared when its key, or either key of
		 * its combination, comes up.
		 */
		public get isPressed(): boolean
		/**
		 * Calls `callback` every time the bind is pressed, released, rebound or switched to another
		 * {@link Mode}, and once right away unless {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: Keybind) => void): Keybind
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Keybind
		/** Calls `callback` every time the bind goes from pressed to released. */
		public OnRelease(callback: (caller: Keybind) => void): Keybind
	}
	interface Keybind extends Handle<KeybindEntry> {}
	/** A button that runs its {@link OnValue} callbacks when pressed. It holds no value to save. */
	class Button implements Handle<ButtonEntry> {
		public executeOnAdd: boolean
		/** Visual emphasis used to distinguish primary, neutral, quiet and destructive actions. */
		public get Variant(): ButtonVariant
		public set Variant(value: ButtonVariant)
		/** Height and spacing scale of the button. */
		public get Size(): ButtonSize
		public set Size(value: ButtonSize)
		/**
		 * Calls `callback` every time the button is pressed or {@link Trigger} is called; never at
		 * the moment it is added.
		 */
		public OnValue(callback: (caller: Button) => void): Button
		/** Runs the {@link OnValue} callbacks, as a press does. */
		public Trigger(): void
	}
	interface Button extends Handle<ButtonEntry> {}
	/** A colour control: one colour, a gradient between two, or a rainbow, as {@link Mode} says. */
	class ColorPicker implements Handle<ColorEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/**
		 * The colour this picker stands for right now: its own, the one it {@link Follows} while
		 * untouched, the first colour of its gradient, or where its rainbow has walked to at this
		 * moment. An owner that draws every frame reads it every frame and gets the rainbow for
		 * free; one that reads it once, on change, sees a single moment of it and should call
		 * {@link SolidOnly}. An owner that can paint a gradient across its surface reads
		 * {@link ColorAt} or {@link GradientColors} instead.
		 */
		public get SelectedColor(): Color
		public set SelectedColor(next: Color)
		/** How the colour is made: one colour, a gradient between two, or a hue walking the circle. */
		public get Mode(): ColorMode
		public set Mode(next: ColorMode)
		/**
		 * The two ends of the gradient, as declared: the first is {@link SelectedColor} while the
		 * picker is solid, and the seed a rainbow walks from. For an owner that paints a gradient
		 * across its surface, from the first colour at one edge to the second at the other.
		 */
		public get GradientColors(): [Color, Color]
		/** Sets the far end of the gradient, the second of {@link GradientColors}. */
		public set SecondColor(next: Color)
		/**
		 * The colour at one point along the surface, 0 at its start and 1 at its end: the gradient
		 * blended that far, or the one colour a solid or a rainbow has everywhere. What a bar or a
		 * run of text asks per segment.
		 */
		public ColorAt(at: number): Color
		/** How long a rainbow takes to come back round, in seconds. */
		public get Period(): number
		public set Period(next: number)
		/** Where a rainbow stands in its walk right now, 0 to 1. */
		public get Phase(): number
		/**
		 * Keeps the palette to one colour: no gradient, no rainbow. For a picker whose owner reads
		 * the colour once, on change, where an animation would only ever show its first frame.
		 */
		public SolidOnly(): ColorPicker
		/**
		 * Keeps the palette to one colour or a rainbow: no gradient. For a picker whose owner paints
		 * one colour at a time, the way a picture is tinted or a line is drawn, where a gradient
		 * would only ever show its first colour.
		 */
		public NoGradient(): ColorPicker
		/** The colour this picker was declared with. {@link ResetToDefault} puts it back. */
		public get defaultColor(): Color
		/**
		 * Points this picker at a live colour for as long as nobody has touched it: the swatch shows
		 * `ink` and {@link SelectedColor} answers with it, so a card that draws in the theme's own ink
		 * until it is given a colour of its own says as much on its row.
		 *
		 * The declared default stays the literal it was declared with — it is what a config is
		 * compared against, and one that moved with the theme would make the same config read
		 * differently on two machines.
		 *
		 * @example
		 * node.AddColorPicker("Color", HudColorOf(DefaultPalette.TextDisabled)).Follows(
		 *     () => HudColors.faint
		 * )
		 */
		public Follows(ink: () => Color): ColorPicker
		/**
		 * Sets the colour, which is the first end of a gradient and the seed of a rainbow, and returns
		 * the picker. `color` is kept as given, not copied.
		 */
		public SetColor(color: Color): ColorPicker
		/**
		 * Whether the value listeners wait for the hand to let go: on, a drag across the palette
		 * reports the colour it ends on rather than every one it passes through, and a change made
		 * any other way reports at once. For an owner whose work per colour is dear - a glyph effect
		 * baked into the font atlas per colour.
		 */
		public get CallOnRelease(): boolean
		public set CallOnRelease(value: boolean)
		/**
		 * Calls `callback` every time a colour, the mode or the period changes, and once right away
		 * unless {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: ColorPicker) => void): ColorPicker
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): ColorPicker
	}
	interface ColorPicker extends Handle<ColorEntry> {}
	/** A text field. A reset empties it. */
	class TextInput implements Handle<TextEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** The text in the field. A set that changes it runs the {@link OnValue} callbacks. */
		public get text(): string
		public set text(next: string)
		/**
		 * Calls `callback` every time the text changes, and once right away unless
		 * {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: TextInput) => void): TextInput
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): TextInput
	}
	interface TextInput extends Handle<TextEntry> {}
	/**
	 * A list of short strings the user edits in the row itself: a field with an Add button, and a
	 * row per string with its own remove control. Values are trimmed, cut at {@link MaxLength} and
	 * kept unique; the list stops growing at {@link MaxItems}. A script that keeps the list
	 * somewhere of its own turns {@link SaveConfig} off and writes {@link values} back itself.
	 * @example
	 * const messages = node.AddTextList("Messages", defaults, "Sent after a kill", 0, "Type a message", 80)
	 * messages.SaveConfig = false
	 * messages.OnValue(list => this.store(list.values))
	 */
	class TextList implements Handle<ListEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** The list as it stands. The array is replaced on every change and never mutated in place. */
		public get values(): readonly string[]
		public set values(next: readonly string[])
		/** The longest string the list takes; what is typed past it is cut. */
		public get MaxLength(): number
		/** How many strings the list holds before the field stops adding. */
		public get MaxItems(): number
		/** Appends one string; false when it is empty once trimmed, already there, or the list is full. */
		public Add(text: string): boolean
		/** Removes the string at `index` of {@link values}; an index out of range does nothing. */
		public Remove(index: number): void
		/**
		 * Calls `callback` every time the list changes, and once right away unless
		 * {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: TextList) => void): TextList
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): TextList
	}
	interface TextList extends Handle<ListEntry> {}
	/**
	 * A line of text among a node's rows, holding no value: a note from
	 * {@link Node.AddShortDescription} or a heading from {@link Node.AddSectionHeader}.
	 */
	class ShortDescription implements Handle<DescriptionEntry> {
		/** Whether the note's row is drawn highlighted. */
		public get Selected(): boolean
		public set Selected(value: boolean)
		/**
		 * Puts a button labelled `label` at the end of the note, and makes a click anywhere on the row
		 * press it, for a row that names what is missing and can set it right. `undefined` takes the
		 * button away.
		 * @example
		 * const note = node.AddShortDescription("Required humanizer")
		 * note.SetAction("Enable", () => Humanizer.RequestEnable())
		 */
		public SetAction(label: Nullable<string>, run?: () => void): ShortDescription
		/**
		 * Where the thing the note names stands: a short word at the end of the note, coloured by its
		 * `tone` and set before the button when there is one, and with a `detail`, a line under the
		 * note saying why. `undefined` takes both away.
		 * @example
		 * row.Status = fits
		 * 	? { text: "Will answer", tone: "good" }
		 * 	: { text: "Won't answer", tone: "bad", detail: "Its card spends it on nothing" }
		 */
		public get Status(): Nullable<DescriptionStatus>
		public set Status(value: Nullable<DescriptionStatus>)
	}
	interface ShortDescription extends Handle<DescriptionEntry> {}
	/**
	 * A row of image tiles, each turned on or off by a click and, when {@link ImageSelector.Draggable},
	 * dragged into an order.
	 */
	class ImageSelector implements Handle<ImagesEntry> {
		/**
		 * How a tile is shaped: `"square"`, the default, as wide as its image up to a cap; `"item"` as
		 * wide as its image; `"hero"` 16:9; `"circle"` round.
		 */
		public get Variant(): ImageVariant
		public set Variant(value: ImageVariant)
		/** Whether the user can drag the tiles into another order, which the config then keeps. */
		public get Draggable(): boolean
		public set Draggable(value: boolean)
		/**
		 * A switch at the end of the row's title line, for a selection that is itself something to
		 * turn on and off. The toggle gives up a row of its own: it flips from the title, takes its
		 * hotkeys and rules from the row's context menu, and is listed under the row's name. While
		 * it is off the tiles go grey, the way a page's rows do under its {@link Node.Gate}.
		 * @example
		 * const items = node.AddImageSelector("Pick up items", names)
		 * items.HeaderControl = node.AddToggle("Pick up items state", true)
		 */
		public get HeaderControl(): Nullable<Toggle>
		public set HeaderControl(value: Nullable<Toggle>)
		/** Moves a tile to another slot, exactly like a user drag would. */
		public MoveImage(from: number, to: number): void
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Whether none of the tiles of {@link values} is on, as {@link IsEnabled} reads them. */
		public IsZeroSelected(): boolean
		/**
		 * The tiles' values in their current order. Setting it lays the tiles out anew: one that stays
		 * keeps its state, a new one starts at the `createdDefaultState` given to
		 * {@link Node.AddImageSelector}, and one left out keeps its state for a list that names it
		 * again - a filter hides tiles, it does not forget them. A reset puts back the declared states,
		 * not the ones the tiles hold at the assignment. {@link RemoveImage} forgets a tile for good.
		 */
		public get values(): string[]
		public set values(next: string[])
		public get enabledValues(): Map<string, boolean>
		/** Replaces the whole selection, for a script restoring one it saved itself. */
		public set enabledValues(next: Map<string, boolean> | [string, boolean][])
		/**
		 * The sections the picker's browse modal lists. Handing a catalogue over turns the row into
		 * the chosen tiles and a button that opens the modal, which is what keeps a picker with a
		 * whole shop behind it one row tall. Setting it lays every value out as a tile and keeps
		 * whatever is already chosen.
		 * @example
		 * picker.Catalogue = [{ title: "Weapon", accent: "#e0a44b", values: weaponItems }]
		 */
		public get Catalogue(): readonly CatalogueSection[]
		public set Catalogue(next: readonly CatalogueSection[])
		/**
		 * Tiles the grid leaves out for now, for values that do not apply at the moment — the
		 * abilities of a hero nobody in the match plays. A hidden tile keeps its place in the order,
		 * its state and its config, and comes back where it stood once it leaves the set.
		 * @example
		 * abilities.HiddenValues = new Set(absent)
		 */
		public get HiddenValues(): ReadonlySet<string>
		public set HiddenValues(next: ReadonlySet<string>)
		/** The selection as the config carries it. Same state as {@link enabledValues}. */
		public get ConfigValue(): Map<string, boolean>
		public set ConfigValue(next: Map<string, boolean> | [string, boolean][])
		/** Whether the tile `value` is on; `false` for a value the selector holds no state for. */
		public IsEnabled(value: string): boolean
		/** Turns the tile `value` on or off, as a click on it does. */
		public SetEnabled(value: string, on: boolean): void
		/**
		 * Adds a tile after the selector was built, e.g. an ability the game only now revealed: with the
		 * state and place the config kept for it, `enabled` at the end for a tile it has never seen.
		 */
		public AddImage(value: string, enabled?: boolean): ImageSelector
		/**
		 * Forgets tile `value` for good - a tile of an ability the data no longer knows: it leaves the
		 * row, its state goes, and the config stops naming it. Setting {@link values} without it keeps
		 * its state instead.
		 * @example
		 * plan.values.filter(name => !known(name)).forEach(name => plan.RemoveImage(name))
		 */
		public RemoveImage(value: string): ImageSelector
		/** Where a tile sits in the current order, which is what a drag rearranges. */
		public GetPriority(value: string): number
		/**
		 * Calls `callback` every time a tile is turned on or off or moved, on a reset, when a config
		 * brings in a different selection, and once right away unless {@link executeOnAdd} is off. A
		 * set of {@link values} or {@link enabledValues} changes the tiles without calling it.
		 */
		public OnValue(callback: (caller: ImageSelector) => void): ImageSelector
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): ImageSelector
	}
	interface ImageSelector extends Handle<ImagesEntry> {}
	/**
	 * A preset selector: its row shows the chosen preset and opens a panel listing a permanent base
	 * preset above the user's own. Presets are added, renamed and removed in the panel, and every
	 * one beyond the base claims values from {@link Catalogue} — each value belonging to at most
	 * one preset, so the base stands for whatever no other claims.
	 */
	class PresetSelector implements Handle<PresetsEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Heading of the row's panel where it should differ from the row's own name. */
		public get PanelTitle(): string
		public set PanelTitle(value: string)
		/**
		 * Why the selector refuses a click while {@link IsDisabled} is set — for a selection a rule
		 * of the script makes on the user's behalf, so the chip that answers no click says what to
		 * do instead: a first line, and past a line break the way out. Shown on hover, with a lock
		 * in place of the chip's chevrons.
		 * @example
		 * presets.DisabledReason = "Following the weapon in hand\nSwitch weapon, or turn following off"
		 */
		public get DisabledReason(): string
		public set DisabledReason(value: string)
		/**
		 * The sections the panel's value picker offers, one row per value with its image and label.
		 * @example
		 * presets.Catalogue = [{ title: "Rifles", values: [{ value: icon, label: "AK-47" }] }]
		 */
		public get Catalogue(): readonly CatalogueSection[]
		public set Catalogue(next: readonly CatalogueSection[])
		/**
		 * Every preset, the permanent base always first. Each carries the stable id a script keys
		 * per-preset state of its own by. Treat as read-only — the selector owns the structure.
		 */
		public get Presets(): readonly PresetGroup[]
		/**
		 * Index of the selected preset in {@link Presets}, 0 being the base. A set out of range lands
		 * on the nearest preset; one that changes the selection runs the {@link OnValue} callbacks.
		 */
		public get SelectedID(): number
		public set SelectedID(next: number)
		/** The preset the panel has selected, which is the one a script should be editing. */
		public get Selected(): PresetGroup
		/** The preset claiming `value`, or nothing while no preset does — the base covers it then. */
		public OwnerOf(value: string): Nullable<PresetGroup>
		/**
		 * Replaces every preset beyond the base and the selection in one write, for a script
		 * restoring state it saved itself. Every group is given a fresh id — read them back off
		 * {@link Presets} after the call.
		 * @example
		 * presets.Load([{ name: "Rifles", values: rifleIcons }], 1)
		 */
		public Load(groups: readonly {
			name: string
			values: readonly string[]
		}[], selected?: number): PresetSelector
		/**
		 * Calls `callback` every time the selection or the presets change, and once right away unless
		 * {@link executeOnAdd} is off.
		 */
		public OnValue(callback: (caller: PresetSelector) => void): PresetSelector
		/**
		 * Carries one preset's settings over to another, for the Copy settings / Paste settings rows
		 * of the panel's right-click menu. Registering a listener is what puts those rows there: the
		 * selector owns the presets, the script owns what a preset means, so only the script can move
		 * the meaning. The values a preset claims stay where they are.
		 * @example
		 * presets.OnCopySettings((from, to) => byId.set(to.id, byId.get(from.id)!.Clone()))
		 */
		public OnCopySettings(callback: (from: PresetGroup, to: PresetGroup) => void): PresetSelector
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): PresetSelector
	}
	interface PresetSelector extends Handle<PresetsEntry> {}
	/**
	 * A node of the menu tree, holding controls and other nodes. Under {@link Menu} it is a tab;
	 * deeper it stands as a page, a card or a row, as its place and its settings decide.
	 */
	class Node implements Handle<NodeEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Handles of the node's children, in order, made anew on every read. */
		public get entries(): AnyHandle[]
		/**
		 * Runs the callback whenever any control under this node changes - for a script that rebuilds
		 * the same thing no matter which setting moved. Covers the controls the node holds when it is
		 * called, so declare the page first and hang this off the end. Fires once on subscription
		 * itself rather than once per covered control.
		 * @example
		 * const page = tree.AddNode("Panel")
		 * page.AddToggle("State", true)
		 * page.OnValue(() => this.Rebuild())
		 */
		public OnValue(callback: (caller: Node) => void): Node
		/**
		 * Whether the node is open: shown, marked open, and with every node above it open. Setting it
		 * opens or closes the node; opening a tab, or a page of a tab, closes the ones beside it.
		 */
		public get IsOpen(): boolean
		public set IsOpen(value: boolean)
		/** Whether the node itself is marked open, whatever its visibility and the nodes above it. */
		public get IsOpenStored(): boolean
		/**
		 * Whether this node's card can be folded by clicking its header. Off on a page, it also
		 * pins the page's own General card open.
		 */
		public get Collapsible(): boolean
		public set Collapsible(value: boolean)
		/**
		 * Whether each child node is a unit of its own when settings are picked out of a config or
		 * copied into another: a hero of a hero list rather than the whole list. Off by default.
		 * @example
		 * const heroes = MenuSDK.Menu.AddEntry("Heroes")
		 * heroes.ConfigCollection = true
		 */
		public get ConfigCollection(): boolean
		public set ConfigCollection(value: boolean)
		/**
		 * Which config the settings under the node are kept in: `"config"`, the scripts' one, or
		 * `"changer"`, the changer's, which a player switches and shares apart from it. A node takes
		 * its parent's when created; setting it moves the entries under it that had the node's.
		 * @example
		 * const changer = MenuSDK.Menu.AddEntry("Changer")
		 * changer.Document = "changer"
		 */
		public get Document(): EntryDocument
		public set Document(value: "config" | "changer")
		/**
		 * Whether the menu is showing this node's page right now. A panel that belongs to a page —
		 * a preview of what it configures — has no business on screen while another page is open.
		 */
		public get IsActivePage(): boolean
		/**
		 * Whether this node's rows are open in their settings popover right now: the node
		 * {@link AddSubSettings} returned, or a tile's node under {@link AddTileSettings}, while its
		 * popover is on screen. A preview of what those rows set belongs on screen exactly then.
		 * @example
		 * const options = page.AddSubSettings(fov)
		 * if (options.IsSettingsOpen) {
		 * 	drawFieldOfView()
		 * }
		 */
		public get IsSettingsOpen(): boolean
		/**
		 * The tab this page is showing, for a page whose children are tabs, or the general tab a
		 * top-level tab's General page is showing (see {@link GeneralTab}) — nothing for any other.
		 * A panel that belongs to one tab has no business on screen while another is open.
		 */
		public get ActiveTab(): Nullable<Node>
		/** Sets {@link IsOpenStored} alone: no other node is closed and the menu is not redrawn. */
		public SetOpenRaw(value: boolean): void
		/**
		 * Whether the node keeps its children sorted: a control named `"State"` first, then by
		 * {@link Priority}, then by kind, then by name. On by default; off, the children keep the
		 * order they have and a child added later goes last.
		 */
		public get SortNodes(): boolean
		public set SortNodes(value: boolean)
		/** Corner radius of the node's icon, in dp; the default, -1, leaves the corners to the menu. */
		public get IconRound(): number
		public set IconRound(value: number)
		/**
		 * Name of the page pinned above this tab's list of pages, under {@link PinnedLabel}, such as
		 * the hero being played. Setting it opens that page if the tab has it; `""` pins none.
		 */
		public get PinnedName(): string
		public set PinnedName(value: string)
		/** Heading written in capitals over the page {@link PinnedName} pins; `""` leaves it blank. */
		public get PinnedLabel(): string
		public set PinnedLabel(value: string)
		/**
		 * Heading of this tab's page panel when it should differ from the tab
		 * itself, e.g. a rail tab "ESP" whose panel reads "Visuals".
		 */
		public get SubLabel(): string
		public set SubLabel(value: string)
		/**
		 * Icon of this tab's General entry in the navigation column, and of the card heading its own
		 * rows on its page, when it should differ from the home glyph every tab shares; empty keeps it.
		 * @example
		 * const heroes = MenuSDK.Menu.AddEntry("Heroes")
		 * heroes.GeneralIcon = MenuSDK.MenuIcons.Settings
		 */
		public get GeneralIcon(): string
		public set GeneralIcon(value: string)
		/** Gives this tab's list of pages a search field showing this text; `""` for no field. */
		public get SearchPlaceholder(): string
		public set SearchPlaceholder(value: string)
		/**
		 * Filter chips for this tab's list of pages, one per group: turning a chip off hides the pages
		 * whose {@link FilterGroup} is that group's `id`.
		 */
		public get FilterGroups(): MenuFilterGroup[]
		public set FilterGroups(value: MenuFilterGroup[])
		/**
		 * Lists this node's pages under one heading per {@link FilterGroups} entry, in the
		 * order the groups are declared, instead of as one flat list. A heading reads the
		 * group's tooltip; pages of no declared group stay on top under the node's own name.
		 * @example
		 * heroes.FilterGroups = [{ id: EHeroType.Gunner, icon, tooltip: "Gunner" }]
		 * heroes.GroupHeadings = true
		 */
		public get GroupHeadings(): boolean
		public set GroupHeadings(value: boolean)
		/**
		 * The `id` of the group of its tab's {@link FilterGroups} this page belongs to; `undefined`
		 * for none, which no chip hides.
		 */
		public get FilterGroup(): Nullable<number>
		public set FilterGroup(value: Nullable<number>)
		/**
		 * Whether the node's icon is tinted in the menu's colours. Off, it keeps its own, as a picture
		 * does. On by default.
		 */
		public get IconTint(): boolean
		public set IconTint(value: boolean)
		/**
		 * Width-to-height ratio of this node's icon in navigation rows and on the header of the card it
		 * stands as; `1` keeps the square default.
		 * @example
		 * const linken = tab.AddNode("Linken's Sphere", ImageData.GetItemTexture("item_sphere"), "", 3)
		 * linken.IconTint = false
		 * linken.IconAspectRatio = 88 / 64
		 */
		public get IconAspectRatio(): number
		public set IconAspectRatio(value: number)
		/** Not read by the menu: setting it has no effect. */
		public get IconGrayScale(): boolean
		public set IconGrayScale(value: boolean)
		/** Not read by the menu: setting it has no effect. */
		public get TextColor(): Nullable<Color>
		public set TextColor(value: Nullable<Color>)
		/**
		 * Fades this node's icon and name in the navigation list, marking a page to trust less than
		 * those around it, such as a hero a script plays without being sure of it. Pair it with a
		 * {@link Hint} saying why, which the page shows beside its title in the top bar.
		 * @example
		 * page.Muted = true
		 * page.Hint = { title: "May play wrong", text: "No module of its own for this hero yet" }
		 */
		public get Muted(): boolean
		public set Muted(value: boolean)
		/**
		 * Whether the node stands as a settings row whose button opens its controls in a popover,
		 * instead of as a page or a fold of rows. {@link AddSettings} makes such a node.
		 */
		public get Popover(): boolean
		public set Popover(value: boolean)
		/** Status glyphs before this node's settings button. An empty list hides them without replacing the main icon. */
		public get StatusIconPaths(): readonly string[]
		public set StatusIconPaths(value: readonly string[])
		/** Preferred popover width in dp. Undefined uses the compact default; the panel fits within the screen. */
		public get PopoverWidth(): Nullable<number>
		public set PopoverWidth(value: Nullable<number>)
		/**
		 * Whether this page shows its child pages as tabs along its top, one at a time; the open one
		 * is {@link ActiveTab}.
		 */
		public get TabbedChildren(): boolean
		public set TabbedChildren(value: boolean)
		/**
		 * Lays a top-level tab's child nodes out as collapsible section cards on the tab's own page,
		 * instead of listing them as sub-pages in the navigation column. Sections fold independently,
		 * and the tab's own rows stand in a General card above them.
		 * @example
		 * const tab = MenuSDK.Menu.AddEntry("Aimbot")
		 * tab.InlinePages = true
		 */
		public get InlinePages(): boolean
		public set InlinePages(value: boolean)
		/**
		 * Stands this child of a top-level tab as a tab along the top of the tab's General page instead
		 * of as a page in the navigation column, the way the children of a {@link TabbedChildren} page
		 * stand on theirs: the General page opens on its first general tab and keeps the one left
		 * open, and the tab's own rows stay in a card above the open general tab's cards. The General
		 * entry is listed while the tab has rows of its own or a visible general tab. On a tab that
		 * lays its pages out inline ({@link InlinePages}), or deeper in the tree, it does nothing.
		 * @example
		 * const heroes = MenuSDK.Menu.AddEntry("Heroes")
		 * heroes.AddShortDescription("Settings every hero shares")
		 * const items = heroes.AddNode("Items")
		 * items.GeneralTab = true
		 * const dodger = heroes.AddNode("Dodger")
		 * dodger.GeneralTab = true
		 */
		public get GeneralTab(): boolean
		public set GeneralTab(value: boolean)
		/**
		 * Lists this page of a top-level tab in the navigation column right under the General entry,
		 * on a row of its own like it, instead of among the tab's pages, where the search and the
		 * group headings do not reach it: for a page every entry of the tab shares. It applies only
		 * while the column shows General on top, as it does for a tab with a General page and a pinned
		 * page or a search; otherwise the page stays in the list.
		 * @example
		 * const heroes = MenuSDK.Menu.AddEntry("Heroes")
		 * const killSteal = heroes.AddNode("Kill steal")
		 * killSteal.BesideGeneral = true
		 */
		public get BesideGeneral(): boolean
		public set BesideGeneral(value: boolean)
		/**
		 * Stands this node as one row of its card: its child nodes as tiles under the title line and
		 * its {@link HeaderControl} switch at the end of it, for the same few settings repeated per
		 * thing, such as a key and a switch per spell. A tile shows its node's icon, the key of its
		 * first keybind on a corner badge, red while another tile has the same key, and the icons of
		 * its switches that are on in the other corner. A click captures the key; a right click opens
		 * the tile's keybinds and switches, the only rows a tile offers, with a reset of the tile.
		 * @example
		 * const spells = tab.AddNode("Spell by key")
		 * spells.Tiles = true
		 * spells.HeaderControl = spells.AddToggle("State", false)
		 * const tile = spells.AddNode("invoker_tornado", ImageData.GetSpellTexture("invoker_tornado"))
		 * tile.AddKeybind("Key", "").OnPressed(() => cast())
		 * tile.AddToggle("Only invoke", false, "", 0, invokeIcon)
		 */
		public get Tiles(): boolean
		public set Tiles(value: boolean)
		/**
		 * Stands this node as one row of its card, editing sequences of image steps the script keeps,
		 * such as a spell combo per tab: the tabs along the top with the one in use lit, its steps as
		 * tiles, a plus that lists what may be added, a bin that clears the tab, and the tab's key bind
		 * under them. A click on a tab puts it in use; a step is moved by a drag and taken out by a
		 * click or a drop on the bin. The row keeps nothing and hands every edit to the source. Pass
		 * the controls the sequences live in to {@link Host}; they leave their rows and reset with it.
		 * @example
		 * const combos = card.AddNode("Combos")
		 * combos.Sequences = source
		 * combos.Host(activeCombo, ...comboNodes)
		 */
		public get Sequences(): Nullable<SequenceSource>
		public set Sequences(value: Nullable<SequenceSource>)
		/**
		 * Takes controls off rows of their own for this row to stand for them - the ones a
		 * {@link Sequences} row edits, nodes too: they draw nowhere else and turn up in no search,
		 * keep their place in the config, reset with this row and mark it changed. Their key binds
		 * still fire, and the hotkeys list keeps them.
		 */
		public Host(...handles: {
			readonly entry: Entry
		}[]): Node
		/**
		 * Whether the node keeps what the config holds for children it does not have: a save writes
		 * those values back, and a control added later starts from its saved value. On by default.
		 */
		public get SaveUnusedConfigs(): boolean
		public set SaveUnusedConfigs(value: boolean)
		/**
		 * The control standing on the node's header instead of on a row among its children: on the
		 * top bar while the node is the page shown, and as a switch on its card's or fold's header or
		 * at the end of its settings row. While it is a switch that is off, everything under the node
		 * is drawn with a muted accent. A node is not taken: handing one clears it.
		 */
		public get HeaderControl(): Nullable<AnyHandle>
		public set HeaderControl(value: Nullable<AnyHandle>)
		/**
		 * The switch that turns this page on. While it is off, everything under the page is drawn with
		 * a muted accent and image tiles go grey, but nothing is locked and no value changes, so the
		 * page is as easy to set up as a running one. The switch itself keeps the accent.
		 * @example
		 * const general = page.AddNode("General")
		 * this.State = general.AddToggle("State", false)
		 * general.HeaderControl = this.State
		 * page.Gate = this.State
		 */
		public get Gate(): Nullable<Toggle>
		public set Gate(value: Nullable<Toggle>)
		/**
		 * A banner shown above the page while its {@link Gate} is off, with a button that turns the
		 * gate on. While it shows, the page's cards are dimmed and take no clicks, so give one only to
		 * a page with nothing to set up while it is off.
		 */
		public get DisabledNotice(): Nullable<DisabledNotice>
		public set DisabledNotice(value: Nullable<DisabledNotice>)
		/**
		 * Draws the node's body instead of its rows: the whole page of a page node, the body of the
		 * card a section node stands as, or the panel of a node opened from a settings gear
		 * ({@link AddSubSettings}). The rows stay declared and saved as usual, so a custom body can
		 * still lay any of them out through `RenderControl`.
		 */
		public get CustomPage(): Nullable<() => React.ReactNode>
		public set CustomPage(value: Nullable<() => React.ReactNode>)
		/**
		 * Lets a custom page consume the menu's Back command before it falls through to the shared
		 * navigation history. Return `true` after handling the action, or `false` to use history.
		 */
		public get BackAction(): Nullable<() => boolean>
		public set BackAction(value: Nullable<() => boolean>)
		/**
		 * Drops the top bar, with its history arrows and breadcrumb, over this node's pages and its
		 * children's, and gives its height to the page: for a tool whose pages carry their own
		 * navigation. The window still drags by its side column's header and by any bare stretch of
		 * the page, and Alt+← still runs the page's {@link BackAction}. A tab's {@link HeaderControl}
		 * switch, which the top bar would show, stands beside the tab's name in the side column.
		 * @example
		 * const changer = MenuSDK.Menu.AddEntry("Skin Changer", icon)
		 * changer.HideTopBar = true
		 */
		public get HideTopBar(): boolean
		public set HideTopBar(value: boolean)
		/**
		 * A popover of settings hanging off `host`: a row grows a button at its end, and the chip a
		 * page wears as its {@link HeaderControl} grows one beside it in the top bar, opening
		 * everything added to the node this returns. Named after the host by default; a name of its
		 * own heads the panel instead, and is what its rows are filed under in the config and in
		 * search. Settings of the header chip belong to no tab of the page, so no tab's gate greys them.
		 * @example
		 * const options = page.AddSubSettings(presets, "Weapon presets", "images/icons/crosshair.svg")
		 * options.AddToggle("Follow active weapon", false)
		 */
		public AddSubSettings(host: AnyHandle, name?: string, iconPath?: string): Node
		/**
		 * Settings of each tile of `host` of its own, in a popover off the tile: a node added to the
		 * node this returns, named after a tile's value, holds that tile's rows. The tile wears a mark
		 * in its corner while its node is shown, and the mark or a right click on the tile opens them,
		 * headed by the node's icon and the tile's name; the row grows no button. Filed in the config
		 * and in search under `name`, the way {@link AddSubSettings} files its rows.
		 * @example
		 * const items = card.AddImageSelector("Items", ["item_blink", "item_black_king_bar"])
		 * const terms = card.AddTileSettings(items, "Item settings")
		 * const bkb = terms.AddNode("item_black_king_bar", bkbTexture)
		 * bkb.AddSlider("Enemy heroes near", 1, 0, 5)
		 */
		public AddTileSettings(host: ImageSelector, name?: string, iconPath?: string): Node
		/**
		 * A settings row: `name` and a button that opens everything added to the returned node in a
		 * popover titled `name`. For a block of settings that belongs to no single row, such as the
		 * typography of a label; colour pickers go on the row itself through {@link PairColors}.
		 * @example
		 * const text = card.AddSettings("Text settings", "images/icons/text.svg")
		 * text.AddSlider("Font size", 13, 10, 24)
		 * text.PairColors(text.AddColorPicker("Text color", Color.White))
		 */
		public AddSettings(name: string, iconPath?: string, tooltip?: string): Node
		/**
		 * Rides colour pickers on this node's settings row: swatches beside the button open their
		 * palettes and the pickers lose rows of their own, inside the popover as well as outside it.
		 * What each one stands for is read from its name on hover.
		 */
		public PairColors(...pickers: ColorPicker[]): Node
		/** A heading among the node's rows: `name`, after `iconPath` when one is given. */
		public AddSectionHeader(name: string, iconPath?: string): ShortDescription
		/**
		 * A note: `name` as a line of muted text after an icon, the alert icon unless `iconPath` names
		 * another or is `""` for none.
		 */
		public AddShortDescription(name: string, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): ShortDescription
		/**
		 * A node under this one, or the one already named `name`, which takes `iconPath` if it has no
		 * icon yet.
		 */
		public AddNode(name: string, iconPath?: string, tooltip?: string, iconRound?: number, priority?: number): Node
		/** The same as {@link AddNode}. */
		public AddEntry(name: string, iconPath?: string, tooltip?: string, iconRound?: number, priority?: number): Node
		/**
		 * A switch, on at first when `defaultValue` is. One named `"State"` takes the power icon when
		 * given none, and comes first in a node that sorts its children.
		 */
		public AddToggle(name: string, defaultValue?: boolean, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): Toggle
		/**
		 * A slider from `min` to `max`, at `defaultValue` until moved, its value rounded to
		 * `precision` decimals.
		 */
		public AddSlider(name: string, defaultValue?: number, min?: number, max?: number, precision?: number, tooltip?: string, priority?: number): Slider
		/**
		 * A span of values on one rail with two thumbs, from `defaultLow` to `defaultHigh` until it is
		 * moved, within `min` to `max`. The thumbs stand only on the `step`s of the range, which the
		 * rail marks with a dot each while they are few enough to tell apart, and each thumb wears its
		 * value over it.
		 * @example
		 * const reaction = card.AddRangeSlider("Reaction (ms)", 150, 250, 0, 500, 50)
		 * reaction.OnValue(range => console.log(range.low, range.high))
		 */
		public AddRangeSlider(name: string, defaultLow?: number, defaultHigh?: number, min?: number, max?: number, step?: number, tooltip?: string, priority?: number): RangeSlider
		/** A dropdown offering `values`, with the option at index `defaultValue` selected at first. */
		public AddDropdown(name: string, values: string[], defaultValue?: number, tooltip?: string, priority?: number): Dropdown
		/** A multiselect offering `values`, the options named in `defaultValue` ticked at first. */
		public AddMultiSelect(name: string, values: string[], defaultValue?: string[], tooltip?: string, priority?: number): MultiSelect
		/** Adds a keybind, optionally hidden from Hotkeys by default; users can change its visibility in the context menu. */
		public AddKeybind(name: string, defaultKey?: string, tooltip?: string, priority?: number, defaultHotkeysHidden?: boolean): Keybind
		/**
		 * Adds a styled action button. Set `IconPath` on the returned handle to prepend a glyph.
		 * @example
		 * const create = page.AddButton("Create", "", 0, "primary", "sm")
		 * create.IconPath = "menu/ui/plus.svg"
		 */
		public AddButton(name: string, tooltip?: string, priority?: number, variant?: ButtonVariant, size?: ButtonSize): Button
		/** A colour picker holding `defaultColor` at first, green when none is given. */
		public AddColorPicker(name: string, defaultColor?: Color, tooltip?: string, priority?: number): ColorPicker
		/** A text field that starts empty and shows `placeholder`, the name by default, while it is. */
		public AddTextInput(name: string, placeholder?: string, priority?: number): TextInput
		/**
		 * A list of short strings edited in place: `placeholder` is what the empty field says,
		 * `maxLength` the longest string it takes and `maxItems` how many the list holds.
		 * @example
		 * const messages = node.AddTextList("Messages", defaults, "Sent after a kill", 0, "Type a message", 80)
		 */
		public AddTextList(name: string, values?: readonly string[], tooltip?: string, priority?: number, placeholder?: string, maxLength?: number, maxItems?: number): TextList
		/**
		 * A node holding an X and a Y slider, for a position a script draws at.
		 * @example
		 * this.Position = tree.AddVector2("Panel", new Vector2(0, 547), 0, new Vector2(1920, 1080))
		 * const at = this.Position.Vector
		 */
		public AddVector2(name: string, vector: Vector2, minVector?: Vector2 | number, maxVector?: Vector2 | number): Vector2Handle
		/**
		 * A node holding what it takes to describe one drawn shape: whether to draw it at all, its
		 * colour, whether it is filled, and which of the renderer's styles to use.
		 * @example
		 * this.Ward = tree.AddParticlePicker("Ward", Color.Green, ["Normal", "Rope"], [true, false])
		 */
		public AddParticlePicker(name: string, color?: Color | number, styles?: string[], state?: [boolean, boolean]): ParticlePicker
		/**
		 * An image selector whose tiles are dragged into the order they should be tried in, and which
		 * a script keeps adding to as the game reveals what belongs there.
		 * @example
		 * this.lotus = node.AddDynamicImageSelector("Lotus", abilities, new Map(), false, "…")
		 * this.lotus.AddImage("item_sphere", false)
		 */
		public AddDynamicImageSelector(name: string, values: string[], defaultValues?: Map<string, boolean> | [string, boolean][], createdDefaultState?: boolean, tooltip?: string, priority?: number): ImageSelector
		/**
		 * A row of image tiles, one per value of `values`, each turned on and off by a click.
		 * `defaultValues` gives a tile its first state, and one it leaves out starts as
		 * `createdDefaultState`; `draggable` lets the user put the tiles in another order.
		 */
		public AddImageSelector(name: string, values: string[], defaultValues?: Map<string, boolean> | [string, boolean][], tooltip?: string, createdDefaultState?: boolean, priority?: number, draggable?: boolean): ImageSelector
		/**
		 * A preset selector: a row showing the chosen preset, opening a panel that lists a permanent
		 * base preset above the user's own — presets are added, renamed and removed there, and each
		 * claims values from the catalogue handed to the returned handle.
		 * @example
		 * const presets = node.AddPresetSelector("Preset", "Global")
		 * presets.Catalogue = [{ title: "Rifles", values: [{ value: icon, label: "AK-47" }] }]
		 */
		public AddPresetSelector(name: string, baseName?: string, tooltip?: string, priority?: number): PresetSelector
	}
	interface Node extends Handle<NodeEntry> {}
	/** What {@link Node.AddVector2} hands back: the two sliders, and the point they make. */
	interface Vector2Handle {
		/** The node holding the two sliders. */
		readonly node: Node
		/** The slider of the x coordinate, hidden in the menu. */
		readonly X: Slider
		/** The slider of the y coordinate, hidden in the menu. */
		readonly Y: Slider
		/**
		 * The point {@link X} and {@link Y} make. A set moves both, each kept in its range and rounded
		 * to a whole number.
		 */
		Vector: Vector2
	}
	/** What {@link Node.AddParticlePicker} hands back. */
	interface ParticlePicker {
		/** The node holding the picker's controls. */
		readonly Node: Node
		/** Only there when the picker was asked for one. */
		readonly State: Nullable<Toggle>
		/** Whether the shape is filled; on at first. */
		readonly Fill: Toggle
		/** The shape's colour. */
		readonly Color: ColorPicker
		/** Which of the `styles` given to {@link Node.AddParticlePicker} the shape is drawn in. */
		readonly Style: Dropdown
	}
	/** The handle of any control or node, as {@link WrapEntry} returns it. */
	type AnyHandle = Node | Toggle | Slider | RangeSlider | Dropdown | MultiSelect | Keybind | Button | ColorPicker | TextInput | TextList | ImageSelector | PresetSelector | ShortDescription
	/** A hotkey of any entry, whatever kind of value it drives. */
	type AnyHotkey = HotkeyHandle<DrivenValue>
	/** A logic rule of any entry, whatever kind of value it drives. */
	type AnyLogic = LogicHandle<DrivenValue>
	/** A new handle over `entry`, of the class its kind calls for. */
	function WrapEntry(entry: Entry): AnyHandle
	/** The root of the menu tree; a node added to it is a tab. */
	const Menu: Node
}
