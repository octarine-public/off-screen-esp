// AUTO-GENERATED - do not edit.
declare class ringmaster_impalement extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The bleed after the dagger: `bleed_health_pct` percent of a hero's maximum health a second
	 * over each `tick_interval`, the first a tick after it lands, the last as it ends
	 * (`bleed_duration`). Creeps bleed `bleed_creep_dps` instead, which is not weighed here. The
	 * target's status resistance shortens it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
}
