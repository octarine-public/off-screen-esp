// AUTO-GENERATED - do not edit.
declare class warlock_shadow_word extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_warlock_shadow_word"
	public GetHealthRestore(_target: Unit): number
	/**
	 * At an enemy Shadow Word deals its damage only as it ticks: `damage` a second over each
	 * `tick_interval`, the first a tick after it lands, the last as it ends. At an ally it heals
	 * instead (`GetHealthRestore`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
