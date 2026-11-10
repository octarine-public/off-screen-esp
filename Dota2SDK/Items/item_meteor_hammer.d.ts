// AUTO-GENERATED - do not edit.
declare class item_meteor_hammer extends Item implements INuke {
	/** The stun lasts `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The meteor stuns the units it lands on. */
	public get AppliesUnitState(): bigint
	/**
	 * The meteor lands `land_time` after the channel ends, not after the cast: the channel's
	 * `MaxChannelTime` and then the fall. The fall shows its particle as the channel ends and lands
	 * `land_time` after it, so a channel never seen - an invisible Riki's - still lands on time. It
	 * was `land_time` alone - a cast timed to a target back
	 * from Astral Imprisonment went as it came back and landed 2.5 s later (21 October 2026, the
	 * hero demo: cast at 5.43, the channel over at 7.43, the stun at 7.93).
	 */
	public GetBaseActivationDelayForLevel(level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	/**
	 * The units the meteor lands on burn `burn_dps_units` a second each `burn_interval` for
	 * `burn_duration`, the first a tick after it lands, the last as it ends - a building
	 * `burn_dps_buildings` (`TickBonus`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public TickBonus(target: Unit): number
}
