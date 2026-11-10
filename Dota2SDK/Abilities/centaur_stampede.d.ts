// AUTO-GENERATED - do not edit.
declare class centaur_stampede extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_centaur_stampede"
	public IsBuff(): this is IBuff
	/**
	 * Its haste takes Centaur into the fight and its trample slows whom he runs through: cast as
	 * the fight begins, not once he is in it - waiting for his attack range, it went last, after
	 * the stomp and Double Edge (19 October 2026).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/** With Aghanim's Scepter the stampede lets its allies path through everything; without it the slow applies no state. */
	public get AppliesUnitState(): bigint
}
