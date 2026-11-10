// AUTO-GENERATED - do not edit.
declare class treant_living_armor extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_treant_living_armor"
	public GetHealthRestore(_target: Unit): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetBaseAOERadiusForLevel(level: number): number
	public get CastRange(): number
	/**
	 * Its armour blocks `damage_block_base` of a blow of any type off the unit it is cast at - the
	 * first of the blows it takes, each after less by `damage_block_loss`.
	 */
	public BarrierOn(_target: Unit): number
	/** It stands its `duration`. */
	public GuardDuration(_target: Unit): number
}
