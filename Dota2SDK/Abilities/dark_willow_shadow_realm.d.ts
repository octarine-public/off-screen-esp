// AUTO-GENERATED - do not edit.
declare class dark_willow_shadow_realm extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_dark_willow_shadow_realm_buff"
	public IsBuff(): this is IBuff
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Its attacks reach `attack_range_bonus` farther: its fight starts that far out. Waiting for her
	 * attack range alone, the realm went from 521, not 695 (20 October 2026, demo).
	 */
	public get AttackRangeBonus(): number
	/** In the realm Dark Willow is immune to attacks and no enemy can target her. */
	public get AppliesUnitState(): bigint
	/** The states are Dark Willow's own. */
	public get StatesOnCaster(): boolean
	/** She is in the realm `fade_time` after the cast. */
	public GetBaseActivationDelayForLevel(level: number): number
	/** She stays in the realm its `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
}
