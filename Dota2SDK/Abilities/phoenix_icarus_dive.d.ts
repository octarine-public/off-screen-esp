// AUTO-GENERATED - do not edit.
declare class phoenix_icarus_dive extends Ability {
	public get SkillShotType(): ESkillShotType
	/** Units per second along the dive line: the line there and back over the dive's duration. */
	public get Speed(): number
	/** Seconds the loop takes, out and back. */
	public get Duration(): number
	/** How wide the loop is, side to side. */
	public get Width(): number
	/**
	 * Where Phoenix is `elapsed` seconds into a dive from `from` cast at `aim`, into `out`: on the
	 * loop - out on the left of the cast direction, its far end `CastRange` off at half the
	 * duration, back on the right. Measured: cast 562 off a target, the far end 1400 on at 1.03 s
	 * into the dive, 250 aside at a quarter of it (21 October 2026, demo).
	 * @example
	 * const there = dive.PointAt(hero.Position, castPoint, 0.5, new Vector3())
	 */
	public PointAt(from: Vector3, aim: Vector3, elapsed: number, out: Vector3): Vector3
	/**
	 * Where to cast a dive from `from` for its outbound half to run through `to`, into `out`; the
	 * seconds into the dive it passes there. Farther than the loop reaches: at `to`, the far end in
	 * its way, the seconds to that end.
	 * @example
	 * const passes = dive.AimThrough(hero.Position, enemy.Position, castPoint)
	 */
	public AimThrough(from: Vector3, to: Vector3, out: Vector3): number
	public get PredictionStrategy(): IPredictionStrategy
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetTravelTime(from: Vector3, to: Vector3): number
	/**
	 * The burn the dive lays on a unit it touches, once: `damage_per_second` a second over each
	 * `burn_tick_interval` for `burn_duration`, the first a tick after it, none as it ends - only
	 * at a unit its arc touches (`TickChance`), from then (`ReachesAfter`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public TickChance(target: Unit, _tick: number): number
	public ReachesAfter(target: Unit): number
	/**
	 * Seconds after the dive starts that it first touches `target`, cast toward it: Phoenix runs an
	 * ellipse `dash_length` long and `dash_width` wide from where he stands and back over
	 * `dive_duration` (the server's `UpdateHorizontalMotion`), touching a unit within `hit_radius`
	 * and its hull; `Infinity` for none.
	 */
	public TouchesAt(target: Unit): number
}
