// AUTO-GENERATED - do not edit.
declare class grimstroke_ink_creature extends Ability {
	/** The creature silences the unit it latches onto for `latch_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The creature latched on: `damage_per_second` over each `tick_interval` for `latch_duration`,
	 * the first as it latches, none as it ends, then `pop_damage` as it ends. The pop is counted as
	 * if no attack killed the creature first. The target's status resistance shortens it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
