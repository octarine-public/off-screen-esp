// AUTO-GENERATED - do not edit.
/**
 * Vendetta: Nyx Assassin turns invisible at once (no fade) and walks faster until he attacks or
 * casts; the attack that ends it deals `bonus_damage` more and breaks the target. A spell cast ends
 * it with no bonus: Impale cast 0.37 s after it took the buff off him, and no
 * `modifier_nyx_assassin_vendetta_break` came on the target (20 October 2026, demo).
 */
declare class nyx_assassin_vendetta extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_nyx_assassin_vendetta"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	/**
	 * Cast as the fight begins: Nyx walks in hidden and faster, and his first attack deals the
	 * bonus. Waiting for his attack range as any buff on himself, it went only by the target -
	 * from 750 3.2 s into the fight, past Impale's stun (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public get RevealBonusDamage(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
