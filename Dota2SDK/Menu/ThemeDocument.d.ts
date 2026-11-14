// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Everything the Themes tab holds, as one document: the look of the menu and of the surfaces
	 * outside it. It is what the account wears, what a cloud theme carries and what a preset is
	 * applied into - and never part of a config, so switching configs leaves it as it is.
	 */
	interface IThemeDocument {
		/**
		 * The menu window's look: its accent, seed colors, font and logo colors. The screen panels and
		 * the world overlays wear it too, each while its own {@link IThemeDocument.panels} or
		 * {@link IThemeDocument.world} is unset.
		 */
		menu: IThemeSnapshot
		/** Colors set apart from the palette the seeds build, by token. */
		colors: Partial<Record<PaletteColorToken, string>>
		/**
		 * What the glow is colored with: the accent, a color of its own, each surface's own color or a
		 * walking rainbow. Its reach and strength are in the menu's seeds.
		 */
		glow: IThemeGlowStyle
		/** The theme the screen panels wear, or nothing while they follow the menu. */
		panels?: IThemeSnapshot
		/** The theme the world overlays wear, or nothing while they follow the menu. */
		world?: IThemeSnapshot
	}
	/**
	 * The theme as it is written to disk and mirrored to the account: the document plus the
	 * preferences that ride on the Themes tab without being part of the look a theme shares.
	 */
	interface IStoredTheme {
		/** The format version, 2; a stored theme of any other version is not read. */
		v: number
		/** The look the account wears. */
		theme: IThemeDocument
		/** Speed of every menu animation as a fraction, 1 = 100%. */
		animationSpeed: number
		/** What one roll of the theme shuffler may change. */
		shuffle: EShuffleMode
		/** The keys the account's cloud themes are on, as packed bind codes by theme id. */
		binds: Record<string, number>
	}
	/**
	 * A new copy of the theme the menu wears untouched: the default accent, seeds, font and glow, no
	 * colors set apart, and the screen panels and world overlays following the menu.
	 */
	function DefaultThemeDocument(): IThemeDocument
	/** A copy of `theme` that shares no object with it. */
	function CloneThemeDocument(theme: IThemeDocument): IThemeDocument
	/**
	 * Whether two documents dress everything alike: the menu's look and its logo, the colors set
	 * apart, the glow and the surfaces outside the window. A logo color under the original artwork
	 * draws nothing and does not count.
	 */
	function themesEqual(a: IThemeDocument, b: IThemeDocument): boolean
	/**
	 * Reads a theme document off `unknown`, such as the parsed JSON of a stored or shared theme;
	 * `undefined` without a well-formed `menu`. Any other part that is missing or malformed takes its
	 * default, every number is held to the range its control offers, and a font family or weight the
	 * pickers do not offer reads as the default one. A `menu` without a font takes a `font` stored
	 * beside it.
	 */
	function DecodeThemeDocument(value: unknown): Nullable<IThemeDocument>
}
