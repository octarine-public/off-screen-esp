// AUTO-GENERATED - do not edit.
declare class modifier_weaver_swarm_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The beetle on the unit attacks it while it lives (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/** Its ability's attacks for the swarm's `duration` from when the beetle latched. */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
