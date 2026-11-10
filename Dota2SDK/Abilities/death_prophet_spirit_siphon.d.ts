// AUTO-GENERATED - do not edit.
/**
 * Spirit Siphon: a debuff that drains its target for `haunt_duration` while it stays within the
 * cast range and `siphon_buffer` of Death Prophet - it marks the unit with
 * `modifier_death_prophet_spirit_siphon_slow`. A unit that wears it takes no second one, whoever
 * cast it: the game refuses the cast (`dota_hud_error_spirit_siphon_already_haunting`), so a charge
 * goes only at a unit not drained yet - a second order at a drained Chaos Knight cast nothing and
 * kept the charge (20 October 2026, demo). With Aghanim's Shard a siphon held for
 * `shard_consecutive_siphon_duration` fears its target for `shard_fear_duration`, once.
 */
declare class death_prophet_spirit_siphon extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_death_prophet_spirit_siphon_slow"
	public IsDebuff(): this is IDebuff
	/**
	 * The siphon deals its damage only as it drains: `damage` a second over each quarter second,
	 * the first a quarter second after it lands, the last as it ends (`haunt_duration`), while the
	 * link holds. The quarter second is not in the data, which gives `damage` a second.
	 * The 0.25 s between ticks is the server's own: `CDOTA_Modifier_DeathProphet_SpiritSiphon`
	 * thinks every 0.25 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
