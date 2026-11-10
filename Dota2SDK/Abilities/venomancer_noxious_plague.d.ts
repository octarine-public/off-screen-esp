// AUTO-GENERATED - do not edit.
/**
 * Noxious Plague: a projectile at an enemy that deals `impact_damage` and lays
 * `modifier_venomancer_noxious_plague_primary` on it for `debuff_duration` - damage over time and a
 * slow; the enemies within `debuff_radius` of it carry `..._secondary`. With Aghanim's Scepter
 * (`mres_reduce`) the primary cuts the target's magic resistance as well, so the nukes after it
 * hit harder (21 October 2026, demo: the primary on Sand King 0.5 s after the cast from 700).
 */
declare class venomancer_noxious_plague extends Ability implements INuke, IDebuff {
	public readonly DebuffModifierName = "modifier_venomancer_noxious_plague_primary"
	public IsNuke(): this is INuke
	public IsDebuff(): this is IDebuff
	/** With the Scepter the plague cuts the magic resistance of the units it infects (`mres_reduce`). */
	public get IsAmplifier(): boolean
	/** An infected enemy takes more magical damage while the Scepter's cut (`mres_reduce`) is on it. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Cast at an enemy first with the Scepter, the plague cuts its magic resistance by `mres_reduce`
	 * percent (`ResistCutAmplification`): the magical damage of `ability` after it lands harder by
	 * as much - not the impact's own, which lands before the plague. Not on one plagued already, by
	 * the primary or a spread - the plague renews.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The plague after its impact: `damage_per_second` percent of the unit's maximum health a
	 * second over each `damage_tick_rate`, the first as it lands, the last as it ends
	 * (`debuff_duration`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
