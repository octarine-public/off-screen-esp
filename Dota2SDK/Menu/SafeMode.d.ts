// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A control {@link CSafeModeGroup.Register} can lock: any menu control. */
	interface ILockable {
		/** The stored entry of the control, as every menu handle carries it. */
		readonly entry: Entry
		/** Whether the control is disabled, by the script or by a Safe mode lock. */
		IsDisabled: boolean
	}
	/**
	 * A control {@link CSafeModeGroup.RegisterMin} and {@link CSafeModeGroup.RegisterMax} can clamp:
	 * a `MenuSDK.Slider`.
	 */
	interface IClampable {
		/** The stored entry of the control, as every menu handle carries it. */
		readonly entry: Entry
		/**
		 * A lower bound inside the control's own range, or `undefined` for none. Setting one raises a
		 * value under it to it.
		 */
		clampMin: Nullable<number>
		/**
		 * An upper bound inside the control's own range, or `undefined` for none. Setting one lowers a
		 * value over it to it.
		 */
		clampMax: Nullable<number>
	}
	/** A switch {@link CSafeModeGroup.RegisterValue} can pin: a `MenuSDK.Toggle`. */
	interface IHoldableValue {
		/** The stored entry of the control, as every menu handle carries it. */
		readonly entry: Entry
		/**
		 * The value the switch is pinned to, or `undefined` while it is free. Setting one applies it
		 * at once, and every later change lands on it.
		 */
		HoldValue: Nullable<boolean>
	}
	/** A dropdown {@link CSafeModeGroup.RegisterOption} can pin: a `MenuSDK.Dropdown`. */
	interface IHoldableOption {
		/** The stored entry of the control, as every menu handle carries it. */
		readonly entry: Entry
		/**
		 * Index of the option the dropdown is pinned to, or `undefined` while it is free. Setting one
		 * selects it at once, and every later change lands on it.
		 */
		HoldOption: Nullable<number>
	}
	/** A control a part of Safe mode holds, as the Safe mode window lists it. */
	interface ISafeModeFeature {
		/** The stored entry of the control. */
		readonly entry: Entry
		/**
		 * Shown under the control's name: what gives the feature away or why the part holds it, such
		 * as the convars it writes. Localized; text with no translation shows as written.
		 */
		readonly detail: string
	}
	/** How a game introduces a part of Safe mode. See {@link CSafeMode.AddGroup}. */
	interface ISafeModeGroupOptions {
		/** The part's title, a localization key. */
		readonly name: string
		/** What the part guards against and what its features risk, a localization key. */
		readonly description: string
		/** Icon beside the title; the Safe mode shield when omitted. */
		readonly iconPath?: string
	}
	/**
	 * One part of Safe mode, with a switch of its own. The switch is kept in the machine's local
	 * storage apart from every config, so loading, switching or importing a config never moves it.
	 * While it is on, each control registered on the part stays locked, clamped or pinned to its safe
	 * value, whatever a config, a hotkey or a rule sets.
	 */
	class CSafeModeGroup {
		/** The part's title, a localization key. */
		public readonly Name: string
		/** What the part guards against and what its features risk, a localization key. */
		public readonly Description: string
		/** Icon beside the title. */
		public readonly IconPath: string
		/**
		 * A part stored under `storedKey` that follows `follows` until it is switched or its stored
		 * state is read; without `follows` it starts on. {@link CSafeMode.AddGroup} builds one that the Safe mode window lists
		 * and that restores its stored state on its own.
		 */
		constructor(options: ISafeModeGroupOptions, storedKey: string, follows?: CSafeModeGroup)
		/**
		 * Whether the part is on, holding its controls. Setting it holds or frees them at once, calls
		 * the {@link OnChanged} listeners and stores the choice on the machine. A part from
		 * {@link CSafeMode.AddGroup} follows Safe mode as a whole until it is switched or its stored
		 * state is read.
		 */
		public get Enabled(): boolean
		public set Enabled(value: boolean)
		/** The controls this part holds, in the order they were registered. */
		public get Features(): readonly ISafeModeFeature[]
		/** Calls `listener` every time the part turns on or off. */
		public OnChanged(listener: (enabled: boolean) => void): void
		/**
		 * Reads the state the machine keeps, before any config is walked into the tree: what a
		 * config lands under must already be the holds the user chose. A store that holds nothing,
		 * or cannot be opened, leaves the switch as it is. A choice made before the store answered
		 * wins over what it held.
		 */
		public Restore(): Promise<void>
		/**
		 * Takes the state a config carried from before the switch moved into the machine's store,
		 * once: the first config walked in after the move seeds the store, and from then on no
		 * config moves the switch. Anything but a boolean, or a state already known, is ignored.
		 */
		public Seed(stored: unknown): void
		/**
		 * Locks the control while the part is on; its value stays whatever it was. `detail` goes
		 * under the control's name in the Safe mode window.
		 */
		public Register(control: ILockable, detail?: string): void
		/** Keeps the slider at or below `safeMax` while the part is on. */
		public RegisterMax(slider: IClampable, safeMax: number, detail?: string): void
		/** Keeps the slider at or above `safeMin` while the part is on. */
		public RegisterMin(slider: IClampable, safeMin: number, detail?: string): void
		/**
		 * Pins the switch to `safe` while the part is on: it takes that value at once, and every
		 * later set, whether from a config, a hotkey, a rule or a click, lands on it too.
		 * @example
		 * MenuSDK.SafeMode.RegisterValue(antiAim, false)
		 */
		public RegisterValue(toggle: IHoldableValue, safe: boolean, detail?: string): void
		/**
		 * Pins the dropdown to the option `safe` while the part is on, the way
		 * {@link RegisterValue} pins a switch.
		 * @example
		 * MenuSDK.SafeMode.RegisterOption(aimType, EAimType.Standard)
		 */
		public RegisterOption(dropdown: IHoldableOption, safe: number, detail?: string): void
		/** Whether the part is on and holds `entry` itself. */
		public Holds(entry: Entry): boolean
	}
	/**
	 * The switch that keeps the dangerous settings out of reach, going off only through
	 * {@link ConfirmDisable}. A game may split it into parts with {@link AddGroup}, each with a
	 * switch of its own: the Settings tab then opens the Safe mode window instead of carrying the
	 * switch, and a part the user has not switched yet follows this one.
	 */
	interface CSafeMode extends CSafeModeGroup {
		/** The parts {@link AddGroup} split Safe mode into, in the order they were added. */
		get Groups(): readonly CSafeModeGroup[]
		Restore(): Promise<void>
		/**
		 * Splits off a part of Safe mode with a switch of its own, kept under `id` in the machine's
		 * store; until the user switches it, the part follows the whole of Safe mode. Split before
		 * `MenuSDK.AttachHost`: the Settings tab builds its Safe mode row once, as the switch while
		 * there are no parts and as the button opening the Safe mode window once there are.
		 * @example
		 * const convars = MenuSDK.SafeMode.AddGroup("convars", {
		 * 	name: "Convars",
		 * 	description: "The server can read these, and may ban for them later"
		 * })
		 * convars.RegisterValue(disableFog, false, "fog_enable")
		 */
		AddGroup(id: string, options: ISafeModeGroupOptions): CSafeModeGroup
		/**
		 * Sets what {@link Open} calls to show the Safe mode window. The menu binds its own window once
		 * Safe mode has parts; a later call replaces it.
		 */
		BindPanel(open: (focus: Nullable<CSafeModeGroup>) => void): void
		/** Opens the Safe mode window of a split Safe mode, on `focus` when one is given. */
		Open(focus?: CSafeModeGroup): void
		/** The part holding `entry` directly or through its owning page or switch, while it is on. */
		HolderOf(entry: Entry): Nullable<CSafeModeGroup>
		/**
		 * Answers a click on a row Safe mode holds. Split into parts, it opens the Safe mode window on
		 * the part holding the row; whole, it asks to turn Safe mode off and runs `onDisabled` once
		 * it is.
		 */
		OfferRelease(entry: Entry, onDisabled?: () => void): void
		/**
		 * Asks the user to confirm turning Safe mode off, turns it off on yes and then runs
		 * `onConfirm`; `onCancel` runs when they keep it on. Already off, it runs `onConfirm` without
		 * asking.
		 */
		ConfirmDisable(onConfirm?: () => void, onCancel?: () => void): void
	}
	/**
	 * The menu's Safe mode, on until the user turns it off. A game registers the controls it holds
	 * here or on a part split off with {@link CSafeMode.AddGroup}.
	 */
	const SafeMode: CSafeMode
}
