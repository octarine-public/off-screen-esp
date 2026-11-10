// AUTO-GENERATED - do not edit.
declare class modifier_lone_druid_spirit_bear_entangle_effect extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/** The root ticks on the unit by itself (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/** Its ability's ticks, the root already on. */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
