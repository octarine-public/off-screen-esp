// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Debug entry points, reachable as `MenuSDK.MenuDebug.*`. */
	const MenuDebug: {
		/** Tears the menu down and mounts it again. */
		Rebuild(): void
		/** Logs window geometry and the number of root entries. */
		State(): void
		/**
		 * Logs and returns what the config weighs per tab, dense and compact, the stored branches no
		 * node holds, and the time a write takes; writes nothing. `undefined` outside a debug build.
		 * @example
		 * MenuSDK.MenuDebug.ConfigSize()
		 */
		ConfigSize(): Nullable<IConfigSize>
		/**
		 * Logs and returns the branches of the menu map with no known owner, the nodes several
		 * packages fill, and the sizes of the map and of the dictionary of names; sends nothing.
		 * `undefined` outside a debug build.
		 * @example
		 * MenuSDK.MenuDebug.MenuOwnership()
		 */
		MenuOwnership(): Nullable<IMenuOwnership>
	}
}
