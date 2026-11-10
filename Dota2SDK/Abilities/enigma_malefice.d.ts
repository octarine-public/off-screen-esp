// AUTO-GENERATED - do not edit.
declare class enigma_malefice extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The instances after the first, which is the blow: `stun_instances` of them in all, `damage`
	 * each, `tick_rate` apart.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
