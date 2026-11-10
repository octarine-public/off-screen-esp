// AUTO-GENERATED - do not edit.
declare class abaddon_death_coil extends Ability implements IHealthRestore<Unit>, IHealthCost, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public get ProjectileAttachment(): string
	public get HealthCost(): number
	public IsNuke(): this is INuke
	public IsHealthCost(): this is IHealthCost
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthRestore(_target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
}
