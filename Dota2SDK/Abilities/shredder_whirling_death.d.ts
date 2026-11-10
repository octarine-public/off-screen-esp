// AUTO-GENERATED - do not edit.
declare class shredder_whirling_death extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * The whirl's damage to `target`, plus `tree_damage_scale` for each living tree - the map's and
	 * the temporary ones - within `AOERadius` of Timbersaw when `target` is in it and seen.
	 */
	public GetRawDamage(target: Unit): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
}
