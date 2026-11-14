// AUTO-GENERATED - do not edit.
declare class morphling_adaptive_strike_agi extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	/** The strike stuns what it hits, the longer the more strength Morphling has over agility. */
	public get AppliesUnitState(): bigint
	/**
	 * The stun on `target`: `stun_min` to `stun_max` as Morphling's strength over his agility goes
	 * over the ratio the strike scales by, cut by the target's status resistance.
	 */
	public GetAppliedDuration(target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
