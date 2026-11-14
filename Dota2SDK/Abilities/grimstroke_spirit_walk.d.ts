// AUTO-GENERATED - do not edit.
/**
 * Ink Swell: a buff on an ally - or Grimstroke - for `buff_duration`. Enemies within `radius` of
 * the bearer take ticks of damage meanwhile; as the buff ends, those within it take a burst and a
 * stun, at their full only after `max_threshold_duration` of ticks with an enemy in the radius
 * (`FullSwellTime`): a buff with no enemy by it stuns no one.
 */
declare class grimstroke_spirit_walk extends Ability {
	/**
	 * Seconds of the buff with an enemy within its radius that bring the end's damage and stun in
	 * full (`max_threshold_duration`): the rest of the buff may pass with none by its bearer.
	 */
	public get FullSwellTime(): number
	/**
	 * The share of its bearer's move speed the buff adds (`movespeed_bonus_pct`, 0.2 - 0.35 with the
	 * talent): Grimstroke under it closes on a target a fifth faster.
	 */
	public get SpeedBonus(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The tendrils at the enemies within `radius` of the unit it is cast on while it lasts
	 * (`buff_duration`): `damage_per_tick` each `tick_rate`, the first a tick after it lands, none
	 * as it ends; then the swell as it ends, `max_damage` at a unit near it `max_threshold_duration`
	 * - less for less, which is not weighed. The Shard's `shard_bonus_damage_pct` adds to both.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
