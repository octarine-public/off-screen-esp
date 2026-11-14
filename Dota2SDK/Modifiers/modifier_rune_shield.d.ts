// AUTO-GENERATED - do not edit.
declare class modifier_rune_shield extends Modifier implements IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly ShieldModifierName: string
	public get StackCount(): number
	public get CurrentShield(): number
	public GetTexturePath(small?: boolean): string
	public IsShield(): this is IShield
	public AddModifier(): boolean
}
