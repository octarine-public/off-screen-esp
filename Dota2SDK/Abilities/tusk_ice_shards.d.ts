// AUTO-GENERATED - do not edit.
/**
 * Ice Shards: a ball of ice to a point, where `shard_count` shards stand up `shard_distance` round
 * it, `shard_angle_step` apart. A unit where a shard stands up is pushed
 * off it: Tusk cast from his attack range found himself outside the ring (21 October 2026, demo).
 */
declare class tusk_ice_shards extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** How far round the point the shards stand: `shard_distance`. */
	public get ShardDistance(): number
}
