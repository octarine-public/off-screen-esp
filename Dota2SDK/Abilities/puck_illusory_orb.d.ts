// AUTO-GENERATED - do not edit.
/**
 * Illusory Orb: an orb flies from Puck the way he casts it, hurting what it passes; he may jaunt
 * to it meanwhile (`puck_ethereal_jaunt.Orb`). It flies for `FlightTime` whatever the point, and
 * ends there: cast short of its reach it slows down all the way to stop on the point (20 October
 * 2026: cast at 1160 it took 2.6 s to get there, as long as one cast at 1820), cast at its reach it
 * flies on at `orb_speed` (`ModifyOutput`).
 */
declare class puck_illusory_orb extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** Seconds an orb flies: `max_distance` at `orb_speed`, wherever it is cast. */
	public get FlightTime(): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The orb is cast at its reach the way the placement goes: so it flies at `orb_speed`, as the
	 * line placed is timed - cast at the target, it would crawl to it.
	 */
	public ModifyOutput(output: PredictionOutput): void
}
