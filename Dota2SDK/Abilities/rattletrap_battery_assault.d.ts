// AUTO-GENERATED - do not edit.
declare class rattletrap_battery_assault extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The shrapnel deals its damage only as it ticks, while it lasts (`duration`): one each
	 * `interval`, the first as it is cast, the last as it ends, `damage` each at a unit it picks
	 * (`TickChance`); none after a unit walks out of its radius.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance a shot strikes `target` where it stands: each picks one of the enemy heroes and creeps
	 * within its radius of Clockwerk and their hull at random - surely the one alone there; every
	 * one of them while Overclocking lasts.
	 */
	public TickChance(target: Unit, _tick: number): number
}
