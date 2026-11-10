// AUTO-GENERATED - do not edit.
declare class drow_ranger_multishot extends Ability implements INuke {
	public get DamageBlockType(): DAMAGE_TYPES
	public get EndRadius(): number
	public IsNuke(): this is INuke
	public GetRawDamage(_target: Unit): number
	/** An arrow of `rawDamage` at `target`: through its blocks and amplification. */
	public DamageOf(rawDamage: number, target: Unit, _context?: IDamageContext, _type?: DAMAGE_TYPES): number
	/** Each wave after the first strikes for an arrow's damage (`arrow_damage_pct`). */
	public TickBonus(target: Unit): number
	/**
	 * The waves after the first: `wave_count` over the channel, evenly apart from its start, the
	 * first the blow, an arrow of each at a unit in their cone; none after a unit walks out of it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Whether its waves are still being fired. The game shows no channel of it any more - its
	 * channel start stays 0 - and fires the three waves while `modifier_drow_ranger_multishot`
	 * lasts on the caster, about 1.3 s, gone after the last. A walk keeps the waves going (all
	 * three landed on a Drow walking off at 0.4 s); a cast cuts them short - Gust 0.6 s in left
	 * one (20 October 2026). So it holds what a channel holds.
	 */
	public get IsChanneling(): boolean
	public get CastRange(): number
	public get Range(): number
}
