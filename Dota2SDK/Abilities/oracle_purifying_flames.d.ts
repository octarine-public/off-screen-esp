// AUTO-GENERATED - do not edit.
declare class oracle_purifying_flames extends Ability implements IHealthRestore<Unit>, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsNuke(): this is INuke
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthRestore(_target: Unit): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
