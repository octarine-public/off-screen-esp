// AUTO-GENERATED - do not edit.
declare class modifier_pudge_flesh_heap_block extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/** Its block is of each blow alone, never spent (`damage_block`). */
	public get BlockOfEachHit(): number
	public get IsPurgable(): boolean
}
