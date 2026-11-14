// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * React hook: the game window's size in px as `[width, height]`, re-rendering the component
	 * whenever it changes.
	 */
	function usePanelViewport(): [number, number]
	/**
	 * A glowing {@link Surface} placed at `anchor` (`"top-left"` by default) and `offset` dp in from
	 * it (`[12, 12]` by default), with `style` applied to the surface. It takes no clicks unless
	 * `interactive`, and `visible: false` renders nothing.
	 */
	function Panel(props: {
		anchor?: PanelAnchor
		offset?: [number, number]
		visible?: boolean
		interactive?: boolean
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement | null
}
