// AUTO-GENERATED - do not edit.
/**
 * Living Armor: of each blow a source a player controls deals the unit - `damage_block_threshold`
 * or more - it blocks what is left of its block, the stacks the game sends (`damage_block_base`
 * at first), and each blow it blocks takes `damage_block_loss` off it; at none it ends.
 */
declare class modifier_treant_living_armor extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	/** What is left of its block (`ShieldLedger`). */
	public get BlockOfEachHit(): number
	/** Each blow it blocks takes `damage_block_loss` off its block. */
	public get BlockLossPerHit(): number
	/** `heal_per_second`, beyond its parent's regeneration. */
	public get HealPerSecond(): number
}
