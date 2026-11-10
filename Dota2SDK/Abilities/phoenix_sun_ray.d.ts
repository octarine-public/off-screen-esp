// AUTO-GENERATED - do not edit.
declare class phoenix_sun_ray extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The ray is a line the moment it starts. */
	public get SkillShotType(): ESkillShotType
	/**
	 * The ray deals its damage only as it ticks, on the units it covers: `base_damage` and
	 * `hp_perc_damage` percent of a unit's maximum health a second over each `tick_interval` for
	 * its `AbilityDuration`, the first a tick after it starts, none as it ends - each tick more by
	 * the share of the duration gone (the server's `DoBeamDamageAndVision`); none after a unit
	 * leaves the ray.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
