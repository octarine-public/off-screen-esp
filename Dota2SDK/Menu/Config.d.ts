// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A config, or one node's part of it, as stored: names mapped to saved values, a node's value
	 * being a nested object.
	 */
	type ConfigObject = Record<string, unknown>
	/**
	 * Whether a stored config is being applied right now: `true` inside the value callbacks a config
	 * load runs, so a callback can tell a load from a change made by the user or a script.
	 */
	function IsLoadingConfig(): boolean
	/**
	 * Whether the boot config has landed — or never will, on a host that has none. Until it does,
	 * the window state, the navigation and every control are defaults: a surface that decides where
	 * to stand from them draws itself against a window that is about to move, so it waits for this.
	 */
	function ConfigSettled(): boolean
	/** Whether a config has been walked into the tree yet — false until the boot load lands. */
	function ConfigApplied(): boolean
	/**
	 * Declares a logic rule as the entry's own: the entry starts with it, shows it and lets it be
	 * edited or removed like a rule made by hand, and a reset puts it back. An entry whose rules the
	 * config already names keeps those, so a rule the user removed stays removed; a config written
	 * before the rule was declared names none and takes it up. A value the entry cannot hold
	 * declares nothing.
	 */
	function DeclareEntryLogic(entry: DriverHolder, when: LogicWhen, at: number, value: DriverValue): void
	/**
	 * The settings under `node`, the whole menu by default, as a config stores them: each control
	 * off its declared default under its name, a node's as a nested object, and a node with none of
	 * them left out. A control missing from it is at its default. The branches no entry claims are
	 * kept as they were read; the menu's own state is not among them.
	 */
	function SerializeConfig(node?: NodeEntry): ConfigObject
	/**
	 * Gives a newly attached entry the value the config already holds for it. The
	 * parent keeps the raw config subtree in `stored`, so a page built later still
	 * finds what was saved for it.
	 */
	function AdoptEntry(parent: NodeEntry, entry: Entry): void
	/**
	 * Takes an entry out of its parent. A parent that keeps unused configs keeps what the entry held
	 * off its defaults at that moment, so the entry attached again under the same name (a hero's page
	 * in the next match) comes back as the player left it, a row put back to its default included,
	 * and a save in between still carries it.
	 */
	function ReleaseEntry(entry: Entry): boolean
	/** Reshapes the raw stored config in place before it is applied; see {@link AddConfigMigration}. */
	type ConfigMigration = (raw: ConfigObject) => void
	/**
	 * Adds `migration` to run on the raw stored config before every load of the whole menu, so a
	 * config saved under a node's old name or place still lands on it. It runs on every load, a
	 * config already in the new shape included, and must leave that one as it is. One added after a
	 * load takes effect from the next. {@link MigrateNodeTab} and {@link RenameStoredRow} do the
	 * common moves.
	 */
	function AddConfigMigration(migration: ConfigMigration): void
	/**
	 * Carries a node saved under one tab over to another, the navigation that pointed at it and the
	 * tabs its pages showed included, so a config written before the node moved still lands on it.
	 * Idempotent, as {@link AddConfigMigration} requires: a config already holding the new path keeps
	 * it, and the old one is dropped either way - left behind, it would come back over the new one
	 * at the next load once the node at the new path writes nothing.
	 *
	 * @example
	 * AddConfigMigration(raw => MigrateNodeTab(raw, "Visual", "Settings", "Watermark"))
	 */
	function MigrateNodeTab(raw: ConfigObject, from: string, to: string, name: string): void
	/**
	 * The raw subtree a node's rows are written under in a stored config, or nothing while the config
	 * holds none - for a migration that reshapes one node's rows and no other's.
	 *
	 * @example
	 * AddConfigMigration(raw => RenameStoredRow(ConfigSubtreeOf(raw, node), "Size (%)", "Size"))
	 */
	function ConfigSubtreeOf(raw: ConfigObject, node: NodeEntry): Nullable<ConfigObject>
	/**
	 * Carries the value a node's raw config keeps under a row's old name over to the name the row
	 * has now. Idempotent: a config already holding the new name keeps it, and the old key is dropped
	 * either way. The subtree is the one {@link ConfigSubtreeOf} finds at a load, or the one a node
	 * built after the load was adopted with - {@link NodeEntry.stored}.
	 */
	function RenameStoredRow(subtree: Nullable<ConfigObject>, from: string, to: string): void
	/**
	 * Applies `config` to `node`, the whole menu by default; for a node it is that node's part of a
	 * stored config. Each saved control takes its stored value, and one the config does not name, or
	 * names with a value it cannot take, goes back to its default. On the whole menu the migrations
	 * of {@link AddConfigMigration} run on `config` first. A change a script made before the first
	 * call is not written for itself.
	 */
	function ApplyConfig(config: unknown, node?: NodeEntry): void
	/**
	 * Runs the listener each time a config has been applied to the whole menu: the stored one as the
	 * scripts load, every one the user switches to or adds, and a reset of the whole config. The rows
	 * already hold the config's values when it runs; one applied before the call is not heard. The
	 * returned call takes the listener off again.
	 * @example
	 * MenuSDK.OnConfigApplied(() => {
	 *     copyButton.IsDisabled = SameSelection(from, into)
	 * })
	 */
	function OnConfigApplied(listener: () => void): () => void
	/**
	 * Whether the entry is as its script declared it: at its default value with no hotkey and only
	 * the rules it declares. The value is the one the user left, so a declared rule holding the
	 * entry somewhere else does not make it a changed one.
	 */
	function IsDefaultValue(entry: ValueEntry): boolean
	/**
	 * Puts every control under `node`, at any depth, back as its script declared it. A control or
	 * node not saved to the config is skipped, with everything under it.
	 */
	function ResetEntries(node: NodeEntry): void
	/**
	 * Puts `entry` back as its script declared it, with its paired colour pickers, companions and
	 * settings panel; a node resets every saved control under it. A control's hotkeys are removed
	 * and its logic rules go back to the declared ones. "Reset to default" in a row's context menu
	 * calls it.
	 */
	function ResetEntry(entry: Entry): void
	/**
	 * Whether `entry` is as its script declared it, together with what shows with it: every control
	 * under a node, and a control's paired colour pickers, companions and settings panel. A control
	 * not saved to the config always counts as default.
	 */
	function IsDefaultDeep(entry: Entry): boolean
	/**
	 * Whether `entry` holds what the config last applied to the whole menu held for it, the boot
	 * config or one switched to since. A node matches when every row under it does, and a row that
	 * config does not name matches while it is at its default. A control not saved to the config
	 * always matches.
	 */
	function MatchesAppliedConfig(entry: Entry): boolean
	/**
	 * Puts `entry` back to what the config last applied to the whole menu held for it, or to its
	 * default where that config names nothing, and marks the change to be saved. A node restores
	 * every row under it; a control not saved to the config is left as it is.
	 */
	function RestoreAppliedEntry(entry: Entry): void
	/**
	 * Puts every row back to the applied config - the one switched to last, or the one the menu
	 * booted with. Resolves to whether anything stood off it.
	 */
	function RestoreAppliedConfig(): boolean
	/**
	 * Runs the listener after every config write with the document written; the returned call takes
	 * it off again. The document shares its branches with what the next write reuses: read it, do not
	 * change it.
	 */
	function OnConfigWritten(listener: (config: ConfigObject) => void): () => void
	/**
	 * Writes the config now when a setting changed since the last write, and then runs the
	 * {@link OnConfigWritten} listeners; the changer's document goes first when one of its settings
	 * changed. Writes nothing before the first config has been applied, while
	 * `MenuFlags.NoWriteConfig` is set, or on a host that stores no config. The menu runs it on its
	 * own every tick outside a drag.
	 */
	function FlushPendingConfig(): void
	/** Writes a config write that is due now, for the paths where the runtime is about to die. */
	function FlushConfigBeforeReload(): void
}
