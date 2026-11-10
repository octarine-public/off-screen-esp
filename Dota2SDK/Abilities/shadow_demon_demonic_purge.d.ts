// AUTO-GENERATED - do not edit.
/**
 * Demonic Purge: a debuff for its duration - the target's buffs are stripped as it lands, its
 * walk slowed from `max_slow` down to `min_slow`, and `purge_damage` dealt as it ends. Cast again on
 * it, it only renews the one it carries, and only that one's damage goes: two Scepter charges cast
 * 1 s apart dealt one hit at the end of the second (21 October 2026, demo).
 */
declare class shadow_demon_demonic_purge extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_shadow_demon_purge_slow"
	public IsDebuff(): this is IDebuff
	/** It strips the target's buffs as it lands (a basic dispel): a Ghost Scepter, a Glimmer Cape go. */
	public get DispelsTarget(): boolean
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	/**
	 * The purge deals `purge_damage` as it ends, `AbilityDuration` after it lands - sooner under the
	 * unit's status resistance, as the purge itself is shorter.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
