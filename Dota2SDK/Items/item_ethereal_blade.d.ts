// AUTO-GENERATED - do not edit.
declare class item_ethereal_blade extends Item implements INuke {
	public get DamageType(): DAMAGE_TYPES
	public IsNuke(): this is INuke
	/** Its ethereal target takes no physical damage. */
	public GuardsDamageOf(type: DAMAGE_TYPES): boolean
	public get IsAmplifier(): boolean
	/** Its target goes ethereal for the blast's amplification: the form is not a control it lays. */
	public get MakesEthereal(): boolean
	/** Its target goes ethereal, its magic resistance cut (`ethereal_damage_bonus`): magical damage lands harder. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Landed on an enemy first, the form cuts its magic resistance by `ethereal_damage_bonus`
	 * percent, only the strongest such cut on a unit counting (`EtherealAmplification`): the
	 * magical damage of `ability` after it lands harder by its difference from the cut on `target`
	 * now - as the blast's own (`GetRawDamage`).
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The blast: `blast_damage_base` and `blast_stat_multiplier` times the sum of its owner's
	 * attributes, landing on an enemy gone ethereal by it first - its magic resistance cut by
	 * `ethereal_damage_bonus` percent, only the strongest such cut on a unit counting
	 * (`AmplificationOf`).
	 */
	public GetRawDamage(target: Unit): number
	/** Its blast slows an enemy by `blast_movement_slow` percent for `duration`; an ally it only turns ethereal. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
