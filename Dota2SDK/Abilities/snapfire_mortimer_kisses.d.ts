// AUTO-GENERATED - do not edit.
declare class snapfire_mortimer_kisses extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * How near its caster a glob lands at least (`min_range`): a point nearer is lobbed this far
	 * out the same way - from 250 off a stunned target no glob burnt it (21 October 2026, demo).
	 */
	public get MinRange(): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * A glob's flight: `min_lob_travel_time` at `min_range`, rising evenly to `max_lob_travel_time`
	 * at the cast range.
	 */
	public GetTravelTime(from: Vector3, to: Vector3): number
	/**
	 * The globs as they land where Mortimer aims: `projectile_count` of them evenly over
	 * `duration_tooltip`, `damage_per_impact` each within `impact_radius`; none after a unit walks
	 * out. Their pools beside (`BesideOverTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * The pools of firespit the globs leave: `burn_damage` a second over each `burn_interval` from
	 * the first glob to the last pool's end (`burn_ground_duration`) and `burn_linger_duration`
	 * after a unit leaves them - the pools burn a unit once at a time.
	 */
	protected BesideOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Each glob is lobbed to the point it was aimed at and burns around it there: a circle, not a
	 * line. Read as a line, its flight ended a radius (275) and the target's hull short of the
	 * point - the impact expected 0.23 s before it comes (20 October 2026, demo: from 1260 the first
	 * glob burnt 1.10 s after the cast - 0.97 s the whole way, 0.74 s as a line). The game keeps a
	 * lob between `min_lob_travel_time` and `max_lob_travel_time`, which the flight at
	 * `projectile_speed` does not.
	 */
	public get SkillShotType(): ESkillShotType
}
