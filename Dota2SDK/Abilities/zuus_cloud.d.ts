// AUTO-GENERATED - do not edit.
declare class zuus_cloud extends Ability implements INuke {
	/** The cloud strikes with Lightning Bolt: it holds for the bolt's ministun. */
	protected get HoldingAbility(): Nullable<string>
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(_level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** The cloud lands nothing at once: its strikes are its ticks (`DamageOverTime`). */
	public GetBaseDamageForLevel(_level: number): number
	/**
	 * The cloud strikes with Lightning Bolt at its level as it forms and every
	 * `cloud_bolt_interval` while it lasts (`cloud_duration`), at the enemy closest to it within
	 * `cloud_radius`: the bolt's damage and Static Field's share of the unit's health then
	 * (`modifier_zuus_static_field.HealthShare`); none after a unit walks out. Its strikes at units
	 * closer to it and attacks breaking it are not counted.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
	public get CastRange(): number
	/**
	 * Seconds between the cloud's bolts: the first strikes as it is cast, the next only on a unit
	 * still within its radius by then (21 October 2026, demo: Sand King stunned 0.04 s after
	 * the cast and again 2.5 s later).
	 * @example
	 * const stays = enemy.MoveSpeed * nimbus.StrikeInterval < nimbus.AOERadius
	 */
	public get StrikeInterval(): number
}
