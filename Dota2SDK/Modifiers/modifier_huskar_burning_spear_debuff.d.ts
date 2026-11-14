// AUTO-GENERATED - do not edit.
declare class modifier_huskar_burning_spear_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** Its ability's ticks for each of its stacks (`DamageTicks.PerStack`). */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get IsPurgable(): boolean
}
