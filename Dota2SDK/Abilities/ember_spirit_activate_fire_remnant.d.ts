// AUTO-GENERATED - do not edit.
/**
 * Activate Fire Remnant: Ember Spirit dashes to his remnant nearest the point cast at, through
 * every remnant lying by it, each blasting as he passes: remnants sent together go off on one
 * activation (`RemnantNear`, `RemnantsNear`). He is invulnerable on his way, from the cast going off
 * till he stands by the remnant, dashing at `speed`: a guard and a blink to a remnant lying
 * (`MovesTo`, `MotionOn`).
 */
declare class ember_spirit_activate_fire_remnant extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get CastRange(): number
	/** It takes Ember to a remnant of his (`MovesTo`). */
	public get MovesCaster(): boolean
	/** Ember dashes invulnerable. */
	public get AppliesUnitState(): bigint
	/** The invulnerability is Ember's own on his dash. */
	public get StatesOnCaster(): boolean
	/** Cast for its invulnerability, it goes at his remnant lying nearest him; none with none. */
	public StatesSpotOf(caster: Unit): Nullable<Vector3>
	/** He is invulnerable for his dash to his remnant lying nearest `target`, him. */
	public GuardDuration(target: Unit): number
	/** The spots of his remnants lying, each a cast there dashes him to. */
	public MovesTo(caster: Unit): Nullable<readonly Vector3[]>
	/** His dash at `speed` to his remnant lying nearest `toward`; none with none. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * His remnant lying nearest `position` within `radius` of it, or none: what a cast at
	 * `position` dashes to.
	 * @example
	 * const remnant = activate.RemnantNear(enemy.Position, activate.AOERadius)
	 * if (remnant !== undefined) {
	 * 	activate.UseAbility(remnant.Position)
	 * }
	 */
	public RemnantNear(position: Vector3, radius: number): Nullable<Unit>
	/**
	 * How many of his remnants lie within `radius` of `position`: what one activation there blows up.
	 * @example
	 * const blasts = activate.RemnantsNear(enemy.Position, activate.AOERadius)
	 */
	public RemnantsNear(position: Vector3, radius: number): number
}
