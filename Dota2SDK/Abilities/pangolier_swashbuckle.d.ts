// AUTO-GENERATED - do not edit.
declare class pangolier_swashbuckle extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** Its cast moves its caster: Pangolier dashes to the vector's start before he slashes. */
	public get MovesCaster(): boolean
	/** The rush cast from `from` at `toward`, starting at `landsAt`: `dash_speed` fast toward the vector's start, `dash_range` that way at most. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * A strike's: `damage` and `attack_damage` percent of Pangolier's attack. One lands as the dash
	 * ends on the unit, the slash's `strikes` after it (`DamageOverTime`).
	 */
	public GetRawDamage(target: Unit): number
	/**
	 * The slash's `strikes` after the dash's, `attack_interval` apart, the first with it - each a
	 * strike's (`TickBonus`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public TickBonus(target: Unit): number
	/**
	 * Whether a cast of it now ends the roll its owner is in - Rolling Thunder, the Shard's
	 * Rollup: the dash takes him out of it. Cast 0.3 s into Rolling Thunder, it ended the roll
	 * as the dash began, before the roll touched anyone (demo, 20 October 2026).
	 * @example
	 * const waits = swashbuckle.EndsRoll
	 */
	public get EndsRoll(): boolean
	public get Range(): number
}
