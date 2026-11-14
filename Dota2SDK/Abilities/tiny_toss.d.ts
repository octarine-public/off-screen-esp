// AUTO-GENERATED - do not edit.
/** Toss: the unit Tiny throws carries `modifier_tiny_toss` and lands on the target as it runs out. */
declare class tiny_toss extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * How far round Tiny the unit he tosses stands: the nearest one within it is the one thrown -
	 * with none, the game turns the cast down.
	 */
	public get GrabRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Toss damage plus the bonus Grow adds to it. */
	public GetBaseDamageForLevel(level: number): number
	/** The data calls its targets custom: a unit of either side to land on, an enemy hero too. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
