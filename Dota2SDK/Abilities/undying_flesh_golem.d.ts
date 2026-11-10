// AUTO-GENERATED - do not edit.
/**
 * Flesh Golem: Undying turns into a golem for `duration` - a buff on himself, cast at nothing and
 * at once: more strength, faster steps, and his attacks slow the target and make it take more
 * damage.
 */
declare class undying_flesh_golem extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_undying_flesh_golem"
	public IsBuff(): this is IBuff
	/**
	 * Its speed takes him in and its strength and slow serve the whole fight: cast as it begins.
	 * Waiting for his attack range, it went after Decay, Soul Rip and Tombstone - from 700 at 2.83 s,
	 * Decay at 0.63 s (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
