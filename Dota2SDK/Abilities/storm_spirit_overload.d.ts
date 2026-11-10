// AUTO-GENERATED - do not edit.
/**
 * Overload: every spell Storm Spirit casts charges his next attack (`modifier_storm_spirit_overload`)
 * - a blast of `overload_aoe` round its target. With Aghanim's Shard it is cast too, at nothing:
 * Electric Rave (`modifier_storm_spirit_electric_rave`) on the allied heroes within
 * `shard_activation_radius`, charging their attacks for `shard_activation_duration`.
 */
declare class storm_spirit_overload extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_storm_spirit_electric_rave"
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * With the Shard a cast at nothing that takes no cast point, not a passive: the game gives
	 * `NO_TARGET | IMMEDIATE` then (server.dll, `CDOTA_Ability_StormSpirit_Overload`). It was the
	 * passive with `NO_TARGET` added - the plan read it as a passive and never cast it (21 October 2026).
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** Electric Rave, with the Shard: a buff of Storm and the allies round him. */
	public IsBuff(): this is IBuff
	/**
	 * Electric Rave lasts the fight's first swings, whatever range: cast as the fight begins, not
	 * held for the target within a radius.
	 */
	public get IsCombatBuff(): boolean
	/**
	 * Whether Storm Spirit's next attack is charged already (`modifier_storm_spirit_overload`): a
	 * spell cast before the swing spends it adds nothing to it.
	 */
	public get Charged(): boolean
}
