// AUTO-GENERATED - do not edit.
declare class witch_doctor_voodoo_restoration extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_voodoo_restoration_heal"
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
