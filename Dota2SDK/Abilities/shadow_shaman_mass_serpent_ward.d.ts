// AUTO-GENERATED - do not edit.
declare class shadow_shaman_mass_serpent_ward extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The wards' hits are their attacks: no spell amplification of Shadow Shaman's counts. */
	public SpellAmplifyOn(): number
	/**
	 * The wards' attacks at the unit they stand by: `ward_count` of them hitting it together, a
	 * volley (`DamageTicks.Volley`) every attack of a ward (`UnitData.SummonedBy`: its attack rate
	 * at its base attack speed), the first after its attack point and a flight from the edge of
	 * `spawn_radius`, for `duration` while the unit stays within their reach; each hit as
	 * `TickBonus` gives it, physical.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * A ward's hit at `target`: `ward_damage_tooltip`, more at a creep and less at a hero by what
	 * the abilities of the ward itself give (`creep_damage_bonus`, `hero_damage_penalty` percent:
	 * its piercing attack).
	 */
	public TickBonus(target: Unit): number
}
