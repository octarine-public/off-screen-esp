// AUTO-GENERATED - do not edit.
declare class spirit_breaker_nether_strike extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/**
	 * `damage` and the Greater Bash it strikes with - by Spirit Breaker's speed then, Bull Rush's
	 * `hero_movespeed_percent` faster (`creep_movespeed_percent` at a creep), as the strike's stun
	 * comes first.
	 */
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
}
