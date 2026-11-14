// AUTO-GENERATED - do not edit.
declare class modifier_marci_bodyguarded extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public GetTotalConstantBlock(): [number, boolean]
	public get IsPurgable(): boolean
}
