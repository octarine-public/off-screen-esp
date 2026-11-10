// AUTO-GENERATED - do not edit.
declare class brewmaster_fire_permanent_immolation extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The burn of the Fire brewling's aura, for as long as the unit stays within `radius`: `damage`
	 * a second over each tick - the first a whole tick after the unit comes in, each later one on
	 * that unit's own time. Its debuff (`modifier_brewmaster_fire_permanent_immolation`) outlasts
	 * the unit walking out by its own duration.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
