// AUTO-GENERATED - do not edit.
declare class modifier_bane_ichor_of_nyctasha_debuff extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/** Per terror (stack), against a debuff of Bane's or of a unit he owns only. */
	protected GetStatusResistanceStacking(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
