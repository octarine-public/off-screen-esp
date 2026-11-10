// AUTO-GENERATED - do not edit.
declare class necrolyte_heartstopper_aura extends Ability {
	/**
	 * The decay of Necrophos's aura, for as long as the unit stays within `aura_radius`:
	 * `aura_damage` percent of its maximum health a second, and with Aghanim's Scepter
	 * `heal_regen_to_damage` percent of his health regeneration, magical, over each tick - the first
	 * a whole tick after the unit comes in, each later one on that unit's own time. It sends no
	 * damage event, so the unit's regeneration never shows it. Its debuff
	 * (`modifier_necrolyte_heartstopper_aura_effect`) outlasts the unit walking out by its own
	 * duration.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
