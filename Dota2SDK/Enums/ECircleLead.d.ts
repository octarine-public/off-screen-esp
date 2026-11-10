// AUTO-GENERATED - do not edit.
/**
 * Where a prediction centres a circle that takes what stands in it as it activates, after a
 * delay, on a target walking on (`IPredictOptions.CircleLead`, `CircleLead`).
 */
declare enum ECircleLead {
	/**
	 * Against a walk out: the target walks on its course until it sees the circle laid and reacts
	 * (`IPredictOptions.DodgeReaction`), then out of it any way it likes, its turn first; the
	 * centre goes midway between the farthest it gets ahead and back, so it cannot walk out when
	 * the radius allows, standing still and walking on held whole. The end of the course when the
	 * target has no time to walk out, or the course runs farther than the circle can hold it.
	 */
	Dodge = 0,
	/**
	 * At a share of the way from where the target stands now to the end of its course
	 * (`IPredictOptions.CircleShare`): none - on the target, a half - halfway, all - its end.
	 */
	Share = 1
}
