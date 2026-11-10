// AUTO-GENERATED - do not edit.
declare class modifier_tiny_insurmountable extends Modifier {
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public PostDataUpdate(): void
	protected GetStatusResistanceStacking(): [number, boolean]
	protected GetSlowResistanceStacking(): [number, boolean]
	/** Tiny's slow resistance cuts his attack slows too, unless broken. */
	protected GetSlowResistanceAppliesToAttacks(): [number, boolean]
	protected UpdateSpecialValues(): void
}
