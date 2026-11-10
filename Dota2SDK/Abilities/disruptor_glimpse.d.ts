// AUTO-GENERATED - do not edit.
/**
 * Glimpse: a hero sent back where it stood 4 seconds before - set down there once its travel ends,
 * free to act on its way.
 */
declare class disruptor_glimpse extends Ability {
	/**
	 * Once cast, its damage, its silence and the way back land on a unit that went into a cyclone
	 * meanwhile; a unit already invulnerable it is not cast at.
	 */
	public get HitsInvulnerable(): boolean
	/**
	 * The damage a Glimpse surely deals: `min_damage` - more by `damage_to_distance_pct` of the
	 * way the unit is sent back, up to `max_damage`, which its past positions would tell.
	 */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Where a Glimpse sets `unit`, an enemy of the owner, down while it is on its way there; none
	 * else. The game shows the spot and the travel on the end's particle, as the Glimpse takes.
	 * @example
	 * const spot = glimpse.ReturnOf(enemy)
	 * if (spot !== undefined) {
	 * 	kineticField.UseAbility(spot)
	 * }
	 */
	public ReturnOf(unit: Unit): Nullable<Vector3>
	/**
	 * Game time a Glimpse sets `unit`, an enemy of the owner, down at its spot (`ReturnOf`) - the
	 * latest one, past too: once the unit is back, the time it came back. -Infinity for none seen.
	 */
	public ReturnTime(unit: Unit): number
}
