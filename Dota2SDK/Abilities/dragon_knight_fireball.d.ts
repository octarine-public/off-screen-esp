// AUTO-GENERATED - do not edit.
declare class dragon_knight_fireball extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The fire after the blow burns the units within `radius` while it lasts (`duration`): `damage`
	 * a second over each `burn_interval`, the first a `burn_interval` after it lands, and on for
	 * `linger_duration` after a unit walks out or the fire goes - its burn's time - the last as that
	 * ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
