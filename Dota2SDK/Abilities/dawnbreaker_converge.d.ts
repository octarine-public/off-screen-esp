// AUTO-GENERATED - do not edit.
/**
 * Converge: Dawnbreaker and her hammer out fly to each other and meet between - she at
 * `travel_speed_pct` of the hammer's speed, the two meeting midway.
 */
declare class dawnbreaker_converge extends Ability {
	/**
	 * Where a Converge cast now sets Dawnbreaker down, into `out`; false while no hammer of hers is
	 * out (`dawnbreaker_celestial_hammer.HammerAt`).
	 * @example
	 * if (converge.LandingAt(spot) && spot.Distance2D(enemy.Position) <= attackRange) {
	 * 	hero.CastNoTarget(converge)
	 * }
	 */
	public LandingAt(out: Vector3): boolean
	/**
	 * The part of the way to her hammer she flies before they meet (`LandingAt`): a half, as fast
	 * as it.
	 * @example
	 * const throwTo = (distance - fightRange) / converge.Share
	 */
	public get Share(): number
}
