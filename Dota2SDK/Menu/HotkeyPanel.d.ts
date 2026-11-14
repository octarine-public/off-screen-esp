// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the editor of `hotkey` on `entry` beside `anchor`, a rect in screen pixels: right of it,
	 * or left where the screen ends. It sets the key, toggle or hold mode, the value the hotkey
	 * drives, when the hotkeys panel shows it and whether it blocks game input, and deletes it. It
	 * draws no scrim of its own; {@link CloseHotkeyPanel} closes it.
	 */
	function OpenHotkeyPanel(entry: DriverHolder, hotkey: EntryHotkey, anchor: ScreenRect): void
	/**
	 * Closes the hotkey editor panel if it is open.
	 */
	function CloseHotkeyPanel(): void
	/**
	 * Whether the hotkey editor panel is showing this hotkey right now.
	 */
	function IsHotkeyPanelOpenFor(hotkey: EntryHotkey): boolean
	/**
	 * Registers the localization strings of the hotkey editor, the toggle
	 * context-menu items and the hotkeys panel settings.
	 */
	function SetupHotkeyStrings(): void
}
