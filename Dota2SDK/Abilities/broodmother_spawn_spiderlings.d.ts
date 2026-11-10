// AUTO-GENERATED - do not edit.
declare class broodmother_spawn_spiderlings extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** Its hit slows the unit by `movement_speed` percent for `slow_duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
