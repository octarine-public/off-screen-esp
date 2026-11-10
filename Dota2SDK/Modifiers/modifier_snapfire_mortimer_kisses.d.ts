// AUTO-GENERATED - do not edit.
declare class modifier_snapfire_mortimer_kisses extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/**
	 * Not a run at the target, but like one a cast of any spell or item ends it: a Blink given
	 * 0.07 s into the bombardment took the modifier off, the ultimate cooling with one glob out
	 * (21 October 2026, demo). Snapfire keeps her place meanwhile.
	 */
	public get IsCharge(): boolean
	protected GetDisableTurning(): [number, boolean]
	public get IsPurgable(): boolean
}
