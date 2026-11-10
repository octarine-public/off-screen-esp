// AUTO-GENERATED - do not edit.
declare class enchantress_natures_attendants extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_enchantress_natures_attendants"
	public GetHealthRestore(_target: Unit): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
