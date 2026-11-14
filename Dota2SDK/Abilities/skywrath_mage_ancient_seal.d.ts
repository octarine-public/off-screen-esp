// AUTO-GENERATED - do not edit.
declare class skywrath_mage_ancient_seal extends Ability {
	public get AppliesUnitState(): bigint
	public get IsAmplifier(): boolean
	/** The sealed enemy takes more magical damage (`resist_debuff`): its magic resistance is cut. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Cast at an enemy first, the seal cuts its magic resistance by `resist_debuff` percent
	 * (`ResistCutAmplification`): the magical damage of `ability` after it lands harder by as much.
	 * Not on a creep, whose resistance the seal leaves, nor on one sealed already - the seal renews.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
}
