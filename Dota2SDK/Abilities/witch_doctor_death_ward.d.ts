// AUTO-GENERATED - do not edit.
/**
 * Death Ward: a ward at a point that shoots the enemy heroes in its reach (`WardReach`) for the
 * channel; with Aghanim's Scepter its shots bounce within `bounce_radius`.
 */
declare class witch_doctor_death_ward extends Ability {
	/**
	 * How far the ward shoots from where it stands: its attack range with the level's
	 * `bonus_attack_range` - the game's `attack_range_tooltip` (600/625/650). A ward cast where the
	 * target is out of it shoots nothing (21 October 2026: from 527 off the target aio held it as
	 * out of its cast range of 500, the ward's reach left unused).
	 */
	public get WardReach(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The ward's shots are its attacks: no spell amplification of Witch Doctor's counts. */
	public SpellAmplifyOn(): number
	/**
	 * The ward's shots at the hero it stands on: `damage` each, pure, one every attack of the ward
	 * (`UnitData.SummonedBy`: its attack rate at its base attack speed, the first after its attack
	 * point) for the channel, the one fired as it ends too, while the hero stays within its reach -
	 * a hero it keeps shooting while it lives.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
