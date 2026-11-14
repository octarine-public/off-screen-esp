// AUTO-GENERATED - do not edit.
/** The Calling: revenants circle `dead_zone_distance` around the point, the area they slow and guard. */
declare class muerta_the_calling extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The damage of a revenant passing through a unit on their ring, each time one does. */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * None at the unit it is cast at: the revenants circle it, `dead_zone_distance` away, touching
	 * only a unit on their ring.
	 */
	public GetDamage(_target: Unit): number
}
