// AUTO-GENERATED - do not edit.
declare class shredder_flamethrower extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
	/**
	 * The flame burns the units before Timbersaw while it lasts (`duration`) and
	 * `debuff_linger_duration` after: `damage_per_second` a second over each half second, the first
	 * as it starts, none as the linger ends. The half second is not in the data.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_Shredder_Flamethrower_Damage`
	 * thinks every 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
