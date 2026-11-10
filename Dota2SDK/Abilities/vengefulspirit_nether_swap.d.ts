// AUTO-GENERATED - do not edit.
declare class vengefulspirit_nether_swap extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/** The data calls its targets custom: a unit of either side, read as `CanTarget` reads a custom team. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep, as `CanTarget` reads a custom type. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
	/** Its target and Vengeful Spirit trade places at once. */
	public get MovesTarget(): boolean
}
