// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A script's own data kept in the config beside the settings. It is written with the config, so
	 * it goes with it to the cloud and to whoever the config is shared with, and it is another's
	 * data once the user switches to another config. It is not a setting: no row shows it, and
	 * resetting the menu leaves it as it is. Get one from {@link ConfigData}.
	 * @example
	 * const notes = MenuSDK.ConfigData<string[]>("my-script-notes")
	 * notes.OnLoad(value => show(Array.isArray(value) ? value : []))
	 * notes.Set(["first"])
	 */
	class CConfigData<T> {
		/** Use {@link ConfigData}, which keeps one object to a key. */
		constructor(key: string)
		/**
		 * What the config holds under the key, or `undefined` where it holds nothing. It is JSON as
		 * it was read, and the config may be one somebody else shared: check its shape before use.
		 */
		public get Value(): Nullable<T>
		/** Replaces the data and has the config written. `undefined` takes the key out of it. */
		public Set(value: Nullable<T>): void
		/**
		 * Calls `listener` with the data each time a config has been applied: the stored one as the
		 * scripts load, then every one the user switches to. Where one has been applied already it
		 * is called at once. The returned call takes the listener off again.
		 */
		public OnLoad(listener: (value: Nullable<T>) => void): () => void
	}
	/**
	 * The data kept in the config under `key`: the same object on every call with that key. Name the
	 * key after the script, since every script of the game shares the config.
	 * @example
	 * const routes = MenuSDK.ConfigData<Record<string, unknown>>("movement-routes")
	 */
	function ConfigData<T>(key: string): CConfigData<T>
}
