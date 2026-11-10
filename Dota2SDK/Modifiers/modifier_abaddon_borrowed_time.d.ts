// AUTO-GENERATED - do not edit.
declare class modifier_abaddon_borrowed_time extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected readonly DeclaredEvents: EModifierfunction[]
	public PreventsDeath(_damageType: DAMAGE_TYPES): boolean
	public get IsPurgable(): boolean
}
