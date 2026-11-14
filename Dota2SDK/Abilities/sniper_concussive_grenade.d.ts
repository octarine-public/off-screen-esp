// AUTO-GENERATED - do not edit.
/**
 * Concussive Grenade, the Shard's: a grenade thrown at a point bursts there and throws every
 * enemy within `radius` `knockback_distance` straight away from the point over
 * `knockback_duration`, stunned meanwhile, then slowed and disarmed `debuff_duration`. Sniper is
 * thrown as far (`self_push`) from the tick the cast goes off, wherever in his cast range the
 * point is, and stunned by nothing; a point right under him moves him nowhere.
 */
declare class sniper_concussive_grenade extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** Its throw sends Sniper back from the point it is cast at (`MovesTo`, `MotionOn`). */
	public get MovesCaster(): boolean
	/** Its burst beside an enemy throws him and Sniper apart (`MovesTo`, `MotionOn`). */
	public get PartsFromEnemy(): boolean
	/** How far the burst throws a unit it takes, and the cast Sniper. */
	public get KnockbackDistance(): number
	/** Seconds the throw lasts. */
	public get KnockbackDuration(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	/**
	 * The points a throw is aimed at to send Sniper back from it: midway to each enemy hero seen
	 * within twice its radius, where the burst throws the two apart, and one each way round Sniper
	 * at its radius. None nearer him: the humanizer lands a click 30-50 wide of its point, and by
	 * his feet that turns the throw round. `undefined` while the throw leaves him where he is
	 * (`self_push`).
	 * @example
	 * const aims = grenade.MovesTo(sniper) ?? []
	 */
	public MovesTo(caster: Unit): Nullable<readonly Vector3[]>
	/**
	 * The throw a cast at `toward` gives `target` from the game time `landsAt`, the cast going off
	 * for Sniper and the burst for an enemy: `KnockbackDistance` straight away from the point over
	 * `KnockbackDuration`, from where the unit is by then. Sniper is thrown wherever the point is,
	 * but right under him or with `self_push` unset; an enemy within `AOERadius` of the point, the
	 * point outside its hull. `undefined` for an ally.
	 * @example
	 * const recoil = grenade.MotionOn(sniper, sniper.Position, point, castEnd)
	 * const lands = recoil?.EndPosition
	 */
	public MotionOn(target: Unit, _from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * The grenade flies to the point it was cast at and bursts there, knocking back around it: a
	 * circle, not a line. Read as a line, its flight ended a radius (375) and the target's hull
	 * short of the point - the burst expected 0.16 s before it comes (20 October 2026, demo: from 590
	 * the knockback came 0.23 s after the cast, 0.24 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public get AppliesUnitState(): bigint
}
