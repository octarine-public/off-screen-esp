// AUTO-GENERATED - do not edit.
/**
 * Abyssal Blade's passive: Skull Basher's - its bonus damage and its chance bash, whose own cooldown
 * the item does not show (its cooldown is its active's) - and its slow resistance.
 */
declare class modifier_item_abyssal_blade extends modifier_item_cranium_basher {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected get ItemName(): string
	/** Always: the bash's cooldown is not the item's, a chance it may have run out counted. */
	protected get BashReady(): boolean
	protected GetSlowResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
