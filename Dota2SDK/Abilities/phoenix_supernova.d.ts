// AUTO-GENERATED - do not edit.
/**
 * Supernova: Phoenix hides in an egg - invulnerable, out of the game - that burns round it and,
 * unless broken, bursts as its `modifier_phoenix_sun` runs out (`AbilityDuration`), stunning the
 * enemies within `aura_radius` for `stun_duration`.
 */
declare class phoenix_supernova extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The invulnerability is Phoenix's own, in the egg. */
	public get StatesOnCaster(): boolean
	/** The burst stuns the enemies round the egg. */
	public get HitUnitState(): bigint
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * The sun burns the enemies within `aura_radius` while it lasts (`AbilityDuration`) and half a
	 * second after, as its aura lingers: `damage_per_sec` a second over each `tick_interval`, the
	 * first a tick after it; none after a unit walks out. The half second is not in the data.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
