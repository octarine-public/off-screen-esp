// AUTO-GENERATED - do not edit.
/**
 * A Psionic Trap laid by Templar Assassin: it charges from the moment it is laid, its damage, its
 * slow and, with the Scepter, its silence growing to the full over `trap_max_charge_duration`,
 * and springs on her Trap or its own Self Trap.
 */
declare class npc_dota_templar_assassin_psionic_trap extends Unit {
	/** The Psionic Trap of the hero that laid it: its radius and its charge live there. */
	public get PsionicTrap(): Nullable<Ability>
	/** Seconds since it was laid, by its own modifier; none before the game shows it. */
	public get Age(): number
	/**
	 * Seconds until it is fully charged; none once it is.
	 * @example
	 * const worthIt = trap.ChargedIn === 0 // its damage and slow at the full
	 */
	public get ChargedIn(): number
	/**
	 * Whether `position` lies within the area it springs over.
	 * @example
	 * const under = trap.Covers(enemy.Position)
	 */
	public Covers(position: Vector3): boolean
}
