// AUTO-GENERATED - do not edit.
declare class modifier_weaver_swarm_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** Its ability's attacks for the swarm's `duration` from when the beetle latched. */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get IsPurgable(): boolean
}
