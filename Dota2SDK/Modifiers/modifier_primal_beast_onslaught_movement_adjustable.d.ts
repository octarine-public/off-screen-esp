// AUTO-GENERATED - do not edit.
declare class modifier_primal_beast_onslaught_movement_adjustable extends Modifier implements IBuff {
	protected readonly DeclaredEvents: EModifierfunction[]
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	/**
	 * Onslaught's charge: a Pulverize given in it stopped it 256 off the target, which it never
	 * struck (20 October 2026, demo).
	 */
	public get IsCharge(): boolean
	public get ChargeTakesInstant(): boolean
	protected GetDisableTurning(): [number, boolean]
}
