// AUTO-GENERATED - do not edit.
/**
 * Nature's Call: turns the trees within `area_of_effect` of the point it is cast at into treants,
 * as many as there are, up to `max_treants`; with no tree there it summons none. A Sprout's ring
 * goes as well: cast on one, it took all of its 8 trees for 5 treants and left the unit it held
 * free (demo, 20 October 2026).
 */
declare class furion_force_of_nature extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The most treants one cast summons. */
	public get MaxTreants(): number
	/**
	 * The trees a cast at `position` would turn into treants: the living ones within `AOERadius` of
	 * it, the map's and the temporary ones.
	 * @example
	 * const summons = call.TreesIn(enemy.Position) !== 0
	 */
	public TreesIn(position: Vector3): number
}
