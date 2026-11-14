// AUTO-GENERATED - do not edit.
/**
 * The shop launcher block at the right of the lower HUD: the quickbuy strip, the shop button,
 * the courier controls and the stash the game folds out beside them.
 */
interface CShop extends CHUDSection {
	/** The whole launcher block. */
	get Block(): Nullable<Rectangle>
	/** The gold bar under the quickbuy strip. */
	get CourierGold(): Nullable<Rectangle>
	/** The strip holding every courier control. */
	get Courier(): Nullable<Rectangle>
	/** The button that selects the courier, the one the F2 hotkey sits on. */
	get CourierSelect(): Nullable<Rectangle>
	/** The courier's speed burst button. */
	get CourierBurst(): Nullable<Rectangle>
	/** The courier's shield button. */
	get CourierShield(): Nullable<Rectangle>
	/** The deliver-items button, the one the F3 hotkey sits on. */
	get CourierDeliver(): Nullable<Rectangle>
	/** The button that opens the shop, which doubles as the gold readout. */
	get ShopButton(): Nullable<Rectangle>
	/** The quickbuy strip, however many rows the game is currently giving it. */
	get Quickbuy(): Nullable<Rectangle>
	/** The sticky item slot at the right of the quickbuy strip. */
	get Sticky(): Nullable<Rectangle>
	/** The button that clears the quickbuy list. */
	get ClearQuickBuy(): Nullable<Rectangle>
	/** The buyback protection toggle. */
	get BuyBackProtection(): Nullable<Rectangle>
	/**
	 * The stash box the game folds out beside the launcher; undefined while it is folded away.
	 *
	 * This is the panel the stash paints itself onto. The container around it reaches far below,
	 * down over the quickbuy strip, so it is no use as the stash's outline.
	 */
	get Stash(): Nullable<Rectangle>
	/** The container the stash slides in and out of, taller than the stash itself. */
	get StashContainer(): Nullable<Rectangle>
	/** The "take all" button of the stash. */
	get StashGrabAll(): Nullable<Rectangle>
	/** One entry per stash slot the game is laying out. */
	get StashSlots(): Nullable<Rectangle>[]
	/** @deprecated the game lays out one strip — read {@link CShop.Quickbuy}. */
	get Quickbuy1Row(): Nullable<Rectangle>
	/** @deprecated the game lays out one strip — read {@link CShop.Quickbuy}. */
	get Quickbuy2Rows(): Nullable<Rectangle>
	/** @deprecated the game lays out one slot — read {@link CShop.Sticky}. */
	get Sticky1Row(): Nullable<Rectangle>
	/** @deprecated the game lays out one slot — read {@link CShop.Sticky}. */
	get Sticky2Rows(): Nullable<Rectangle>
	/** @deprecated the game lays out one button — read {@link CShop.ClearQuickBuy}. */
	get ClearQuickBuy1Row(): Nullable<Rectangle>
	/** @deprecated the game lays out one button — read {@link CShop.ClearQuickBuy}. */
	get ClearQuickBuy2Rows(): Nullable<Rectangle>
	/**
	 * Re-derives every rectangle the section moves itself: where the game paints each panel, and
	 * the stash's paint offset.
	 */
	Refresh(): void
	DebugDraw(): void
}
