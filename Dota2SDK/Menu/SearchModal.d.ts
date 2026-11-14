// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the menu's search window. Picking a result closes it and hands the result's stored entry
	 * to `onNavigate`, which by default goes to that row in the menu and flashes it.
	 */
	function OpenSearch(onNavigate?: (entry: Entry) => void): void
	/** Closes the search window and clears what was typed in it. */
	function CloseSearch(): void
	/** Whether the search window is open. */
	function IsSearchOpen(): boolean
}
