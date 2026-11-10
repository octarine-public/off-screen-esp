// AUTO-GENERATED - do not edit.
declare class modifier_ghost_state extends Modifier implements IBuff, IShield, IDebuff {
	public readonly DebuffModifierName: string
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected readonly DeclaredEvents: EModifierfunction[]
	public PreventsDeath(damageType: DAMAGE_TYPES): boolean
	protected GetMagicalResistanceDecrepifyUnique(): [number, boolean]
	protected UpdateSpecialValues(): void
	public IsDebuff(): this is IDebuff
}
