// AUTO-GENERATED - do not edit.
/**
 * A target's walk out of a circle laid ahead of it, from where it starts walking out - having seen
 * it laid and reacted - along its course: what `CircleLead.AgainstDodge` reads.
 */
interface ICircleWalk {
	/** Units from where it starts walking out to the end of its course. */
	readonly Ahead: number
	/** Units it walks from then until the circle takes. */
	readonly Walk: number
	/** Seconds from then until the circle takes. */
	readonly Left: number
	/** Seconds its about-turn takes before it walks back (`Unit.TurnTimeForAngle`). */
	readonly TurnBack: number
	/** The circle's radius less the target's hull: as far from the centre as it stands whole inside. */
	readonly Holds: number
}
/**
 * Where a circle that takes what stands in it as it activates is centred on a target walking on,
 * as `IPredictOptions.CircleLead` says (`ECircleLead`).
 *
 * Against a dodge: the target keeps its course until the cast point is over and it has reacted
 * (`IPredictOptions.DodgeReaction`) - or a hold on it has ended - and then has the activation delay
 * left to walk out any way it likes, its turn first (`TurnTimeForAngle`): straight on it gets
 * farthest - the end of its course - back the least, by the about-turn it makes before it walks.
 * The centre goes midway between the two along its course, which encloses every way out when the
 * radius allows, yet near enough to the spot it reacts on and to the end of its course that the
 * circle holds the target whole - its hull inside, not touching the edge - standing still and
 * walking on: the game takes a unit its hull touches, and the hull is the slack left for the cast
 * landing a little off its timeline (hero demo, 4 November 2026: Spark Wraith ordered through the
 * humanizer ended its cast point up to 0.08 s past the prediction, and a target walking on, held
 * only touching, was 400 from the centre with 399 to take it). A target with no time to walk out,
 * or a course that runs farther than the circle holds, keeps the centre on the end of its course.
 *
 * At a share of the way: the centre goes that share of the way from where the target stands now
 * to the end of its course (`IPredictOptions.CircleShare`), as the player set it.
 * @example
 * lead.Place(out, target, timeline, input)
 */
declare class CircleLead {
	/**
	 * Units along the course from where the target starts walking out to the centre against its
	 * walk out (`ECircleLead.Dodge`); `NaN` to keep the centre on the end of the course: the target
	 * has no time to walk out, or the course runs farther than the circle can hold it walking on.
	 * @example
	 * const lead = CircleLead.AgainstDodge({ Ahead: 406, Walk: 406, Left: 1.25, TurnBack: 0.1, Holds: 351 })
	 * const centre = Number.isNaN(lead) ? courseEnd : reactsAt + lead
	 */
	public static AgainstDodge(walk: ICircleWalk): number
	/**
	 * Moves `out.CastPosition`, a circle of `input.Radius` centred on the end of `target`'s course
	 * (`out.TargetPosition`) as `timeline` lands it, back along the course as `input.CircleLead`
	 * says.
	 */
	public Place(out: PredictionOutput, target: IPredictionTarget, timeline: CastTimeline, input: PredictionInput): void
}
