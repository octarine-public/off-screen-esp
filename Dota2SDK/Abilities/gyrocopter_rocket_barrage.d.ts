// AUTO-GENERATED - do not edit.
declare class gyrocopter_rocket_barrage extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The rockets while it lasts (`barrage_duration`): one each `rocket_interval`, the first a
	 * rocket after the cast, the last as it ends, `rocket_damage` each at a unit it picks
	 * (`TickChance`); none after a unit walks out of `radius`.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance a rocket strikes `target` where it stands: each picks one of the enemy heroes and
	 * creeps within `radius` of Gyrocopter and their hull at random - surely the one alone there.
	 */
	public TickChance(target: Unit, _tick: number): number
}
