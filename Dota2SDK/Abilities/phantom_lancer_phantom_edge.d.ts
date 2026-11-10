// AUTO-GENERATED - do not edit.
declare class phantom_lancer_phantom_edge extends Ability {
	public GetBaseAOERadiusForLevel(_level: number): number
	/** How far off the attacked unit the rush starts from: `max_distance`, the Scepter's in it. */
	public get Range(): number
	/** How near the attacked unit stands for no rush to start: `min_distance`. */
	public get MinDistance(): number
	/**
	 * Whether an attack at a unit `distance` off starts the rush, by the distance alone: within
	 * `min_distance`..`max_distance`. Measured: from 961 off, Phantom Lancer walked on an attack order
	 * and rushed at 800 from ~830 off - `max_distance` 825 - in melee 1.27 s after the order
	 * (20 October 2026, demo).
	 * @example
	 * const rushes = edge.RushesFrom(hero.Distance2D(target))
	 */
	public RushesFrom(distance: number): boolean
}
