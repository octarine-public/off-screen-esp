// AUTO-GENERATED - do not edit.
declare class pudge_meat_hook extends Ability implements INuke {
	public readonly ConsecutiveHits: number
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	/**
	 * The hook stops at the first unit on its way, allied or not, and at a rune: it brings the rune
	 * back instead of the target behind it.
	 */
	public get CollisionFlags(): CollisionFlag
	public get CollisionTeam(): CollisionTeam
	/**
	 * The data names no flags of what the hook affects, but the game's hook does not affect
	 * ancient creeps: it neither takes one nor stops at it, and flies on through.
	 */
	public get TargetFlagsMask(): DOTA_UNIT_TARGET_FLAGS
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/**
	 * With the Shard the hook deals `distance_to_damage` percent of the way it drags a unit too: a
	 * share each frame as it pulls it in at `hook_speed`, for the frames the drag to Pudge takes
	 * (`TickChance`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Whether the drag still pulls `target` the frame `tick` after the hit: a frame's way of it for
	 * each frame until it reaches Pudge, hull to hull, but the last.
	 */
	public TickChance(target: Unit, tick: number): number
}
