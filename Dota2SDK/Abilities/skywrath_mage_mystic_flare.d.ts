// AUTO-GENERATED - do not edit.
/**
 * Mystic Flare: a flare `radius` round at the point, burning the enemy heroes in it for
 * `duration`. With Aghanim's Scepter a second flare goes, centred, on the first enemy hero within
 * `scepter_radius` of the point that stands `radius` or farther from it (`SecondFlareRadius`).
 */
declare class skywrath_mage_mystic_flare extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * How far from the point a second flare of Aghanim's Scepter looks for an enemy hero to land
	 * on - one standing out of the first flare's `AOERadius`, by its middle; 0 without the scepter.
	 * @example
	 * const twice = flare.SecondFlareRadius > 0 && point.Distance2D(enemy.Position) >= flare.AOERadius
	 */
	public get SecondFlareRadius(): number
	/**
	 * Its point is never moved by the humanizer: the flare is small and aimed ahead of the target,
	 * and with the scepter the point decides whom the second flare lands on - one at the target's
	 * edge, out by its middle, takes the target twice; a few units off, once (6 November 2026,
	 * отзыв пользователя: «рандом каст руинит с ультой аганимной»).
	 */
	public get KeepsCastPoint(): boolean
	/**
	 * The flare deals its damage only as it ticks: each `damage_interval` of `duration`, the first a
	 * tick after it lands, the last as it ends, a share of `damage` split among the enemy heroes in
	 * it (`TickBonus`); none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * A tick's damage at `target`, the flare cast on it: `damage` over the ticks of `duration`,
	 * split evenly among the enemy heroes within `radius` of it and their hull.
	 */
	public TickBonus(target: Unit): number
}
