// AUTO-GENERATED - do not edit.
declare class abyssal_underlord_firestorm extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The waves fall on the units within `radius`: `wave_count` of them - `shard_wave_count_bonus`
	 * more with the Shard - each `wave_damage`, `wave_interval` apart - a quarter sooner with the
	 * Shard (`shard_wave_interval_reduction`) - the first as it lands; none after a unit walks out.
	 * Each lays a burn of its own (`BesideOverTime`, `modifier_abyssal_underlord_firestorm_burn`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * The burn each wave lays on a unit within `radius`: `burn_damage` percent of its maximum
	 * health a tick, a tick each `burn_interval` from the first wave, the last as it ends,
	 * `burn_duration` after the last wave that reached the unit - both a quarter sooner with the
	 * Shard.
	 */
	protected BesideOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
