// AUTO-GENERATED - do not edit.
declare class modifier_hoodwink_sharpshooter_windup extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	/**
	 * How charged the arrow is, 0 to 1: the server keeps the power in hundredths in the stack count,
	 * and fires the arrow with the power it has once released - at 1 it is charged in full.
	 */
	public get Power(): number
	public get RemainingDamage(): number
	public IsBuff(): this is IBuff
	public get IsPurgable(): boolean
}
