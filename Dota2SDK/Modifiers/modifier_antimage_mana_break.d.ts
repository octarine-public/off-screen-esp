// AUTO-GENERATED - do not edit.
declare class modifier_antimage_mana_break extends Modifier {
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public PostDataUpdate(): void
	/** The physical damage of the mana the hit burns, after the attack's outgoing damage. */
	protected GetProcAttackFeedback(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
