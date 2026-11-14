// AUTO-GENERATED - do not edit.
declare class item_royal_jelly extends Item implements IHealthRestore<Unit>, IManaRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly ManaRestoreModifierName = "modifier_royal_jelly_regen"
	public readonly HealthRestoreModifierName = "modifier_royal_jelly_regen"
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetMaxChargesForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
