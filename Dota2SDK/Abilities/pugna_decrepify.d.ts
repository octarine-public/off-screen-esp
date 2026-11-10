// AUTO-GENERATED - do not edit.
declare class pugna_decrepify extends Ability {
	public get AppliesUnitState(): bigint
	/** The data calls its targets custom: a unit of either side, read as `CanTarget` reads a custom team. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep, as `CanTarget` reads a custom type. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
	/** Its banished unit takes no physical damage. */
	public GuardsDamageOf(type: DAMAGE_TYPES): boolean
	public get IsAmplifier(): boolean
	/** An enemy it banishes takes more magical damage (`bonus_spell_damage_pct`): its magic resistance is cut. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Cast at an enemy first, the form cuts its magic resistance by `bonus_spell_damage_pct`
	 * percent, only the strongest such cut on a unit counting (`EtherealAmplification`): the
	 * magical damage of `ability` after it lands harder by its difference from the cut on `target`
	 * now.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
}
