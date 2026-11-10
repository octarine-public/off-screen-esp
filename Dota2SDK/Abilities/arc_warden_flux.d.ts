// AUTO-GENERATED - do not edit.
declare class arc_warden_flux extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * Flux deals its damage only as it ticks: `damage_per_second` over each `think_interval`, the
	 * first as it lands, the last as it ends - the unit alone within `search_radius` (with company
	 * it deals none, which is not weighed here).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
