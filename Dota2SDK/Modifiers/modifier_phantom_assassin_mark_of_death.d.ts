// AUTO-GENERATED - do not edit.
declare class modifier_phantom_assassin_mark_of_death extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	public GetCriticalStrikeBonusTarget(params?: IModifierParams): [number, boolean]
	public get IsPurgable(): boolean
}
