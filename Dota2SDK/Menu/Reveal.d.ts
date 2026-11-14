// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Which edge of the panel the preview it was opened from lies beyond. */
	const enum ERevealEdge {
		Left = 0,
		Right = 1
	}
	/**
	 * React hook: plays a panel's entrance once, on mount. `root` fades in over 170 ms at the menu's
	 * animation speed with its glass blur ramping up alongside, starting 12 dp toward `edge`, the
	 * side its preview lies on, at 96% of its size and growing out of that edge into place. The
	 * frames are written to the element directly, so no render runs for them.
	 */
	function useReveal(root: React.RefObject<HTMLElement>, edge: ERevealEdge): void
}
