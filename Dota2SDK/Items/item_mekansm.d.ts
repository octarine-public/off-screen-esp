// AUTO-GENERATED - do not edit.
declare class item_mekansm extends Item implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_item_mekansm_noheal"
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
