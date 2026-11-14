// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The full-screen layer {@link BeginDrag} lays over the menu: it hands every cursor move to
	 * `onMove` in layout units, and the release of the left button over it to `onEnd`.
	 */
	function DragShield(props: {
		onMove: (x: number, y: number) => void
		onEnd: () => void
	}): React.ReactElement
}
