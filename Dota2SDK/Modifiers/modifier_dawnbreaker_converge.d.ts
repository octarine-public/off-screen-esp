// AUTO-GENERATED - do not edit.
declare class modifier_dawnbreaker_converge extends Modifier implements IDebuff {
	/** Seconds the trail's debuff stays on a unit after it walks off; not in the data. */
	public static readonly Linger = 1
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * The trail strikes the unit `burn_damage` a second each `burn_interval` from when it steps on,
	 * while the trail lasts (`flare_debuff_duration`) and its debuff lingers after - the last as
	 * that ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
