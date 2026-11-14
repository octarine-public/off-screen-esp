// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The pair `useHover` drives its state from, ready to spread onto an element. */
	interface HoverHandlers {
		/** Turns the state on and runs the hook's `enter` when the cursor comes onto the element. */
		readonly onMouseOver: (event: Event) => void
		/** Turns the state off and runs the hook's `leave` when the cursor leaves the element. */
		readonly onMouseOut: (event: Event) => void
	}
	/**
	 * Hover state of one element, as `[hovered, handlers]` with the handlers spread onto it. They
	 * answer to the element's own `mouseover` and `mouseout` alone, so a child's events, which bubble
	 * up as the cursor walks between the child and the element, never drop the state. They keep one
	 * identity for the life of the component, so a re-render never rebinds them.
	 *
	 * @example
	 * const [hovered, hover] = MenuSDK.useHover(
	 * 	() => MenuSDK.SetHoverTooltip(button, "More"),
	 * 	() => MenuSDK.ClearHoverTooltip(button)
	 * )
	 * return <div ref={MenuSDK.RefTo(button)} {...hover} style={{ opacity: hovered ? 1 : 0 }} />
	 */
	function useHover(enter?: () => void, leave?: () => void): [boolean, HoverHandlers]
}
