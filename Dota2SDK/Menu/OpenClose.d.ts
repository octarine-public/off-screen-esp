// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A way the menu window opens: two curves over the open progress, which runs linearly from 0 to
	 * 1 across {@link OpenDuration}, giving the frame's opacity and backdrop blur as fractions of
	 * the theme's own. Closing plays no curve: the window is gone the same frame.
	 */
	interface OpenEffect {
		/** The entry the "Menu open effect" dropdown shows for it. */
		readonly name: string
		/** Frame opacity as a fraction of the theme opacity, over progress 0..1. */
		readonly opacity: (t: number) => number
		/** Backdrop blur as a fraction of the theme blur, over progress 0..1. May overshoot 1. */
		readonly blur: (t: number) => number
	}
	/**
	 * The effects the menu window can open with, in the order the "Menu open effect" dropdown lists
	 * them. {@link ActiveOpenEffect} is the one the menu is set to.
	 */
	const OpenEffects: OpenEffect[]
	/**
	 * The open effect the menu is set to, for a surface that comes in on the window's own terms
	 * without standing inside it - a HUD card that opens the way the menu does.
	 *
	 * @example
	 * surface.Fade(ActiveOpenEffect().opacity(t))
	 */
	function ActiveOpenEffect(): OpenEffect
	/** How long the menu's open motion runs at the designed pace, in ms. */
	function OpenDuration(): number
	/**
	 * Puts a surface standing outside the window on the window's own open motion, or takes it off
	 * again; `glass` is the layer inside it carrying the backdrop blur, for one that is frosted.
	 * The progress is written the moment it registers, so a card mounting into an open window is on
	 * screen the same frame and one mounting mid-open joins the fade where it stands.
	 */
	function SetMenuMotionFollower(key: string, element: Nullable<HTMLElement>, glass?: Nullable<HTMLElement>): void
	/**
	 * Registers the menu window frame with the motion driver. Mounting an opened
	 * window with the progress below 1 plays the open animation, so the first
	 * mount and a reopen both fade in through the same path; a rebuild remounts
	 * at progress 1 and shows the window untouched.
	 */
	function SetMenuMotionFrame(element: Nullable<HTMLElement>): void
	/** Wires the driver to window open/close transitions and takes over the backdrop capture. */
	function SetupOpenClose(): void
}
