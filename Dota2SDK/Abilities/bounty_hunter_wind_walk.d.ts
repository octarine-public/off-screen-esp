// AUTO-GENERATED - do not edit.
/**
 * Shadow Walk: Bounty Hunter fades for `fade_time` and walks hidden and faster until he attacks or
 * casts. The attack that ends it stuns its target (`stun_duration`); a spell or an item cast ends
 * it with no stun - Shuriken Toss, Blink Dagger, Scythe of Vyse did, cast during the fade too -
 * but Track (`KeepsInvisibility`). An attack landing in the fade neither ends it nor stuns: the
 * next one after the fade did (19 October 2026, demo).
 */
declare class bounty_hunter_wind_walk extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_bounty_hunter_wind_walk"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	/**
	 * Cast as the fight begins: Bounty Hunter walks in hidden and faster, and his first attack
	 * stuns. Waiting for his attack range it went only there, after Track and Shuriken Toss - the
	 * stun 3.3 s into the fight from 700 (19 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public get RevealStunDuration(): number
	public GetBaseActivationDelayForLevel(level: number): number
}
