// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Something a script draws on its preview's stage that the pointer works on where it stands: a
	 * pointer area over it that wears the accent frame while pointed at, held or while its settings are
	 * open, and names it in its tooltip ({@link StageArea} wires the mouse - a click, the wheel, a right
	 * click opening its settings beside the stage). One the hand carries to another of its places is a
	 * {@link CStageHandle}. Where it stands is laid by the script each frame (`Place`), in stage px.
	 *
	 * @example
	 * class ChamsArea extends CStageArea {
	 * 	public Caption(): string { return `${super.Caption()} · ${Localization.Localize(material.Name)}` }
	 * }
	 * // once per frame, while the creep is drawn
	 * chams.Place(left, top, right - left, bottom - top)
	 */
	class CStageArea {
		/** Its settings; the area wears the accent frame while this node's settings are open. */
		public readonly Settings: Node
		/** What its tooltip names it, localized by {@link CStageArea.Caption}. */
		public readonly Title: string
		/** Whether the cursor is over its pointer area. */
		public Hovered: boolean
		/** Where it stands this frame, in stage px. */
		public readonly Area: ScreenRect
		/** The element of its pointer area. */
		public readonly Ref: (element: HTMLElement | null | undefined) => void
		/**
		 * @param Settings its settings, opened beside the stage.
		 * @param Title what its tooltip names it.
		 */
		constructor(
		/** Its settings; the area wears the accent frame while this node's settings are open. */
		Settings: Node, 
		/** What its tooltip names it, localized by {@link CStageArea.Caption}. */
		Title: string)
		/** Whether it is in hand. */
		public get Held(): boolean
		/** What its tooltip names it: its title; a script adds what it reads now after it. */
		public Caption(): string
		/** Lays its pointer area over `x`, `y`, `w`, `h`, in stage px. */
		public Place(x: number, y: number, w: number, h: number): void
		/** Takes its pointer area off the stage, with its tooltip. */
		public Hide(): void
	}
}
