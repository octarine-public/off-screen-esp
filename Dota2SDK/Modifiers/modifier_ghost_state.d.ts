// AUTO-GENERATED - do not edit.
declare class modifier_ghost_state extends Modifier implements IBuff, IShield, IDebuff {
	public readonly DebuffModifierName: string
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public PreventsDeath(damageType: DAMAGE_TYPES): boolean
	public IsDebuff(): this is IDebuff
}
