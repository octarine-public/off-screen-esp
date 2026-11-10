// AUTO-GENERATED - do not edit.
declare class omniknight_purification extends Ability implements IHealthRestore<Unit>, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsNuke(): this is INuke
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetBaseDamageForLevel(level: number): number
	/**
	 * With the Shard it goes again at the same unit `recast_delay` after, `recast_effectiveness_pct`
	 * percent as strong - at the enemies then within `radius` of that unit.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** Its damage lands on the enemies round the ally it heals. */
	public get HitsAroundTarget(): boolean
}
