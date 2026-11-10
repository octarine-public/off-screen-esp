// AUTO-GENERATED - do not edit.
declare class item_flask extends Item implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_flask_healing"
	public GetHealthRestore(_target: Unit): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
