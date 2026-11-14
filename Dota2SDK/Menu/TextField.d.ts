// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The menu's text field, bound to the entry of a text control: what is typed is written to it a
	 * frame later, and Enter leaves the field. While it is empty and not focused it shows the
	 * placeholder, a generic "Search" when none is set.
	 * @example
	 * <MenuSDK.TextField entry={name.entry} width={180} placeholder="Player name" />
	 */
	function TextField(props: {
		entry: TextEntry
		style?: RmlStyle
		radius?: number
		leadIcon?: string
		placeholder?: string
		/**
		 * Laid-out width of the field in dp. A placeholder that does not fit the remaining room is
		 * shortened with an ellipsis while retaining the field's own wording.
		 */
		width?: number
		/**
		 * Drops the field's own fill, border, focus ring and side padding, so the text starts where
		 * the host lays the field out. For a host that draws the surroundings itself.
		 */
		bare?: boolean
		/**
		 * Paints the border in the danger tone while the entered value is known to be rejected —
		 * a share code the server refused. The host derives it from the current text, so the
		 * tint clears as soon as the value is edited.
		 */
		invalid?: boolean
		/** The longest text the field takes: what is typed past it is cut and the field snaps back. */
		maxLength?: number
		autoFocus?: boolean
		/**
		 * Type overrides for the input itself, for a field that edits text shown in place - a name
		 * that turns into its own rename field keeps its font, weight and colour.
		 */
		inputStyle?: RmlStyle
		onKeyDown?: (event: Event) => boolean
	}): React.ReactElement
}
