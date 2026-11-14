// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The padding a {@link PanelHeader} keeps on its left and right, in dp. */
	const PanelPad = 10
	/**
	 * A panel's 32 dp header row: an accent marker, `title`, and `right` at the end when given. With
	 * `badge`, `right` sits on a pill of `rightTint` (the accent by default); without, it is text in
	 * `rightTint` (the muted text colour by default). `marker: false` drops the marker and
	 * `underline: false` the bottom border.
	 */
	function PanelHeader(props: {
		title: string
		marker?: boolean
		underline?: boolean
		right?: string
		rightTint?: StyleColor
		badge?: boolean
	}): React.ReactElement
	/**
	 * The width, in dp, a {@link PanelHeader} with this title, its accent marker and no badge needs
	 * in the current theme's type - so a panel sized by its rows never cuts its own header short.
	 *
	 * @example
	 * const width = Math.max(rowsWidth, PanelHeaderWidth(Localization.Localize("Hotkeys")))
	 */
	function PanelHeaderWidth(title: string): number
	/**
	 * `children` on a rounded card in the theme's card background and border, with `title` above
	 * the card when it is given and not empty.
	 */
	function Card(props: {
		title?: string
		children?: React.ReactNode
	}): React.ReactElement
}
