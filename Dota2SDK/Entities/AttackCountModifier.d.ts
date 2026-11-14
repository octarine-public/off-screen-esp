// AUTO-GENERATED - do not edit.
/**
 * A modifier that makes its parent count attacks rather than damage, as the game's own do for
 * Nether Ward, Tombstone, couriers and the like: neither spells nor the damage of an attack hurt
 * the parent, each attack takes a fixed number of HP off it instead ({@link GetAttackHitDamage}),
 * and its health bar is split into segments ({@link Unit.HealthBarPips}).
 *
 * A hero here is a hero that is not an illusion; every other attacker - creeps, towers,
 * illusions - hits as {@link OtherHit}.
 */
declare class AttackCountModifier extends Modifier {
	/**
	 * HP an attack of `attacker`'s takes off the parent.
	 * @example
	 * const hits = Math.ceil(unit.HP / courierBuff.GetAttackHitDamage(hero))
	 */
	public GetAttackHitDamage(attacker: Unit): number
	/** Segments of the parent's health bar: one per {@link SegmentHealth} of its max HP */
	public get HealthBarPips(): number
}
