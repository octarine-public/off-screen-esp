// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * How the hint of {@link ShowOverflowHint} draws itself, given to match the row it stands over.
	 */
	interface OverflowHintStyle {
		/** Fill of the hint, as `#rrggbb` or `#rrggbbaa`. */
		readonly background: string
		/** Colour of the label, and of the leading icon when `iconColor` is not set. */
		readonly color: StyleColor
		/** Font size of the label, in dp. */
		readonly fontSizeDp: number
		/** Height of the hint, in dp. */
		readonly heightDp: number
		/** Space between the leading icon or dot and the label, as the row lays it out. */
		readonly gapDp: number
		/** Inset of the leading icon or dot from the row's left edge; omitted keeps the default. */
		readonly padLeftDp?: number
		/** Draws the accent bar at the hint's left edge. */
		readonly activeBar: boolean
		/** Path of the leading icon. Without one, the hint leads with a dot when `dotColor` is set. */
		readonly iconPath?: string
		/** Set when the row wraps its icon in a fixed box, so the hint lays it out the same. */
		readonly iconBoxed?: boolean
		/** Height of the leading icon in dp: 16 when omitted, 20 with `iconTint` off. */
		readonly iconSizeDp?: number
		/** Width-to-height ratio of the leading icon; omitted keeps the square default. */
		readonly iconAspectRatio?: number
		/** Whether the leading icon is tinted, as it is when omitted; `false` keeps its own colours. */
		readonly iconTint?: boolean
		/** Corner radius of the leading icon, in dp; square when omitted. */
		readonly iconRound?: number
		/** Tint of the leading icon as the row paints it; omitted tints it with `color`. */
		readonly iconColor?: StyleColor
		/** Colour of the dot that leads the label when there is no `iconPath`; no dot when omitted. */
		readonly dotColor?: StyleColor
	}
	/**
	 * Stands the full label over a row whose label is cut, for as long as the row is hovered. While
	 * the list holding the row scrolls the hint stays down, and it comes back over whichever row
	 * the cursor rests on once the list stops.
	 */
	function ShowOverflowHint(row: HTMLElement, label: HTMLElement, text: string, style: OverflowHintStyle): void
	/** Keeps the hint off a row that is moving under it; runs once a frame, after the scroll areas. */
	function TickOverflowHint(): void
	/** Takes the overflow hint down; given `row`, only while the hint stands over that row. */
	function HideOverflowHint(row?: object): void
}
