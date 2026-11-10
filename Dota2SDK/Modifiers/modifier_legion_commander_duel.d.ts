// AUTO-GENERATED - do not edit.
declare class modifier_legion_commander_duel extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsShield(): this is IShield
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
