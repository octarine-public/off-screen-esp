// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The gate in front of the window body. The body is built the first time the window opens and
	 * kept from then on: closing hides it instead of taking it down, so a reopen shows a tree that
	 * is already laid out rather than building every element of the page again in one frame. A
	 * closed menu still takes store invalidations — every bound hotkey press is one — and the body's
	 * page computation is not free, so the hidden body hears nothing until the window opens again
	 * and catches up in that one render.
	 */
	function MenuWindow(): React.ReactElement | null
}
