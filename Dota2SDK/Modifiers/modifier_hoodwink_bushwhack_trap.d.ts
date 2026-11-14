// AUTO-GENERATED - do not edit.
declare class modifier_hoodwink_bushwhack_trap extends Modifier implements IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/**
	 * The server's check of its states: stunned and blinded while it lasts. Declared, so the stun's
	 * end is the modifier's for sure: learnt from the game, it went unexplained in some nets - the
	 * stun ending at no known time (20 October 2026).
	 */
	public get States(): Nullable<bigint>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/**
	 * The drag to the tree, when the particle naming it came before the net did - in the tick the
	 * net catches, either comes first; the one after it calls `PullToward`.
	 */
	public CreateMotion(): Nullable<Motion>
	/** The net drags the bearer to the tree at `tree` - what its particle names (`hoodwink_bushwhack.PullOf`). */
	public PullToward(tree: Vector3): void
	public get IsStunDebuff(): boolean
}
