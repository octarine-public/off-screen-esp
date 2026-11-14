// AUTO-GENERATED - do not edit.
declare class ogre_magi_fireblast extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseCastPointForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * Multicast's blasts after the first, at the same target: up to three, `multicast_delay`
	 * apart, each the blast's own damage (`TickBonus`), each going by Multicast's chance
	 * (`TickChance`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** Each further blast is one more of the blast itself. */
	public TickBonus(target: Unit): number
	/** The further blast `tick`, from 0, goes when Multicast casts it `tick + 2` times. */
	public TickChance(_target: Unit, tick: number): number
}
