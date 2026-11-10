// AUTO-GENERATED - do not edit.
/**
 * Venomous Gale: a line of poison that strikes every enemy it passes for `strike_damage` and lays
 * `modifier_venomancer_venomous_gale` - its poison ticks and slows for `duration`. Cast again while
 * it is on, it only renews it: with the cooldown talent it is back before the poison is off
 * (21 October 2026, demo: the modifier on Sand King 0.3 s after the cast from 700).
 */
declare class venomancer_venomous_gale extends Ability implements INuke, IDebuff {
	public readonly DebuffModifierName = "modifier_venomancer_venomous_gale"
	public get SkillshotRange(): number
	public IsNuke(): this is INuke
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The poison after the strike: `tick_damage` every `tick_interval`, the first a tick after it
	 * lands, the last as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
