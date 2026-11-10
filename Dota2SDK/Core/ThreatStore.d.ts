// AUTO-GENERATED - do not edit.
/**
 * Every effect on its way, from any caster, as the SDK sees it: what a script reads about threats,
 * the same for every script. It cannot change them - the SDK's monitor adds them as casts,
 * projectiles, spawned units, particles and modifiers reveal them, and tells it by the events
 * `ThreatAdded`, `ThreatRemoved` and `ThreatLanded`; a script that answers one marks it
 * (`Threat.Answer`) so the others leave it be.
 * @example
 * for (const threat of PredictionSDK.Threats.For(hero, 3)) {
 * 	console.log(threat.Ability.Name, threat.ImpactTime(hero, 3) - GameState.RawGameTime)
 * }
 */
declare class ThreatStore {
	/** Every threat on its way now. */
	public get Threats(): readonly Threat[]
	/** Bumped as a threat comes or goes: an answer worked out from the threats is stale once it moves. */
	public get Version(): number
	/**
	 * Whether a threat a walk can answer covers the spot `position` for `unit`, of hull
	 * `hull`, and can affect it when it gets there, or now when it already has: the threats
	 * reaching the unit where it stands are not the only ones a spot has to be clear of.
	 */
	/**
	 * Whether a unit of hull `hull` standing at `position` at the game time `time` is inside what a
	 * threat not bound to a unit covers then and gets to it (`Ability.ReachesAt`) - one of the
	 * other side's; one landing later or gone by then not.
	 */
	public CoversAt(unit: IPredictionTarget, position: Vector3, time: number, hull: number): boolean
	public Covers(unit: IPredictionTarget, position: Vector3, hull: number): boolean
	/**
	 * The threats that reach `unit` within `horizon` seconds along its predicted path and get to
	 * it when they do (`IThreatAbility.ReachesAt`), earliest first, written into `into`. `unit.Threats` gives the same
	 * at the threat horizon, worked out once a tick for every reader.
	 */
	public For(unit: IPredictionTarget, horizon: number, into?: Threat[]): Threat[]
}
