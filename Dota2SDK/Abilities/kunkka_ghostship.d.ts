// AUTO-GENERATED - do not edit.
/**
 * Ghostship: the ship sets out `ghostship_distance` behind the point cast at, on the line from the
 * caster through it, sails to it and crashes there, stunning the circle of its width - it takes no
 * one on its way. With Aghanim's Scepter a fleet of ships sails the same way one after another,
 * each firing its cannons to both sides as it goes.
 */
declare class kunkka_ghostship extends Ability {
	/** How fast the ship sails. */
	public get ShipSpeed(): number
	/** How far behind the point cast at the ship sets out: it sails this far, then crashes. */
	public get ShipDistance(): number
	/** Whether the ship fires its cannons as it sails: with Aghanim's Scepter. */
	public get FiresCannons(): boolean
	/**
	 * Game time the first of the owner's ships now sailing crashes with `position` in its circle;
	 * `Infinity` for none.
	 * @example
	 * const crash = ship.CrashNear(mark.Spot)
	 * if (crash - GameState.RawGameTime <= xReturn.CastPoint) {
	 * 	xReturn.UseAbility()
	 * }
	 */
	public CrashNear(position: Vector3): number
	/**
	 * How many cannonballs of one ship hit a unit of `hull` standing still `side` to the side of the
	 * crash point, square to the ship's way. A volley goes every `cannon_fire_interval` from the
	 * launch, `num_cannon_volleys` of them; `cannon_count` cannons a side stand
	 * `distance_between_cannons` apart from `initial_cannon_offset` along the ship, the front one
	 * firing `base_cannon_rotation` off the ship's way and each one behind it `rotation_per_cannon`
	 * more; a ball flies `cannon_ball_distance`, `cannon_ball_radius` wide. None without the cannons.
	 * @example
	 * const hits = ship.CannonballsAt(235, enemy.HullRadius)
	 */
	public CannonballsAt(side: number, hull: number): number
	public get AppliesUnitState(): bigint
	/** The crash is a circle at the point cast at. */
	public get SkillShotType(): ESkillShotType
	/**
	 * The ship carries the crash, sailing at `ghostship_speed`; a cannonball of the Scepter's,
	 * at `cannon_ball_speed`, hits as it flies.
	 */
	public CarriesLanding(speed: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/** Nothing flies from the caster to the point: the ship comes from behind it (`ActivationDelay`). */
	public GetBaseSpeedForLevel(_level: number): number
	/**
	 * Seconds from the cast point's end to the crash: the ship's sail, `ghostship_distance` at
	 * `ghostship_speed` - `tooltip_delay` rounds it. A start the ship cannot be at is moved on
	 * toward the point, which shortens it, by the map's edge only.
	 */
	public GetBaseActivationDelayForLevel(level: number): number
}
