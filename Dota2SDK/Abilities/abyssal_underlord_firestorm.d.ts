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
}
