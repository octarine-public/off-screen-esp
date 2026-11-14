// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Adds the Themes tab: the cloud pages, the presets, the surfaces and the customization controls. */
	function SetupThemeSettings(): void
	/**
	 * Applies theme control changes once per menu frame. Answers whether the text weight moved: it
	 * is baked into every written style, so the caller rebuilds the trees when it did.
	 */
	function TickThemeSettings(): boolean
}
