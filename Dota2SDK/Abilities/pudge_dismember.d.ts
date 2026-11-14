// AUTO-GENERATED - do not edit.
declare class pudge_dismember extends Ability {
	/**
	 * The pull of `unit` from the game time `since` to `until` at the latest: toward `toward` -
	 * where Pudge stands, channelling - `pull_units_per_second` a step every tick from the one it
	 * came on, while it is further than `pull_distance_limit` from him, middle to middle.
	 */
	public PullOf(unit: Unit, toward: Vector3, since: number, until: number): Nullable<Motion>
	/**
	 * Dismember deals its damage only as it ticks, while Pudge channels: `dismember_damage` plus
	 * `strength_damage` of his strength a second, over the channel, split into its `ticks`, the
	 * first as it lands, the last a tenth of a second before the channel ends - the server's code
	 * thinks every (channel - 0.1) / (ticks - 1) s (server.dll, `CDOTA_Modifier_Pudge_Dismember`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
