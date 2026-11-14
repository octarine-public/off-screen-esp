// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** What the menu's React renderer makes of an element such as `<div>`: the host element itself. */
	type Instance = HTMLElement
	/** A string the menu's React renderer shows as a child of an element. */
	interface TextInstance {
		/** The host text node showing the string; once the text changes, a fresh node replaces it. */
		node: HTMLElementText
		/** Changed text still waiting for that fresh node, or `undefined` when none is. */
		pending?: string
	}
	/** The element a menu root renders into. */
	type Container = HTMLElement
}
