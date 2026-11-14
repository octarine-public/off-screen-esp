// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The props of an element such as `<div>`, as the menu's React renderer receives them. */
	type HostProps = Record<string, unknown>
	/**
	 * Writes `props` onto a new element: `style` through {@link applyStyle}; a function under an
	 * `on` name as a listener, `onMouseOver` for `mouseover`, that runs in the theme scope active now
	 * and then calls {@link FlushAfterEvent}; `innerHTML` as it is; any other value that is not an
	 * object as an attribute, `className` as `class`. `children`, `ref` and `key` are skipped.
	 */
	function applyProps(element: HTMLElement, props: HostProps): void
	/**
	 * Brings `element` from `prev` to `next` the way {@link applyProps} writes them, touching only
	 * what differs: a prop that is gone is cleared, and of `style` only the keys that changed are
	 * written.
	 */
	function updateProps(element: HTMLElement, prev: HostProps, next: HostProps): void
}
