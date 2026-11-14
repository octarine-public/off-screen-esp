// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The menu window as a React component, the one `MountMenu` renders. Nothing is built until the
	 * window first opens; from then on closing hides the window instead of unmounting it, and a
	 * hidden window ignores store and window changes until it opens again. Outside panic mode it
	 * unmounts while the menu has no visible tab.
	 */
	function MenuWindow(): React.ReactElement | null
}
