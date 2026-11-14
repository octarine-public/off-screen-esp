// AUTO-GENERATED - do not edit.
declare class modifier_primal_beast_onslaught_windup extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	/**
	 * Onslaught's windup: a cast of another spell or item lets the charge go at once, short of the
	 * target - a Rock Throw given 0.6 s in released it (20 October 2026, demo) - but Trample, taken
	 * at once, left it on.
	 */
	public get IsCharge(): boolean
	public get ChargeTakesInstant(): boolean
	public get IsPurgable(): boolean
}
