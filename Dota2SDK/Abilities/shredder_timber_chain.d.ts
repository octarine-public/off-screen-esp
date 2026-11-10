// AUTO-GENERATED - do not edit.
/**
 * Timber Chain: the chain flies its whole range the way it is cast, whatever point it is cast at,
 * and latches the first living tree within `LatchRadius` of its line; Timbersaw is pulled onto
 * the tree, harming every enemy within its radius of his way. With no tree on its line the chain
 * comes back and the cast is spent for nothing. Cast 400 off him toward a tree 852 off, it pulled
 * him onto the tree, 0.3 s of flight after the cast point (21 October 2026, the hero demo).
 */
declare class shredder_timber_chain extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** How near the chain's line a tree is for the chain to latch it: the data's `chain_radius`. */
	public get LatchRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The tree a chain cast at it latches whose pull takes Timbersaw within the chain's radius of
	 * `position` on his way - of such, the one nearest `position`, where he lands; none without one.
	 * Cast at another tree, the chain may latch one before it on its line: the tree told is the one
	 * latched. Map trees and temporary ones - a Sprout's - alike.
	 * @example
	 * const tree = chain.ChainTree(enemy.Position)
	 * if (tree !== undefined) {
	 * 	chain.UseAbility(tree.Position)
	 * }
	 */
	public ChainTree(position: Vector3): Nullable<Tree | TempTree>
}
