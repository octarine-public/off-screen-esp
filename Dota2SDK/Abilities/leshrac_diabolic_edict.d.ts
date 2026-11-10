// AUTO-GENERATED - do not edit.
declare class leshrac_diabolic_edict extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The explosions around Leshrac: `num_explosions` of them, the first as it is cast, the rest
	 * spread over its `AbilityDuration` but a tick - the server's code thinks every (duration - a
	 * tick) / (explosions - 1) s (server.dll, `CDOTA_Modifier_Leshrac_Diabolic_Edict`), 0.2 s and a
	 * little for 40 in 8 s - `damage` each at a unit it picks (`TickChance`); none after a unit
	 * walks out of `radius`.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance an explosion strikes `target` where it stands: each picks one of the enemy heroes,
	 * creeps and buildings within `radius` of Leshrac and their hull at random - surely the one
	 * alone there.
	 */
	public TickChance(target: Unit, _tick: number): number
}
