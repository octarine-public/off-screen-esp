// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Fades a shader fill between its idle form and its lit one as `lit` changes, and returns the
	 * style to render it with now. `fill` builds the style at `mix`, 0 idle and 1 lit; each step of
	 * the fade is written straight to `target`, without a render. With
	 * {@link MenuFlags.HoverAnimation} off the fill switches at once.
	 *
	 * @example
	 * const fill = (mix: number) =>
	 * 	MenuSDK.SdfRounded(7, MenuSDK.fadeHex(MenuSDK.Theme.ValueOf("DangerBg"), mix))
	 * const style = MenuSDK.useHoverFill(row, hovered, fill)
	 * return <div ref={MenuSDK.RefTo(row)} style={style} />
	 */
	function useHoverFill(target: {
		current: Nullable<HTMLElement>
	}, lit: boolean, fill: (mix: number) => RmlStyle): RmlStyle
}
