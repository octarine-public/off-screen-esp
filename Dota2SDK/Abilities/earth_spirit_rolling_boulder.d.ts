// AUTO-GENERATED - do not edit.
/**
 * Rolling Boulder: after `delay` Earth Spirit rolls the way to the click, `distance` far at
 * `speed`, stopping at the first enemy hero he meets and stunning it. A Stone Remnant on his way
 * speeds the roll up to `RockSpeed` and sends it `RockReach` far - one that Geomagnetic Grip pulls
 * to him meets him on its way (`RemnantOnWay`, `TimeTo`).
 */
declare class earth_spirit_rolling_boulder extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetRawDamage(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	public get AppliesUnitState(): bigint
	public get CastRange(): number
	/**
	 * Whether Earth Spirit rolls now - from the cast to the end of the roll: what else he casts
	 * meanwhile waits for it.
	 */
	public get IsRolling(): boolean
	public GetBaseCastRangeForLevel(level: number): number
	/** How fast the roll goes once it ran into a remnant: `rock_speed`. */
	public get RockSpeed(): number
	/**
	 * How far the roll goes through a remnant on its way: its distance `rock_distance_multiplier`
	 * times. A roll from 862 off met the remnant Geomagnetic Grip pulled from under Legion
	 * Commander and reached him - stunned 1.23 s after the remnant was called (21 October 2026,
	 * demo).
	 */
	public get RockReach(): number
	/** Game time the roll of the cast under way sets off, `delay` after it; `Infinity` with none. */
	public get SetsOffAt(): number
	/**
	 * The remnant a roll cast now toward `to` runs into, or none: the nearest along its way within
	 * the roll's radius of it - one standing, met within the roll's own distance, or one
	 * Geomagnetic Grip pulls to Earth Spirit, which comes to meet the roll.
	 * @example
	 * const remnant = roll.RemnantOnWay(enemy.Position)
	 * const reach = remnant === undefined ? roll.CastRange : roll.RockReach
	 */
	public RemnantOnWay(to: Vector3): Nullable<EarthSpiritStone>
	/**
	 * Seconds from a cast now until the roll toward `to` has gone `distance`: `delay`, then its
	 * speed - `RockSpeed` past `remnant` on its way (`RemnantOnWay`). A pulled remnant meets the
	 * roll on its way to Earth Spirit.
	 */
	public TimeTo(to: Vector3, distance: number, remnant: Nullable<EarthSpiritStone>): number
	/**
	 * Seconds from a cast now until the roll toward `to` has gone `distance`, as Geomagnetic Grip
	 * pulls a remnant from `from` to Earth Spirit in the roll's delay: the roll goes first, the
	 * remnant and the grip in its delay - silence 0.23 s, stun 1.10 s from 862 off; the remnant
	 * and the grip before the roll: silence 0.20 s, stun 1.23 s (21 October 2026, demo).
	 * @example
	 * const arrives = roll.TimeToPulled(enemy.Position, hero.Distance2D(enemy), enemy.Position)
	 */
	public TimeToPulled(to: Vector3, distance: number, from: Vector3): number
}
