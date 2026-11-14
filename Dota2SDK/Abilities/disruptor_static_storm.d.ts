// AUTO-GENERATED - do not edit.
declare class disruptor_static_storm extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The storm's silence lands on a unit in a cyclone too; its pulses hurt it only once it is out. */
	public get HitsInvulnerable(): boolean
	/**
	 * The storm's `pulses` over its `duration`, evenly apart, the first a pulse after it forms, none
	 * as it ends, at the units within `radius`: the pulse `k` - from 1 - deals `damage_max` times
	 * `k` times `PulseShare` over `pulses`, rising evenly; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseActivationDelayForLevel(_level: number): number
	public get AppliesUnitState(): bigint
}
