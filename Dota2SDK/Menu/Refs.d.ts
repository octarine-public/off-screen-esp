// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A ref callback that keeps the element in `target.current`, as `undefined` rather than `null`
	 * once React lets go of it. One `target` always gets the same callback, so React never
	 * re-attaches it.
	 */
	function RefTo(target: React.RefObject<HTMLElement>): React.RefCallback<HTMLElement>
	/**
	 * Records `element` as the one showing the menu entry `entry`, or forgets it with `undefined`.
	 * The entry is held weakly.
	 */
	function SetEntryElement(entry: object, element: Nullable<HTMLElement>): void
	/**
	 * The element showing the menu entry `entry`, as {@link SetEntryElement} last recorded it, or
	 * `undefined` while there is none. A row records its element while it is mounted.
	 */
	function EntryElement(entry: object): Nullable<HTMLElement>
}
