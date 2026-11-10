// AUTO-GENERATED - do not edit.
/**
 * Last Word: a debuff of `debuff_duration` on its target, which silences it for `duration` and
 * deals its damage as it runs out (`GetRawDamage`) - 4 s after the cast (Sand King, 21 October
 * 2026, demo: `modifier_silencer_last_word` at 1.03 s,
 * `modifier_silencer_last_word_disarm` at 5.03 s). Cast again while it is on, it only renews it.
 */
declare class silencer_last_word extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_silencer_last_word"
	public IsDebuff(): this is IDebuff
	public GetBaseDamageForLevel(level: number): number
	/**
	 * `damage` and `int_multiplier` for each point of Intelligence Silencer has over `target`, when
	 * the curse goes off: as its timer ends (`GetBaseActivationDelayForLevel`) or sooner, as the
	 * target casts. Its silence lands first, so Brain Drain's `damage_pct` more on a target not
	 * silenced yet - on one silenced already Brain Drain's modifier adds it.
	 */
	public GetRawDamage(target: Unit): number
	/** The curse goes off `debuff_duration` after it lands, unless the target casts first. */
	public GetBaseActivationDelayForLevel(level: number): number
}
