// AUTO-GENERATED - do not edit.
declare class ember_spirit_immolation extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The burn of Ember Spirit's aura, for as long as the unit stays within `radius`: `damage` a
	 * second over each `tick_interval`, the first a whole interval after the unit comes in - none
	 * as it does - each later one on that unit's own time. Its debuff
	 * (`modifier_ember_spirit_immolation_debuff`) outlasts the unit walking out by its own duration.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
