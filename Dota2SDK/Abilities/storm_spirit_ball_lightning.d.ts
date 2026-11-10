// AUTO-GENERATED - do not edit.
/**
 * Ball Lightning: Storm Spirit travels `ball_lightning_move_speed` fast to the point, as far as the
 * mana left after the cast pays for (`GetBaseCastRangeForLevel`): the game knows no cast range of
 * it, every `TravelStep` of the way costs `TravelCostPerStep`.
 */
declare class storm_spirit_ball_lightning extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/** The length of the way each `TravelCostPerStep` pays for - the 100 the key values count per. */
	public static readonly TravelStep = 100
	/**
	 * `AbilityDamage` for each `TravelStep` of the way Storm Spirit has come when the ball touches
	 * `target` (the server's `OnProjectileHit`): to `ball_lightning_aoe` and the target's hull from
	 * it, a frame's flight short.
	 */
	public GetRawDamage(target: Unit): number
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * How far the ball travels on `mana` past its cast: a `TravelStep` for each `TravelCostPerStep`
	 * it pays, as many as it pays at least once.
	 */
	public ReachWith(mana: number, level?: number): number
	/** The mana `distance` of travel costs past the cast. */
	public TravelCost(distance: number, level?: number): number
	/**
	 * The mana each `TravelStep` of the way costs: `ball_lightning_travel_cost_base` and
	 * `ball_lightning_travel_cost_percent` of the caster's maximum mana.
	 */
	public TravelCostPerStep(level?: number): number
	public BaseTravelCost(level?: number): number
	public PercentTravelCost(level?: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * As far as the mana pays for, no cast range bonus with it: the game knows no cast range of the
	 * ball. It was 600, written in - an approach from 1500 walked the whole way, the ball never
	 * cast with 1643 mana to spare (21 October 2026, the hero demo).
	 */
	public get CastRange(): number
	public IsBlink(): boolean
	/**
	 * Whether Storm Spirit travels in the ball now (`modifier_storm_spirit_ball_lightning`): the
	 * game shows no motion of it to the prediction (`Unit.Prediction.MotionUntil` stays at now
	 * through the flight, 21 October 2026, the hero demo).
	 */
	public get InFlight(): boolean
	/**
	 * The travel cast from `from` at `toward`, starting at `landsAt`: as far that way as the mana
	 * pays for at most.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
