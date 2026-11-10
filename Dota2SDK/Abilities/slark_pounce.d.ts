// AUTO-GENERATED - do not edit.
/**
 * Pounce: Slark leaps `pounce_distance` the way he faces and leashes the first enemy hero he
 * lands within `pounce_radius` of (`modifier_slark_pounce_leash`) - a debuff: a second leap, with
 * Aghanim's Scepter's charges, would only renew it.
 */
declare class slark_pounce extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_slark_pounce_leash"
	public IsDebuff(): this is IDebuff
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public get UsesRotation(): boolean
	/** He leaps the way he faces. */
	public get MovesAlongFacing(): boolean
	/** The leap a cast landing at `landsAt` gives `target` - Slark - the way he faces then (`MotionAlong`). */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
	/**
	 * The leap `MotionOn` gives Slark facing the way `way`: his cast range along it at `Speed`, from
	 * where he is by then. A hero of his enemy's in its way ends it there, leashed - not counted.
	 */
	public MotionAlong(target: Unit, _from: Vector3, way: Vector3, landsAt: number): Nullable<Motion>
	public get Range(): number
	/**
	 * With Aghanim's Scepter the leap is longer - `pounce_distance_scepter` - and as long in time:
	 * 21 October 2026, demo, it went 40 a frame, 1200 a second against 933 without, 900 for 700.
	 */
	public get Speed(): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public get CollisionFlags(): CollisionFlag
	public get CollisionTeam(): CollisionTeam
	public get CastRange(): number
}
