// AUTO-GENERATED - do not edit.
declare class modifier_phantom_lancer_phantom_edge_boost extends Modifier implements IBuff {
	protected readonly DeclaredEvents: EModifierfunction[]
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	/**
	 * The rush at the unit attacked: a cast ends it - a Spirit Lance 0.2 s in took the boost off,
	 * Phantom Lancer stood 645 off on foot (20 October 2026, demo).
	 */
	public get IsCharge(): boolean
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetMoveSpeedAbsolute(): [number, boolean]
	protected GetEvasionConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
