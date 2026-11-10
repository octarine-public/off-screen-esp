// AUTO-GENERATED - do not edit.
declare class shadow_demon_shadow_poison extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The poison's deferred damage, dealt as it ends `AbilityDuration` after the latest hit - each
	 * hit renews it: what a hit adds to it at a unit (`TickBonus`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** What one more stack adds to the deferred damage of the poison on `target` (`StacksDamage`). */
	public TickBonus(target: Unit): number
	/**
	 * The deferred damage of `stacks` stacks: `stack_damage` doubling with each stack up to
	 * `max_multiply_stacks`, and `bonus_stack_damage` for each stack past them.
	 */
	public StacksDamage(stacks: number): number
}
