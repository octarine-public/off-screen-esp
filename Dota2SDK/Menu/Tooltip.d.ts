// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Makes `nextOwner` the hovered element with the tooltip `text`, shown after 350 ms in the bubble
	 * and side tooltip styles. In the bubble style a cursor move over 3 dp hides it and restarts the
	 * wait; in the side style it stands beside `anchor` under `title`, and only while `anchor` is
	 * `nextOwner`. Called again for the same owner, it takes the new text without restarting the
	 * wait; a tooltip already shown keeps its old text.
	 */
	function SetHoverTooltip(nextOwner: object, text: string, anchor?: HTMLElement, title?: string): void
	/**
	 * Clears the hover {@link SetHoverTooltip} set for `nextOwner` and hides its tooltip. Does nothing
	 * while another owner holds the hover.
	 */
	function ClearHoverTooltip(nextOwner: object): void
	/**
	 * Shows or hides the hover tooltip for the frame at `now`, in `hrtime` milliseconds. The menu
	 * calls it every frame.
	 */
	function TickTooltip(now: number): void
	/**
	 * Hides the tooltip shown now. While a hover from {@link SetHoverTooltip} is still set, the next
	 * frame can show it again.
	 */
	function HideTooltip(): void
}
