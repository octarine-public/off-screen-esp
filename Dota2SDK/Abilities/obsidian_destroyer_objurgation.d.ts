// AUTO-GENERATED - do not edit.
/**
 * Objurgation: Outworld Destroyer wraps himself in a barrier for `barrier_duration` -
 * `barrier_flat` and `mana_to_barrier` of his mana - cast at nothing and at once; its
 * `bonus_mana` is a passive of its own (`modifier_obsidian_destroyer_objurgation_mana`), on him
 * before any cast. The barrier is the Equilibrium's (`modifier_obsidian_destroyer_equilibrium_barrier`).
 */
declare class obsidian_destroyer_objurgation extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_obsidian_destroyer_equilibrium_barrier"
	public IsBuff(): this is IBuff
	/**
	 * The barrier takes the damage of the fight he opens - it lasts 10 s, past Astral Imprisonment
	 * and the Eclipse after it: cast as the fight begins. Waiting for his attack range, it went after
	 * Astral, at 1.23 s from 700, at 4.37 s with the Shard, 3.43 s after a walk from 1200
	 * (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** Its barrier takes `barrier_flat` and `mana_to_barrier` percent of his mana of damage of any type. */
	public BarrierOn(_target: Unit): number
	/** Its barrier stands `barrier_duration`. */
	public GuardDuration(_target: Unit): number
}
