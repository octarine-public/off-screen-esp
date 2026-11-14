// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Renders the menu window and its panels; nothing happens while they are mounted. */
	function MountMenu(): void
	/**
	 * Unmounts the menu and mounts it again, an open confirmation dialog with it; nothing happens
	 * while it is not mounted.
	 */
	function RebuildMenu(): void
	/**
	 * One frame of the menu: the first sets it up, the menu is mounted once the stored config is
	 * read, and each frame writes what changed and draws. {@link AttachHost} hands it to
	 * {@link MenuHost.onFrame}.
	 */
	function TickMenu(): void
	/**
	 * Sets the menu up: its fonts and translations, the stored config and theme, and the pages it
	 * adds itself, such as Configs and Settings. Only the first call does anything.
	 */
	function InitMenu(): void
	/**
	 * Gives the menu `host`, merged over the host it has: a field passed again replaces the old
	 * one, except that a hook taking the menu's handler, such as `onFrame` or `onKeyDown`, is
	 * wired only the first time it arrives, and every `onConfigWritten` passed keeps being called.
	 * Sets the menu up as well, see {@link InitMenu}.
	 */
	function AttachHost(host: MenuHost): void
	/**
	 * Takes the menu window, its panels and its dialogs off the screen. The next {@link TickMenu}
	 * mounts them again unless the scripts are reloading.
	 */
	function UnmountMenu(): void
}
