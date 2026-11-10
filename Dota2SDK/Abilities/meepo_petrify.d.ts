// AUTO-GENERATED - do not edit.
/**
 * Dig: the Meepo burrows for `duration` - out of the game, invulnerable, healing - and can do
 * nothing meanwhile.
 */
declare class meepo_petrify extends Ability {
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Underground the Meepo is out of the game, invulnerable. */
	public get AppliesUnitState(): bigint
	/** The states are the Meepo's own, not a hold of a target. */
	public get StatesOnCaster(): boolean
}
