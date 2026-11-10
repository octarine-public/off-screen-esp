// AUTO-GENERATED - do not edit.
declare class warlock_golem_permanent_immolation extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The burn of the golem's aura, for as long as the unit stays within `aura_radius`:
	 * `aura_damage` a second over each `tick_interval` - the first a whole interval after the unit
	 * comes in, each later one on that unit's own time. Its debuff
	 * (`modifier_warlock_golem_permanent_immolation_debuff`) outlasts the unit walking out by its
	 * own duration.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
