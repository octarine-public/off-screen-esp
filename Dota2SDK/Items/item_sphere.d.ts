// AUTO-GENERATED - do not edit.
/**
 * Linken's Sphere: a passive block of its bearer's, and a cast at an allied hero - not at the bearer
 * himself, the game refuses that - that hands him a shell taking the next spell cast at him a
 * Linken's Sphere would take (`BlocksTargetedSpells`) for `block_cooldown`.
 */
declare class item_sphere extends Item {
	public get BlocksTargetedSpells(): boolean
	/** Its shell stays on the ally `block_cooldown`. */
	public GuardDuration(_target: Unit): number
	/** At an allied hero other than its bearer. */
	public MayAimAt(target: IPredictionTarget): boolean
}
