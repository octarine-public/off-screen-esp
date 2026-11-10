// AUTO-GENERATED - do not edit.
declare class phoenix_launch_fire_spirit extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The burn a spirit lays on the units within `radius` where it lands: `damage_per_second` a
	 * second over each `tick_interval` for `duration`, the first a tick after it, none as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * The spirit flies to the point it was launched at and burns around it there: a circle, not a
	 * line. Read as a line, its flight ended a radius (200) and the target's hull short of the
	 * point - the burn expected 0.22 s before it comes (20 October 2026, demo: launched at a target
	 * 670 away, the first spirit burnt it 0.67 s later, 0.67 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
}
