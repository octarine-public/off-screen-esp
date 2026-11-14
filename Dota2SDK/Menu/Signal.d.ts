// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Calls `onChange` on every {@link Invalidate}; the call it returns unsubscribes. */
	function Subscribe(onChange: () => void): () => void
	/** A counter {@link Invalidate} raises by one: a new value means the menu's state moved. */
	function Version(): number
	/**
	 * Tells the menu its state changed: {@link Version} goes up, every {@link Subscribe} listener runs
	 * and the menu re-renders once the current task is over. Calls made while the menu writes many
	 * entries at once, such as a config being applied, fold into one at its end. The setters call it
	 * themselves; a script calls it after writing an entry's fields directly.
	 */
	function Invalidate(): void
}
