// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Puts `text` in `entry`, tells its listeners and redraws the menu; an entry saved with its
	 * document marks that document changed. Nothing happens when the entry already holds `text`.
	 */
	function SetTextValue(entry: TextEntry, text: string): void
	/**
	 * What the capture popup binds into — a keybind row or one toggle hotkey.
	 * `entry` is set for keybind rows so their chips light up while capturing.
	 */
	interface CaptureTarget {
		/** The capture popup's heading; translated as it is shown. */
		readonly name: string
		/** Whether the popup offers a button that binds the left mouse button. */
		readonly allowLeftMouse: boolean
		/**
		 * Whether a key pressed while another is held binds the pair, the first one held as the
		 * modifier; the popup then asks for a key or a combination.
		 */
		readonly allowCombinations: boolean
		/** The bind code the target holds now, which the popup shows until a key is pressed. */
		readonly current: number
		/** The keybind row being bound, when the target is one: its own key does not count as taken. */
		readonly entry?: KeybindEntry
		/** The entry hotkey being rebound, so its own key does not count as taken. */
		readonly hotkey?: EntryHotkey
		/** Receives the bind code when the capture is confirmed, 0 if it was reset; not on a cancel. */
		readonly commit: (bind: number) => void
	}
	/**
	 * Marks `entry` as the text field holding focus, `field` the native input that holds it. Clearing
	 * it leaves the native focus where it is; {@link DropTextFocus} takes that away too.
	 */
	function SetFocusedText(entry: Nullable<TextEntry>, field?: HTMLElement): void
	/**
	 * The text entry {@link SetFocusedText} last marked as holding focus, such as a text row's or a
	 * {@link FocusMarker} a raw input was handed; `undefined` while none is.
	 */
	function FocusedText(): Nullable<TextEntry>
	/**
	 * A detached text entry that stands for a raw `<input>` owned by no menu row. Hand it to
	 * {@link SetFocusedText} while the input holds focus: the host routes key presses (Enter,
	 * Escape, Backspace, arrows) to the document only while some text field counts as focused.
	 */
	function FocusMarker(): TextEntry
}
