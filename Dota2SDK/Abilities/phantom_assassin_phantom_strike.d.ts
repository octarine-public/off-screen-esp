// AUTO-GENERATED - do not edit.
/** Phantom Strike: Phantom Assassin blinks to the unit cast at. */
declare class phantom_assassin_phantom_strike extends Ability {
	public IsBlink(): boolean
	/** Where a strike at the unit at `toward` sets its owner down: by that unit. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	/** The data calls its targets custom: a unit of either side, an enemy hero too. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
