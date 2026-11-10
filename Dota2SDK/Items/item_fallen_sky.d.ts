// AUTO-GENERATED - do not edit.
declare class item_fallen_sky extends Item implements INuke {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	/** Its impact and burn are magical: the data names no type. */
	public get DamageType(): DAMAGE_TYPES
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
	public GetBaseActivationDelayForLevel(level: number): number
	/** Its cast moves its bearer: up into the sky and down at the point. */
	public get MovesCaster(): boolean
	/**
	 * The fall cast from `from` at `toward`, going at `landsAt`: its bearer comes down at the point
	 * - its cast range that way at most - `land_time` later.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * The units it lands on burn `burn_dps_units` a second each `burn_interval` for
	 * `burn_duration`, the first a tick after it lands, the last as it ends - a building
	 * `burn_dps_buildings` (`TickBonus`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public TickBonus(target: Unit): number
}
