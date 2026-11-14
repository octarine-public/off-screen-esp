// AUTO-GENERATED - do not edit.
declare class treant_natures_grasp extends Ability {
	/**
	 * The vines deal their damage only as they tick, on the units in them: `damage_per_second` a
	 * second over each quarter second for `vines_duration` and half a second after, as their aura
	 * lingers, the first a tick after they latch, the last as that ends; none after a unit walks
	 * out. The quarter and half seconds are not in the data.
	 * The 0.25 s between ticks is the server's own: `CDOTA_Modifier_Treant_NaturesGrasp_Damage`
	 * thinks every 0.25 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * How fast the vines grow out: one every `vine_spawn_interval` along the line, every
	 * `creation_interval` - 175 per 0.1s, 1750, not the wiki's 1400. Cast 300 ahead, the vines
	 * still grew 175-1400 off Treant, to the end of his range (21 October 2026, demo): the point
	 * sets only the line's direction.
	 */
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
