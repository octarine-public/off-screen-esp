// AUTO-GENERATED - do not edit.
/**
 * Spectral Slug, Muerta's with the Shard: a bullet at an enemy that knocks it back and turns it
 * ethereal for `duration` - no attack hits it, it lands none - taking more magical damage
 * (`bonus_spell_damage_pct`); the bullet's own `damage` lands on that form.
 */
declare class muerta_spectral_slug extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** The form: attack immune and disarmed, as Decrepify's. */
	public get AppliesUnitState(): bigint
	public get IsAmplifier(): boolean
	/** Its target goes ethereal for the bullet's amplification: the form is not a control it lays. */
	public get MakesEthereal(): boolean
	/** Its target goes ethereal, its magic resistance cut (`bonus_spell_damage_pct`): magical damage lands harder. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Landed on an enemy first, the form cuts its magic resistance by `bonus_spell_damage_pct`
	 * percent, only the strongest such cut on a unit counting (`EtherealAmplification`): the
	 * magical damage of `ability` after it lands harder by its difference from the cut on `target`
	 * now - as the bullet's own (`GetRawDamage`).
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** The bullet's `damage` lands on the form it lays: harder by the form's cut (`AmplificationOf`). */
	public GetRawDamage(target: Unit): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
