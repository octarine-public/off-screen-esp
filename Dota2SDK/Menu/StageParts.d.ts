// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The switch of one element of the stage, in the row under it ({@link StageFooter}): lit while the
	 * element is drawn, a click flips it, and a right click opens its settings when it has any
	 * (`configure`). Under the cursor it names the element and says what the mouse does to it. The
	 * stage's own switches stand beside its title instead ({@link StageChip}).
	 *
	 * @example
	 * <ElementChip icon={MenuIcons.Eye} label="Marks" on={marks.value}
	 * 	press={() => (marks.value = !marks.value)} configure={() => OpenElementSettings(node, stage)} />
	 */
	function ElementChip(props: {
		icon: string
		label: string
		on: boolean
		press: () => void
		configure?: () => void
	}): React.ReactElement
	/**
	 * The row under a preview's stage: the elements' switches ({@link ElementChip}) as `children`, and
	 * at its end what the sample shows, in words (`readout`).
	 */
	function StageFooter(props: {
		children?: React.ReactNode
		readout?: React.ReactNode
	}): React.ReactElement
	/**
	 * The pointer area of a {@link CStageArea}: a click runs `press`, or `open` when it has none; a
	 * right click runs `open`, and a wheel notch `wheel` - +1 up, -1 down. Under the cursor it names the
	 * area (`Caption`) and says what the mouse does to it (`hint`); after a press that answers true and
	 * after a notch the tooltip comes back reading what it changed.
	 *
	 * @example
	 * <StageArea area={chams} hint="Click to switch the material · Right-click for settings"
	 * 	open={() => OpenElementSettings(chams.Settings, stage)} press={() => (chams.Next(), true)} />
	 */
	function StageArea(props: {
		area: CStageArea
		hint: string
		open: () => void
		press?: () => boolean
		wheel?: (step: number) => void
	}): React.ReactElement
	/**
	 * The stage's part of a {@link CStageHandle}: the marks where it can be dropped and the pointer area
	 * over it - taken as the left button goes down, its release the drag's to answer, a click running
	 * `press`, or `open` when it has none; a right click runs `open`, and a wheel notch `wheel` while it
	 * is not in hand. Under the cursor it names the handle (`Caption`) and says what the mouse does to
	 * it (`hint`, "Drag to move · Right-click for settings" unless given).
	 */
	function StageHandleArea(props: {
		handle: CStageHandle<number>
		open: () => void
		press?: () => boolean
		wheel?: (step: number) => void
		hint?: string
	}): React.ReactElement
}
