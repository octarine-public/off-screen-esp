// AUTO-GENERATED - do not edit.
declare class modifier_dark_seer_surge_trail extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The Shard's trail ticks on the unit while it stays on it (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The trail strikes a unit on it each `trail_damage_interval` from the moment it steps on,
	 * `trail_damage` a second, magical though the data names no type, while the trail lasts
	 * (`trail_duration`) and a second after it goes or the unit walks off - its debuff's time - the
	 * last as that ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
