// AUTO-GENERATED - do not edit.
declare class phoenix_dying_light extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The burn of Phoenix's aura, for as long as the unit stays within `radius`: `damage_pct`
	 * percent of the health Phoenix is missing now, a second, over each `tick_interval` - the first
	 * a whole interval after the unit comes in, each later one on that unit's own time - as magical
	 * damage, which the data leaves out and the game's tooltip names. Its debuff
	 * (`modifier_phoenix_dying_light_debuff`) outlasts the unit walking out by its own duration.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
