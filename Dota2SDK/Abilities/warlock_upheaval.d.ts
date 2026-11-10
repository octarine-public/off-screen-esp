// AUTO-GENERATED - do not edit.
declare class warlock_upheaval extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The current deals its damage only as it ticks, while Warlock channels: each
	 * `damage_tick_interval`, the first a tick in, none as the channel ends, `base_damage` and
	 * `damage_per_second` for each second so far, up to `max_damage`; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
