// AUTO-GENERATED - do not edit.
/**
 * Per-ability prediction state: the profile inputs whose change invalidates anything cached
 * about the ability, and the core, input and estimates the ability predicts with. `Ability`
 * creates one; nothing about a profile is ever cached per class, and the working objects are
 * made the first time the ability predicts.
 */
declare class AbilityPrediction {
	constructor(owner: IPredictableAbility)
	/**
	 * Lets go of the units the predictions gathered in a world now past - the candidates, the
	 * obstacles, the caster they were gathered for, the input's target and a list of candidates it
	 * was handed - once a tick and at a game's end: an ability no longer asked, after a fight, held
	 * the units of its last prediction - thinkers, illusions - after they were gone. Within the
	 * world they were gathered in they stay (`Gathered`), the only one they serve: a world begins
	 * with every listener.
	 */
	public static Release(): void
	/**
	 * Grows whenever the level, alt-cast state, theft, scepter, shard, facet or a talent of the
	 * owner changes; equal versions mean an equal profile.
	 */
	public get ProfileVersion(): number
	/** The prediction core this ability casts by. */
	public get Core(): CastPredictor
	/** The input the ability fills for every prediction. */
	public get Input(): PredictionInput
	/** The units the ability may aim at, gathered for a prediction (`Gathered`). */
	public get Candidates(): IPredictionTarget[]
	/** The units that may stand in the effect's way, gathered for a prediction (`Gathered`). */
	public get Obstacles(): IPredictionTarget[]
	/** The timeline `GetHitTime` fills. */
	public get HitTimeline(): CastTimeline
	/** The estimate of the target's position the timelines fill. */
	public get Estimate(): MovementPrediction
	/**
	 * Whether `Candidates` and `Obstacles` hold the units for a cast by `caster` standing where it
	 * stands, of `reach` and `underway` that long: gathered for them in the world as it is
	 * (`SharedSDK.WorldVersion`), in a frame or out of one as now. When not, they are taken for
	 * gathered for them from now on - the caller gathers them.
	 */
	public Gathered(caster: IPredictionTarget, reach: number, underway: number): boolean
}
