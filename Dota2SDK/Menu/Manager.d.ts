// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The menu as a whole: whether its window is open, its config, and walks over its entries.
	 * Scripts use its one instance, `MenuSDK.MenuManager`.
	 */
	interface CMenuManager {
		/** The handles of the entries added straight to `MenuSDK.Menu`, made anew on every read. */
		get entries(): AnyHandle[]
		/** Whether the menu window is open. Setting it opens or closes the window. */
		get IsOpen(): boolean
		set IsOpen(value: boolean)
		/**
		 * The config as the menu writes it: the settings off their defaults, the binds and the
		 * scripts' own data (`ConfigData`). Each read builds a new object. Assigning one applies its
		 * settings and data, a setting it leaves out going back to its default; the window, the
		 * language and the rest of the menu's own state stay as they are.
		 */
		get config(): ConfigObject
		set config(value: ConfigObject)
		/**
		 * Asks every view of the menu to re-render, which happens once the current task ends. Inside
		 * {@link Batch} the request waits for the batch to finish.
		 */
		Update(): void
		/**
		 * Re-renders once for everything `fn` changes, instead of once per entry it touches - for a
		 * preset or anything else that writes many rows at a time.
		 *
		 * @example
		 * MenuManager.Batch(() => {
		 * 	fov.value = preset.fov
		 * 	smooth.value = preset.smooth
		 * })
		 */
		Batch(fn: () => void): void
		/**
		 * Calls `callback` with a handle of every entry under `node`, depth first: a node before its
		 * children. `node` takes a node's stored `entry`; omitted, the whole menu is walked.
		 */
		foreachRecursive(callback: (handle: AnyHandle) => void, node?: NodeEntry): void
		/**
		 * Walks every hotkey the menu carries, in menu order, with the row it rides
		 * — what a listing of everything the user has bound is built from.
		 *
		 * @example
		 * Menu.MenuManager.foreachHotkey((holder, hotkey) =>
		 * 	console.log(holder.Name, hotkey.BindName)
		 * )
		 */
		foreachHotkey(callback: (holder: AnyHandle, hotkey: AnyHotkey) => void): void
		/**
		 * Walks a stored config into the tree with the scripts' data, and the changer's document read
		 * beside it into the settings marked as the changer's: `null`, while the client has none yet,
		 * reads them from the config, and without one they keep their values.
		 * The first load also brings back the menu's own state the machine keeps - the window, the
		 * language, the page the menu stood at - and marks the rows the machine has not shown before
		 * as new; a config switched to later leaves both.
		 */
		LoadConfig(raw: unknown, changer?: ConfigObject | null): void
		/**
		 * Reads the stored config and the changer's document again and walks them into the menu as
		 * {@link LoadConfig} does. Does nothing on a host that cannot read configs; a config read that
		 * fails or is not valid JSON is loaded as `{}`.
		 */
		ReloadConfig(): Promise<void>
	}
	/** The one {@link CMenuManager}: the menu window's open state, its config and its entries. */
	const MenuManager: CMenuManager
}
