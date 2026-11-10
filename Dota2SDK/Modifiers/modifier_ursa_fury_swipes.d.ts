// AUTO-GENERATED - do not edit.
declare class modifier_ursa_fury_swipes extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/** Each hit lays a stack its next ones count (`IModifierParams.HitsAhead`). */
	public get CountsHits(): boolean
	/**
	 * `damage_per_stack` per Fury Swipes stack of Ursa's on the target - the stack this hit lays
	 * counted (none while Ursa is broken), and one for each of her hits landing before it
	 * (`IModifierParams.HitsAhead`) - after the attack's outgoing damage.
	 */
	protected GetProcAttackBonusDamagePhysical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
