// AUTO-GENERATED - do not edit.
/**
 * Surge: the unit it is cast on runs as fast as a unit may for `duration`; with Aghanim's Shard
 * it leaves a trail behind that slows and burns enemies in it.
 */
declare class dark_seer_surge extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_dark_seer_surge"
	public IsBuff(): this is IBuff
	/**
	 * Its haste takes Dark Seer into the fight, and its trail of the Shard is laid on his way
	 * there: cast as the fight begins - waiting for his attack range, it went last, after the
	 * Vacuum and the Wall, with him at the target already (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
