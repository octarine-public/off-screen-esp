// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The tone of a status toast: it sets the toast's colour and how long it stays. */
	type StatusTone = "success" | "warn" | "error"
	/**
	 * Shows a status card at the bottom centre of the menu window, or of the screen while the window
	 * is closed: `text` as its headline and `detail` as a quieter line under it, neither localized.
	 * It replaces the card already shown; its life line drains over 2.4 s for `"success"` and 5 s for
	 * `"warn"` and `"error"`, then it leaves. The cursor resting on the card holds it, the count
	 * starting over once the cursor leaves; a click dismisses it.
	 */
	function ShowStatusToast(text: string, tone: StatusTone, detail?: string): void
}
