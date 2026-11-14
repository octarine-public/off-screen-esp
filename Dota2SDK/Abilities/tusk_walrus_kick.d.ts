// AUTO-GENERATED - do not edit.
/**
 * Walrus Kick (Aghanim's Scepter): a kick at a unit along a vector - the target flies
 * `push_length` the way the vector points. Its reach is the data's `AbilityCastRange`, 250: the
 * class added 100 more, and aio walked into a reach the game does not give (21 October 2026).
 */
declare class tusk_walrus_kick extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/** How far the kick sends the target: `push_length`. */
	public get PushLength(): number
	/** Its target flies stunned for `air_time`. */
	public get HitUnitState(): bigint
}
