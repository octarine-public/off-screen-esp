// AUTO-GENERATED - do not edit.
/**
 * Stone Gaze: a unit that looks at Medusa under it for `face_duration` in all turns to stone - its
 * slow marks the unit as it looks (`ThreatModifierMark`), the stone comes when its looks add up.
 */
declare class medusa_stone_gaze extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_medusa_stone_gaze_facing"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	/** Seconds a unit has to look at Medusa under the gaze to turn to stone. */
	public get FaceDuration(): number
	/** The stone the gaze turns a unit to: stunned and frozen. */
	public get HitUnitState(): bigint
	/**
	 * Game time `target`, looking at Medusa under this gaze now, turns to stone at the latest -
	 * `FaceDuration` of looks in all, less what its earlier looks under the gaze took
	 * (`modifier_medusa_stone_gaze_facing.Faced`), past the moment it began this one; `Infinity`
	 * while it does not look at her.
	 */
	public PetrifiesBy(target: Unit): number
	/** The unit looking at Medusa turns to stone as its looks add up (`PetrifiesBy`). */
	public MarkLandsAt(unit: Unit): number
}
