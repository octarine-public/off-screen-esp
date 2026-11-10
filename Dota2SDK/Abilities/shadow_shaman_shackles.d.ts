// AUTO-GENERATED - do not edit.
declare class shadow_shaman_shackles extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseChannelTimeForLevel(level: number): number
	/**
	 * The shackles deal `total_damage` over the channel, a share every `tick_interval`, the first
	 * as they land, none as the channel ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
