// AUTO-GENERATED - do not edit.
declare class juggernaut_blade_fury extends Ability implements INuke {
	/**
	 * The spin harms the enemies within its radius every tick, `blade_fury_damage` a second for
	 * its `duration` - a nuke, cast at nothing: its debuff immunity is Juggernaut's own, no hold of
	 * what it hits.
	 */
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The spin strikes the enemies within `blade_fury_radius` of Juggernaut while it lasts
	 * (`duration`): `blade_fury_damage` a second over each `blade_fury_damage_tick`, the first as
	 * it begins; none after a unit walks out. Blade Dance's critical strikes are not weighed.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
	/** Its cast lays a basic dispel on Juggernaut. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
