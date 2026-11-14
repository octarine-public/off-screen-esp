// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Anything that carries a menu entry, as every control and node handle does: what
	 * {@link MenuFlags.Flash} takes.
	 */
	interface Flashable {
		/** The entry to pulse. */
		readonly entry: Entry
	}
	/**
	 * How an entry's tooltip is presented: "bubble" floats a shadowed hint at the
	 * cursor on hover, "inline" prints the same text under the row label, "side"
	 * opens a panel beside an explicit info icon, "off" shows nothing.
	 */
	type TooltipStyle = "bubble" | "inline" | "side" | "off"
	/**
	 * Switches the whole menu reads: config writes, change marks, the logo's colors, animations,
	 * panel snapping and tooltips. Most mirror a control of the menu's own settings, which writes
	 * them whenever it changes.
	 */
	const MenuFlags: {
		/**
		 * Lets keybinds fire while the game has the keyboard — a chat box or a console. Off, because
		 * typing a message should not set off the binds its letters are on.
		 */
		TriggerWhileTyping: boolean
		/**
		 * Whether a config write is due. Setting it asks for the settings to be written on the next
		 * menu frame outside a drag, every row laid out anew; `false` cancels a due write. The menu's
		 * own state is stored apart from the config, through {@link SaveMenuState}.
		 */
		SaveConfigASAP: boolean
		/** While on, a config write that falls due is dropped instead of made. */
		NoWriteConfig: boolean
		/**
		 * Whether stored values are being put on the controls: a config loading, or a theme filling
		 * the theme controls. A value set meanwhile marks nothing changed, so a listener can read it
		 * to tell a loaded value from one the user set.
		 */
		IsLoadingConfig: boolean
		/** Whether rows of settings this machine had not shown before wear the new mark. */
		DrawMarksNew: boolean
		/** Whether rows moved off the value they were declared with wear the changed mark. */
		DrawMarksNonDefault: boolean
		/**
		 * Whether the logo keeps its original artwork colors instead of being tinted with
		 * {@link MenuFlags.LogoColor} or the accent.
		 */
		KeepOriginalLogoColor: boolean
		/**
		 * The color the logo is tinted with instead of the accent, or nothing while it follows the
		 * accent. {@link MenuFlags.KeepOriginalLogoColor} draws the original artwork over it.
		 */
		LogoColor: Nullable<string>
		/**
		 * The color of the three pieces beside the logo's arrow, which makes the logo two-colored, or
		 * nothing while they wear {@link MenuFlags.LogoColor} with the arrow.
		 */
		LogoSecondColor: Nullable<string>
		/** The color the name beside the logo is set in, or nothing while it follows the theme. */
		WordmarkColor: Nullable<string>
		/** Whether hover states fade in and out; off, they switch at once. */
		HoverAnimation: boolean
		/** Whether the intro animation plays when the menu window first opens. */
		IntroAnimation: boolean
		/** Whether the menu window fades in as it opens; off, it appears at once. */
		MenuOpenAnimation: boolean
		/** The effect the menu window opens with, as an index into `OpenEffects`, held to its range. */
		MenuOpenEffect: number
		/** How long the menu window's fade-in runs, in ms at an animation speed of 1. */
		MenuOpenDuration: number
		/** Whether the navigation rail folds and unfolds with motion; off, it switches at once. */
		RailAnimation: boolean
		/**
		 * Whether folds open and shut with motion and a page fades in as it is shown; off, both change
		 * at once.
		 */
		TabOpenAnimation: boolean
		/** Whether the window chrome glides between the top and side layouts; off, it jumps. */
		LayoutSwitchAnimation: boolean
		/** Whether the on-screen hotkeys panel and its rows fade and slide in and out. */
		HotkeysPanelAnimation: boolean
		/** Whether a panel being dragged snaps to the edges and centers of the other visible panels. */
		PanelSnap: boolean
		/** Whether a panel being dragged snaps to the screen's horizontal and vertical center. */
		PanelScreenCenterSnap: boolean
		/**
		 * Whether a panel dragged past a screen edge docks there, tucked behind the edge with a handle
		 * left out to bring it back. Off, every docked panel stands where it was last put down.
		 */
		PanelDock: boolean
		/** While on, every panel tucked behind a screen edge stands out of it. */
		PanelPeek: boolean
		/** How setting rows show their tooltips, as {@link TooltipStyle} lists. */
		TooltipStyle: TooltipStyle
		/**
		 * Makes `element`'s entry pulse once where it is drawn, the next time the menu renders it.
		 * Nothing opens or scrolls; `RevealEntry` does both and pulses too. A later call replaces an
		 * entry still waiting.
		 */
		Flash(element: Flashable): void
	}
	/**
	 * Asks for the menu's own state - where the window and the panels stand, the language, the open
	 * page, saved colours, recent searches, the tour - to be stored on the machine on the next menu
	 * frame outside a drag. The config is not written for it. A setting that moved asks through
	 * {@link MenuFlags.SaveConfigASAP} instead.
	 */
	function SaveMenuState(): void
	/** The entry waiting to pulse, or `undefined` while none is. */
	function FlashedEntry(): Nullable<Entry>
	/**
	 * Clears the waiting pulse if it is `entry`'s. What draws an entry calls it as the pulse starts,
	 * so an entry drawn in two places pulses once.
	 */
	function ConsumeFlash(entry: Entry): void
}
