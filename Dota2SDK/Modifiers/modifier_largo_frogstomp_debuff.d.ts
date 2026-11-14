// AUTO-GENERATED - do not edit.
declare class modifier_largo_frogstomp_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * Its ability's stomps still to come, timed by the froglings' thinker (`AuraOwner`): the first
	 * `delay` after they landed, then every `stomp_interval`, `total_ticks` in all.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
