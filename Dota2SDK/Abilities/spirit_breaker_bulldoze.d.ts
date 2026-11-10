// AUTO-GENERATED - do not edit.
declare class spirit_breaker_bulldoze extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_spirit_breaker_bulldoze"
	public IsBuff(): this is IBuff
	/**
	 * Its speed serves the run in, the Charge of Darkness the fight opens with, and its status
	 * resistance the fight after: cast as the fight begins. Waiting for his attack range, it went
	 * after the Nether Strike, 1.3 s past the Charge (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** Its barrier - a talent's - takes `damage_barrier` of any damage (INCOMING_DAMAGE_CONSTANT); none without it. */
	public BarrierOn(_target: Unit): number
	/** Its barrier stands `duration`. */
	public GuardDuration(_target: Unit): number
}
