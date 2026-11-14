// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The menu's own switch drawn on a HUD card: a 28 by 18 dp pill in the theme's "SwitchOff" colour
	 * that the accent washes over as it turns on, and a 14 dp knob sliding from 2 dp to 12 dp in, both
	 * eased over the menu's fade. Keep one per switch: it holds `On`, `Lit` and where its easing
	 * stands.
	 * @example
	 * const toggle = new MenuSDK.CHudSwitch()
	 * toggle.On = enabled
	 * toggle.Lit = hovered
	 * const w = MenuSDK.hudW(MenuSDK.CHudSwitch.Width)
	 * toggle.Draw({ x, y, w, h: MenuSDK.hudH(MenuSDK.CHudSwitch.Height) }, hrtime())
	 */
	class CHudSwitch {
		/** Width of the pill, in dp. */
		public static readonly Width = 28
		/** Height of the pill, in dp; {@link Draw} scales the switch to the height of its box. */
		public static readonly Height = 18
		/** Whether it is on; a change eases the knob across over the next draws. */
		public On: boolean
		/** Whether the knob wears a rim in the accent, the mark of a switch under the cursor. */
		public Lit: boolean
		/**
		 * The switch in `box`, in px, at `now`, in ms, as `On` and `Lit` have it - flipped since the
		 * last frame, it eases there.
		 */
		public Draw(box: Readonly<ScreenRect>, now: number): void
		/** Stands it at once where `On` says: its card came up, nothing to ease from. */
		public Place(): void
	}
}
