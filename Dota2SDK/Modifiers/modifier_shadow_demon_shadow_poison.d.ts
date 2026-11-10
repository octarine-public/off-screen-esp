// AUTO-GENERATED - do not edit.
declare class modifier_shadow_demon_shadow_poison extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/**
	 * The stacks up to which each one doubles the damage Poison Release deals (`max_multiply_stacks`);
	 * each one past them adds only `bonus_stack_damage`.
	 */
	public get DoublingStacks(): number
	public get RawBonusDamage(): number
	public IsDebuff(): this is IDebuff
	protected readonly DeclaredEvents: EModifierfunction[]
	/** The poison deals its stacks' deferred damage as it ends (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * The deferred damage of its stacks (`RawBonusDamage`) as it ends: its ability's rule, less the
	 * share a further hit would add, which its ability's `TickBonus` puts on each tick.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
