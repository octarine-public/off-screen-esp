// AUTO-GENERATED - do not edit.
declare class sven_warcry extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_sven_warcry"
	public IsBuff(): this is IBuff
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Its move speed takes Sven to the target and its armour - the Shard's barrier too - holds the
	 * fight: cast as it begins. Waiting for his attack range, it went 1.8 s after Storm Hammer from
	 * 700, after God's Strength (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/**
	 * Its barrier - the Shard's - takes `base_barrier_amount` and `barrier_per_strength` for each
	 * point of Sven's strength of physical damage (INCOMING_PHYSICAL_DAMAGE_CONSTANT); none without it.
	 */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Its barrier stands `duration`. */
	public GuardDuration(_target: Unit): number
	/** It rallies the heroes of Sven's side within its radius, its barrier on each. */
	public get GuardsAllies(): boolean
}
