// AUTO-GENERATED - do not edit.
/**
 * Starbreaker: cast toward a point, Dawnbreaker spins `duration` walking straight ahead at
 * `movement_speed` - through units, not turning - her swipes catching whom she passes within
 * `swipe_radius`, then smashes `smash_distance_from_hero` ahead of her, stunning within
 * `smash_radius`, `duration` after the cast; a cast order meanwhile is dropped (`IsWindingUp`).
 * With the Shard a walk order steers her: she walks where ordered at her speed less
 * `shard_movement_penalty`%, still facing the way she cast it - the smash comes down that way of
 * her (`SteeredInWindup`, `SteerFor`).
 */
declare class dawnbreaker_fire_wreath extends Ability {
	public GetBaseCastPointForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/**
	 * Damage of the spin at `target` where it stands, cast toward it: her attack and
	 * `swipe_damage` for each of its strikes that reach it (`StrikesAt`).
	 */
	public GetDamage(target: Unit): number
	/**
	 * How many of the spin's `total_attacks` strikes reach `target` where it stands, cast toward
	 * it: the swipes evenly over `duration` from where she walks then (`SpinSpeed`) within
	 * `swipe_radius`, the last strike the smash `SmashAhead` within `smash_radius` - the unit's hull
	 * counted.
	 */
	public StrikesAt(target: Unit): number
	public GetBaseRangeForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** The smash lands once the spin is through. */
	public GetBaseActivationDelayForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * How far ahead of where Dawnbreaker casts it the smash's centre lands: her walk in the spin
	 * and the smash's distance from her.
	 * @example
	 * const centre = caster.Position.Extend2D(target.Position, wreath.SmashAhead)
	 */
	public get SmashAhead(): number
	/**
	 * How fast she walks in the spin: `movement_speed`; with the Shard her own speed less
	 * `shard_movement_penalty`%, no slower than that.
	 */
	public get SpinSpeed(): number
	/**
	 * Where she walks in her spin, into `out`, for the smash to come down on `at`:
	 * `smash_distance_from_hero` short of it along the way she faces.
	 * @example
	 * if (wreath.IsWindingUp && wreath.SteeredInWindup) {
	 * 	hero.MoveTo(wreath.SteerFor(enemy.Position, spot))
	 * }
	 */
	public SteerFor(at: Vector3, out: Vector3): Vector3
	/** With the Shard: a walk order steers her spin, it does not end it. */
	public get SteeredInWindup(): boolean
	/** The radius of the smash, around its centre (`SmashAhead`). */
	public get SmashRadius(): number
	/** Not while her Celestial Hammer is out: the game turns the cast down till it is back. */
	public get CanBeUsable(): boolean
	/** Dawnbreaker spins: a cast ordered meanwhile is dropped, a move is done after the smash. */
	public get IsWindingUp(): boolean
}
