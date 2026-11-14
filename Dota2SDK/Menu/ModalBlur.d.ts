// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** True while a modal owns the screen and the menu behind it is blurred. */
	function IsModalOpen(): boolean
	/**
	 * Blur applied to the menu contents under a modal. The window frame keeps its
	 * own glass, so the theme's transparency survives; only what sits inside is
	 * filtered. Honours the theme's blur setting.
	 */
	function ModalBlur(): string
	/**
	 * Says whether a modal owns the screen, blurring the menu window's contents by {@link ModalBlur}
	 * while one does, and redraws the menu on a change. It is one flag rather than a count, so the
	 * first modal to close clears it for any still open.
	 */
	function SetModalOpen(enabled: boolean): void
}
