// AUTO-GENERATED - do not edit.
declare class ringmaster_strongman_tonic extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_ringmaster_strongman_tonic_buff"
	public GetHealthRestore(_target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
