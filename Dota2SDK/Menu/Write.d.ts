// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Writes `${value}px` when the number differs from the last one written. */
	function WritePx(element: HTMLElement, name: string, value: number): void
	/**
	 * Whether `value` differs from the number last marked on `element` under `name`; marks it with
	 * `value` either way and writes nothing to the document. For a run of writes that all follow one
	 * number. The writers keep their own marks in the same place, so give `name` a prefix no property
	 * has, such as `m:`. A new element answers `true`.
	 *
	 * @example
	 * if (MenuSDK.MarkValue(cell, "m:size", size)) {
	 * 	MenuSDK.WritePx(cell, "width", size)
	 * 	MenuSDK.WritePx(cell, "height", size)
	 * }
	 */
	function MarkValue(element: HTMLElement, name: string, value: number): boolean
	/** Writes `${value}${suffix}` when the number differs from the last one written. */
	function WriteFmt(element: HTMLElement, name: string, value: number, suffix: string): void
	/** Writes a ready-made value when it differs from the last one written. */
	function WriteStyle(element: HTMLElement, name: string, value: string): void
	/**
	 * Scrolls the element's content `value` px to the left when that differs from the last scroll
	 * written. RmlUi holds it inside the overflow the content has at the time, so a run whose text
	 * is being replaced is scrolled from 0.
	 */
	function WriteScrollLeft(element: HTMLElement, value: number): void
	/**
	 * Shows or hides an absolutely positioned element; `display` is what showing means for it.
	 * Hiding writes `visibility` alone and leaves `display` in place: visibility does not dirty
	 * layout, so a marker that flaps with projection costs no document reformat — only its
	 * first show pays one.
	 */
	function WriteShown(element: HTMLElement, shown: boolean, display?: string): void
	/**
	 * Places an element by one `transform` write, gated on all its numbers together: a translation,
	 * a rotation about the element's `transform-origin` and a scale about it. On hosts with the fast
	 * path the primitives cross as numbers and skip the transform parser.
	 *
	 * The transform is where RmlUi keeps a fraction of a pixel - it rounds layout offsets and box
	 * sizes before they draw. A scale other than 1 needs a host with `RegisterSizedImageRegion`; one
	 * predating it takes the translation and the angle alone.
	 * @example
	 * WritePlacement(icon, 10.25, 20.5, 0, 18.6 / 64, 18.6 / 64)
	 */
	function WritePlacement(element: HTMLElement, x: number, y: number, angle: number, scaleX?: number, scaleY?: number): void
	/**
	 * Writes text by replacing the element's text node, never by rewriting markup: RmlUi hands a
	 * removed child back to the caller instead of freeing it, so a readout that ticks every frame
	 * would strand one node per frame. The stale node goes to the renderer's destroy queue.
	 */
	function WriteText(element: HTMLElement, text: string): void
	/**
	 * Points an image element at `path` resampled to the `width` by `height` screen pixels it is drawn
	 * at, so it stays sharp at that size; the same arguments again write nothing. `radius`, in pixels,
	 * is baked into raster art and kept on the element for a source that cannot be baked. `region`
	 * shows only that rectangle of the file, in its own pixels, and clears the element where the host
	 * cannot cut it; so does an empty `path`. Pass the element to {@link ReleaseSizedArt} once the
	 * document lets go of it.
	 *
	 * @example
	 * MenuSDK.WriteSizedArt(icon, ability.TexturePath, size, size)
	 * MenuSDK.WriteSizedArt(icon, sheet, 32, 32, 0, { x: 32, y: 0, width: 32, height: 32 })
	 */
	function WriteSizedArt(element: HTMLElement, path: string, width: number, height: number, radius?: number, region?: ImageRegion): void
	/**
	 * Hands the source an element took from {@link WriteSizedArt} back to the host, for an element the
	 * document has let go of. An element still standing keeps its own until its artwork or its box
	 * changes: the source it draws from is the one it names, and freeing that while it is on screen
	 * leaves it naming artwork nothing holds.
	 */
	function ReleaseSizedArt(element: HTMLElement): void
}
