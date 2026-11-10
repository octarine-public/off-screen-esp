// AUTO-GENERATED - do not edit.
declare class modifier_item_diffusal_blade extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/**
	 * The physical damage of the mana the hit burns, an illusion's by its melee or ranged key
	 * (`feedback_mana_burn_illusion_*`).
	 */
	protected GetProcAttackFeedback(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
