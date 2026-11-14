// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A part of the menu window the intro hides and then fades in, each after its own delay.
	 * `nav:<n>` is the rail row at index n, `toptab:<n>` the top tab at index n.
	 */
	type IntroTargetKey = "wordmark" | "search" | "collapse" | "controls" | "subpanel" | "topbar" | "topnav" | "content" | `nav:${number}` | `toptab:${number}`
	/**
	 * Registers `element` as the part of the window `key` names, or forgets the part when `element`
	 * is `undefined`. While an intro still covers the window, the element is hidden at once.
	 */
	function SetIntroTarget(key: IntroTargetKey, element: Nullable<HTMLElement>): void
	/**
	 * Whether the intro has played in this game session. A script reload keeps it once
	 * {@link RestoreIntro} has settled.
	 */
	function IntroPlayed(): boolean
	/**
	 * Settles once the menu knows whether this load opens the game session or reloads inside it. The
	 * first load stamps the session into the client's store; a reload finds the stamp and counts the
	 * intro as played, so it runs once per game session rather than once per script reload.
	 */
	function RestoreIntro(): Promise<void>
	/**
	 * Whether an intro is running: from {@link PlayIntro} until the last part has faded in or
	 * {@link AbortIntro} or {@link ResetIntro} ends it.
	 */
	function IntroActive(): boolean
	/**
	 * Cancels a running intro and forgets every registered part, without showing what it hid.
	 * Whether the intro has played is kept.
	 */
	function ResetIntro(): void
	/**
	 * Ends a running intro on the spot: every element it hid is shown again and its curtain comes
	 * down for good. The window calls this the moment it starts closing mid-intro — a curtain that
	 * dies with the window would otherwise leave the reopened menu holding the hidden elements,
	 * with nothing left to reveal them.
	 */
	function AbortIntro(): void
	/**
	 * Covers `frame` with the intro: a curtain in the opaque window background where the logo fades
	 * in at four times its size, then shrinks into the top-left corner before the curtain lifts and
	 * the registered parts fade in. {@link TickIntro} moves it on. Does nothing while one is running.
	 */
	function PlayIntro(frame: HTMLElement): void
	/** Advances a running intro to `now`, read from `hrtime()`. Call it every frame. */
	function TickIntro(now: number): void
}
