// AUTO-GENERATED - do not edit.
/**
 * Ethereal Jaunt: Puck teleports to his Illusory Orb in flight, at once - no cast point, no cost
 * (`Orb`). The game shows it whether an orb flies or not (20 October 2026: still shown 4 s after
 * the orb was gone); with none there is nowhere to go.
 */
declare class puck_ethereal_jaunt extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public IsBlink(): boolean
	/**
	 * His orb in flight, the latest of them, or none. The game ties the orb to Puck by nothing
	 * it networks: it is an `npc_dota_base` of no owner carrying `modifier_projectile_vision` of
	 * its own (20 October 2026). So: one of his team's such units made since an orb of his could
	 * have been thrown - within its flight, `max_distance` at `orb_speed`.
	 * @example
	 * const orb = jaunt.Orb
	 * if (orb !== undefined && orb.Distance2D(enemy) < hero.Distance2D(enemy)) {
	 * 	jaunt.UseAbility()
	 * }
	 */
	public get Orb(): Nullable<Unit>
	/**
	 * The jaunt took once the orb is gone: Puck is at it at once, the orb gone with it - while the
	 * game still showed the jaunt for 0.6 s and more (20 October 2026).
	 */
	public TookSince(orderedAt: number): boolean
	/** Where a jaunt at `landsAt` sets Puck down: at his orb, where it flies now; none without one. */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
