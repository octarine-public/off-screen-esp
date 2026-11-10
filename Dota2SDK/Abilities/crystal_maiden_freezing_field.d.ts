// AUTO-GENERATED - do not edit.
declare class crystal_maiden_freezing_field extends Ability {
	/**
	 * With Aghanim's Scepter (`can_move`) the field is no channel: it goes on around Crystal Maiden
	 * while she walks - slowed by `shard_self_movement_speed_slow_pct` - attacks and casts, and no
	 * walk, cast, stop or hold ends it; the data still calls it channelled. Measured in the demo
	 * (20 October 2026): neither the ability nor the hero channelling, the field's modifier on
	 * through a walk, Crystal Nova, Frostbite, a stop and a hold, 100 move speed of 280.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public ExplosionRadius(): number
	/**
	 * Seconds between two explosions of the field: its duration over `num_explosions`, Aghanim's
	 * Scepter adding `shard_bonus_explosion` percent of them (server.dll: 100 a field, 120 with it).
	 * @example
	 * const nextIn = field.ExplosionInterval // 0.1 s, 0.083 s with the Scepter
	 */
	public get ExplosionInterval(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The explosions over the channel: `num_explosions` - `shard_bonus_explosion` percent more with
	 * the Scepter - evenly apart from its start, none as it ends, each `damage` at the units it
	 * strikes by chance (`TickChance`), none surely; the Scepter's Frostbite beside them
	 * (`BesideOverTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * The Scepter's field Frostbites a unit inside `radius` once it has been there
	 * `frostbite_delay` seconds, on the frame after: Frostbite's own ticks from then
	 * (`crystal_maiden_frostbite.DamageOverTime`); none with no Scepter, `frostbite_delay` below
	 * zero.
	 */
	protected BesideOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance the explosion `tick` - from the first - strikes `target` where it stands, the caster
	 * where it stands: the explosions go round the quarters from the east - 0 to 90 degrees, then
	 * 90 to 180 - each at a random angle in its quarter and a random distance from
	 * `explosion_min_dist` to `explosion_max_dist`, striking the units within `explosion_radius` of
	 * it and their hull.
	 */
	public TickChance(target: Unit, tick: number): number
}
