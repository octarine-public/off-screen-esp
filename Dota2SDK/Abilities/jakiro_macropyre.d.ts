// AUTO-GENERATED - do not edit.
declare class jakiro_macropyre extends Ability {
	public get DamageType(): DAMAGE_TYPES
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	/**
	 * The fire burns the units on its path while it lasts: `damage` a second over each
	 * `burn_interval`, the first a `burn_interval` after it lands. Each lays a burn on the unit for
	 * `linger_duration` more, its own time (`Modifier.DamageUntil`); a unit walking out before the
	 * first is not burnt at all.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The fire lies down its whole path at once: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
