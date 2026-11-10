// AUTO-GENERATED - do not edit.
declare class modifier_dawnbreaker_converge extends Modifier implements IDebuff {
	/** Seconds the trail's debuff stays on a unit after it walks off; not in the data. */
	public static readonly Linger = 1
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The hammer's fire trail ticks on the unit while it stays on it (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The trail strikes the unit `burn_damage` a second each `burn_interval` from when it steps on,
	 * while the trail lasts (`flare_debuff_duration`) and its debuff lingers after - the last as
	 * that ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
