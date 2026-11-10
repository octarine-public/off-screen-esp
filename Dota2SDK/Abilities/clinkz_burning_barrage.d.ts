// AUTO-GENERATED - do not edit.
declare class clinkz_burning_barrage extends Ability implements INuke {
	public InternaProjectileSpeed: number
	public IsNuke(): this is INuke
	public GetRawDamage(target: Unit): number
	/** An arrow strikes as Clinkz's attack does: `raw` through the target's armor and blocks. */
	public DamageOf(raw: number, target: Unit, _context?: IDamageContext, _type?: DAMAGE_TYPES): number
	/** Each arrow after the first strikes for its share of the attack (`damage_pct`). */
	public TickBonus(target: Unit): number
	/**
	 * The arrows after the first: `wave_count` over the channel, evenly apart from its start, the
	 * first the blow; none after a unit walks out of their line. The Infernal Shred stacks they add
	 * on the way are not weighed.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
}
