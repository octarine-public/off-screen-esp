// AUTO-GENERATED - do not edit.
/**
 * Celestial Hammer: thrown to a point within `range` at `projectile_speed`, it lies there
 * `pause_duration`, then flies back to Dawnbreaker - unless she Converges first
 * (`dawnbreaker_converge`). The game shows it by particles.
 */
declare class dawnbreaker_celestial_hammer extends Ability {
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The hammer strikes again on its way back, `hammer_damage` at a unit where it fell: once it
	 * reaches its end - `projectile_radius` past the unit - and lies there `pause_duration`. Its
	 * fire trail beside it (`BesideOverTime`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * The fire trail the hammer leaves on its way back, from when it passes a unit where it fell
	 * (`BackAfter`): `burn_damage` a second each `burn_interval` from the first moment, for
	 * `flare_debuff_duration`, and the second its debuff lingers after - the last as that ends.
	 */
	protected BesideOverTime(out: DamageTicks, level: number): boolean
	/** Not while she spins in Starbreaker: the game drops the cast. */
	public get CanBeUsable(): boolean
	/**
	 * Where the owner's hammer is now, into `out`: on its way out or lying where it fell; false
	 * while none is out, and while it flies back.
	 * @example
	 * if (hammer.HammerAt(spot) && spot.Distance2D(enemy.Position) < 200) {
	 * 	// the hammer lies by the enemy
	 * }
	 */
	public HammerAt(out: Vector3): boolean
	/**
	 * Whether the owner's hammer lies where it fell (`HammerAt`), its pause on: it comes no
	 * farther.
	 */
	public get HammerLies(): boolean
}
