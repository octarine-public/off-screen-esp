// AUTO-GENERATED - do not edit.
declare class winter_wyvern_winters_curse extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The curse holds its target `duration` - longer by every enemy it turns on the target, up to
	 * `max_duration`, which is not weighed.
	 */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** Its target stands frozen, stunned, under the curse's aura. */
	public get AppliesUnitState(): bigint
}
