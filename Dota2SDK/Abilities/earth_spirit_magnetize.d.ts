// AUTO-GENERATED - do not edit.
declare class earth_spirit_magnetize extends Ability {
	public get CastRange(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Magnetize deals its damage only as it ticks: `damage_per_second` over each half of its
	 * `damage_interval`, the first that long after it lands, the last as it ends
	 * (`damage_duration`); a remnant's explosion renews its time, not its ticks'. The half is the
	 * server's code: the modifier's OnCreated starts thinking every `damage_interval` times 0.5
	 * (server.dll, `CDOTA_Modifier_EarthSpirit_Magnetize`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * How near a magnetized enemy a Stone Remnant has to stand to take Magnetize from it:
	 * `rock_search_radius`.
	 */
	public get RemnantSearchRadius(): number
	/**
	 * How far around a remnant that took Magnetize the enemies get it: those without it take it,
	 * those with it have it renewed - `rock_explosion_radius`. A remnant called 150 off a
	 * magnetized Legion Commander gave it to Gyrocopter 393 off the remnant and renewed both to the
	 * full 6 s, 0.27 s after the call; once only - the remnant stayed (21 October 2026, demo).
	 * @example
	 * const spreads = magnetize.SpreadRadius
	 * stoneCaller.UseAbility(magnetized.Position.Extend2D(enemy.Position, spreads / 2))
	 */
	public get SpreadRadius(): number
}
