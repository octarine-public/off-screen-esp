// AUTO-GENERATED - do not edit.
declare class necrolyte_death_pulse extends Ability implements IHealthRestore<Unit>, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsNuke(): this is INuke
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
