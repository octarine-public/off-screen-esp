// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The menu's own switch drawn on a HUD card (`SwitchFace`): a pill 28 by 18 dp in the theme's
	 * "switch off" colour washed over by the accent as it turns on, its 14 dp knob sliding from 2 dp
	 * in to 12 dp in - both eased over the menu's fade, as its rows do. The cursor over it lights the
	 * knob's rim. One per switch: it keeps its state as its painter sets it - on or off, lit or not -
	 * and where its own easing stands.
	 * @example
	 * const toggle = new CHudSwitch()
	 * toggle.On = enabled
	 * toggle.Lit = hovered
	 * toggle.Draw({ x, y, w: hudW(CHudSwitch.Width), h: hudH(CHudSwitch.Height) }, hrtime())
	 */
	class CHudSwitch {
		/** The track and the knob, in dp, as the menu's sheet lays them. */
		public static readonly Width = 28
		public static readonly Height = 18
		/** Whether it is on, and lit by the cursor over it, as its painter has it this frame. */
		public On: boolean
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
