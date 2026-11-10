// AUTO-GENERATED - do not edit.
declare class bane_fiends_grip extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * The grip deals its damage only as it ticks, while Bane channels: `fiend_grip_damage` a second
	 * over each `fiend_grip_tick_interval`, the first as it lands, none as the channel ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
