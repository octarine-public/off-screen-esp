// AUTO-GENERATED - do not edit.
declare class snapfire_lil_shredder extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_snapfire_lil_shredder_buff"
	public IsBuff(): this is IBuff
	/**
	 * Its attacks are the fight: +300 attack speed and a base attack time of 1.0 for its 5 shots,
	 * cast as the fight begins. Cast third, after the Cookie and Scatterblast, its shots went to
	 * nothing - Mortimer Kisses after them kept Snapfire from attacking (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** The attack range the buff adds while it lasts (`attack_range_bonus`, 400 at level 4). */
	public get AttackRangeBonus(): number
	public GetBaseDamageForLevel(level: number): number
}
