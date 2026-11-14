// AUTO-GENERATED - do not edit.
/**
 * Snakebite: a bite of `base_damage` that lays `modifier_venomancer_snakebite` - its toxin ticks
 * for `duration`. Cast again while it is on, it only renews it (21 October 2026, demo: the
 * modifier on Sand King as the cast went).
 */
declare class venomancer_snakebite extends Ability implements INuke, IDebuff {
	public readonly DebuffModifierName = "modifier_venomancer_snakebite"
	public IsNuke(): this is INuke
	public IsDebuff(): this is IDebuff
	/** Initial bite damage; the toxin adds `tick_damage` per second on top of it. */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The toxin after the bite: `tick_damage` a second over each `damage_interval`, the first a
	 * tick after it lands, the last as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
