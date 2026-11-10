// AUTO-GENERATED - do not edit.
declare class luna_eclipse extends Ability implements INuke {
	/**
	 * Eclipse rains Lucent Beams on the enemies around Luna: a nuke of her area, though its data
	 * names allies its targets. Read by that, it was a buff on her that waited for her attack range
	 * - from 700 it went 1.4 s after Lucent Beam, at 375 of the target instead of 675 (20 October
	 * 2026, demo).
	 */
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The beams: `beams` of them, `beam_interval` apart, the first as it is cast, each Lucent Beam's
	 * damage (`TickBonus`) at a unit it picks (`TickChance`); none after a unit walks out of
	 * `radius`.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** A beam strikes for Lucent Beam's damage. */
	public TickBonus(target: Unit): number
	/**
	 * Chance the beam `tick` strikes `target` where it stands: each picks one of the enemy heroes
	 * and creeps within `radius` of Luna at random, none more than `hit_count` times - the one
	 * alone there surely by its `hit_count`, then none.
	 */
	public TickChance(target: Unit, tick: number): number
	/**
	 * With the Scepter Eclipse is cast at a unit - an ally, Luna herself - its beams following it,
	 * or at a point, 2500 away: both took in the demo (20 October 2026).
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
