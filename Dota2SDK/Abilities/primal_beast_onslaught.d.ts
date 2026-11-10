// AUTO-GENERATED - do not edit.
declare class primal_beast_onslaught extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * How far the charge `caster` winds up runs if it is let go now: `max_distance` times its power,
	 * which grows from `base_power` to the whole over `max_charge_time` of windup; none out of the
	 * windup. Measured with the release given by hand (20 October 2026, demo): 0.53 s of windup ran
	 * 720 (696 by this), 1.03 s ran 1280 (1254), a windup out to `chargeup_time` the whole 2000 -
	 * the release takes a frame to come, the charge runs a hair farther.
	 * @example
	 * const reaches = onslaught.ChargeReach(hero) >= hero.Distance2D(enemy)
	 */
	public ChargeReach(caster: Unit): number
	public get AppliesUnitState(): bigint
}
