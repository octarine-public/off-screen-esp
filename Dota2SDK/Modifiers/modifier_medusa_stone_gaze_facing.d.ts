// AUTO-GENERATED - do not edit.
/** Stone Gaze on a unit for the whole gaze, whichever way the unit looks. */
declare class modifier_medusa_stone_gaze_facing extends Modifier {
	/**
	 * Seconds its bearer looked at Medusa under this gaze in the looks that are over: the gaze
	 * turns it to stone once its looks add up to `face_duration`, a look away keeping what it has.
	 */
	public Faced: number
	public get IsPurgable(): boolean
}
