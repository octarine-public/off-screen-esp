// AUTO-GENERATED - do not edit.
declare class modifier_dazzle_nothl_projection_soul_debuff extends Modifier implements IDebuff, IBuff {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	public UnitPropertyChanged(changed?: boolean): boolean
	protected GetAbsoluteNoDamageMagical(): [number, boolean]
	protected GetAbsoluteNoDamagePhysical(): [number, boolean]
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	public get IsPurgable(): boolean
}
