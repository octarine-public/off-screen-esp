// AUTO-GENERATED - do not edit.
declare class tinker_deploy_turrets extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * The turrets' missiles after the drop: `turrets_per_drop` turrets firing each
	 * `missile_spawn_interval` for `turret_duration`, in turn - a missile each share of the
	 * interval, the first two of those after the drop (by the measure, not in the data) -
	 * `missile_damage` each at an enemy they pick (`TickChance`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance a missile goes at `target`, the turrets dropped by it: one of the enemy heroes and creeps
	 * within `missile_target_range` of them at random - surely the one alone there.
	 */
	public TickChance(target: Unit, _tick: number): number
}
