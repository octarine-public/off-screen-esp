// AUTO-GENERATED - do not edit.
declare class crystal_maiden_frostbite extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * Frostbite deals its damage only as it ticks: `damage_per_second` over each `tick_interval`,
	 * the first a tick after it lands, the last as it ends. The target's status resistance shortens
	 * it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
