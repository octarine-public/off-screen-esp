// AUTO-GENERATED - do not edit.
declare class modifier_spirit_breaker_charge_of_darkness extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	/**
	 * Charge of Darkness: Spirit Breaker runs at the target till he bashes it. A Nether Strike given
	 * 0.2 s into it took the charge off, its stun never landing (21 October 2026, demo).
	 */
	public get IsCharge(): boolean
	/** Bulldoze given in the charge left it on (21 October 2026, demo). */
	public get ChargeTakesInstant(): boolean
	public UnitPropertyChanged(changed?: boolean): boolean
	public get IsPurgable(): boolean
}
