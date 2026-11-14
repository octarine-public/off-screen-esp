// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the modal popup that captures a key for `target`, such as a hotkey or a window
	 * shortcut, and hands the confirmed key to `target.commit`. A capture in progress is cancelled.
	 */
	function OpenBindCapturePanel(target: CaptureTarget): void
	/**
	 * Opens the modal capture popup for the keybind entry, replacing any
	 * capture session already in progress.
	 */
	function OpenKeybindPanel(entry: KeybindEntry): void
	/**
	 * Closes the capture popup discarding the pending bind.
	 */
	function CloseKeybindPanel(): void
	/**
	 * Keeps the popup centered over the menu window and animates the
	 * pending-bind preview border; ticked once per frame while the menu runs.
	 */
	function TickKeybindPanel(now: number): void
}
