// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Reads the stored config and the changer's document back in without writing them, fetches the
	 * cloud configs list again where the cloud is available, and tells about the author's updates the
	 * client merged meanwhile. Runs when {@link MenuHost.onConfigsChanged} fires.
	 */
	function HandleConfigsChanged(): Promise<void>
	/**
	 * Builds the Configs tab: the cloud pages while the host has the cloud, and on every host the
	 * Changed settings page with the resets of the whole config and the lists of the binds.
	 */
	function SetupConfigsMenu(): void
}
