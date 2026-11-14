// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** How {@link useCollapse} moves its element. */
	interface CollapseOptions {
		/** Plays the motion; `false` jumps straight to the open or shut state. */
		readonly animate: boolean
		/** Animates an element that mounts already open, instead of settling it. */
		readonly enter?: boolean
		/** Runs once the fold has finished, for hosts that unmount their body. */
		readonly onFolded?: () => void
		/** Runs once the element has finished opening, for hosts that measure what it holds. */
		readonly onOpened?: () => void
	}
	/**
	 * Folds `root` open to the height of its content and shut to none as `open` changes, fading the
	 * content in over the middle of the travel. The height is measured again while it opens, so rows
	 * that appear inside meanwhile are grown into. The motion owns `height`, `opacity` and `overflow`
	 * on the element: keep them out of its style, except on an element that mounts shut, which takes
	 * `height: "0px"`, `opacity: 0` and `overflow: "hidden"` from a style object whose values never
	 * change, so it does not paint open for a frame.
	 *
	 * @example
	 * const body = React.useRef<HTMLElement>()
	 * MenuSDK.useCollapse(body, node.expanded, { animate: MenuSDK.MenuFlags.TabOpenAnimation })
	 * return <div ref={MenuSDK.RefTo(body)}>{rows}</div>
	 */
	function useCollapse(root: React.RefObject<HTMLElement>, open: boolean, options: CollapseOptions): void
}
