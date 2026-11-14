// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Stored position of the hotkeys panel, [-1, -1] while it was never moved. */
	function HotkeysPanelConfigValue(): [number, number]
	/** Restores the hotkeys panel position the machine keeps. */
	function ApplyHotkeysPanelConfig(value: unknown): void
	/**
	 * Whether the cursor is over the hotkeys panel while the menu is open, so the
	 * click that starts dragging it never reaches the game.
	 */
	function CursorOverHotkeysPanel(): boolean
	/** The panel-wide limit on when the on-screen hotkeys panel lists binds. */
	type HotkeysPanelDisplay = "always" | "active" | "hidden"
	/** Includes ordinary keybind entries in the hotkeys panel while they are held. */
	function SetShowPressedKeybinds(show: boolean): void
	/**
	 * Sets the panel-wide limit: each hotkey's visibility choice, active binds
	 * only, or no panel in game. While the menu is open the panel can always be
	 * found and dragged, even with an empty list or in "hidden" mode.
	 */
	function SetHotkeysPanelDisplay(mode: HotkeysPanelDisplay): void
	/**
	 * Registers the on-screen panel that lists the visible bound hotkeys with the value each drives;
	 * an active hotkey's key is lit with the accent. Rows slide in and out as binds come and go, and
	 * the panel fades in with the first and out with the last, unless
	 * `MenuFlags.HotkeysPanelAnimation` is off. While the menu is open the panel is dragged like the
	 * other overlay cards, snapping to their edges, and the machine keeps where it was left. The menu
	 * calls it when it sets up; later calls do nothing.
	 */
	function SetupHotkeysOverlay(): void
	/**
	 * Refreshes the panel when the host enters or leaves the game, and keeps its
	 * place among the overlay cards - the rectangle the others snap to, and the
	 * drag while it is held; ticked once per frame while the menu runs.
	 */
	function TickHotkeysOverlay(): void
}
