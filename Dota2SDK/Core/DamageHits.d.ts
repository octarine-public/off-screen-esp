// AUTO-GENERATED - do not edit.
/**
 * The hits of a cast on a unit as `Ability.DamageUntil` counts them - its blow and each tick of its
 * damage over time: when each lands, its damage before what the unit takes of it (`Raws`), after
 * (`Dealt`) and after it as though the hit broke the unit first (`Whole`: Prophet's Pendulum
 * letting all of it through), in the order they land once `Sort` ran. A list of the hits of several
 * abilities - the ticks of every damage over time on a unit (`Unit.DamageOverTimeHits`) - tells
 * them apart by the ability each is dealt through and its kind of damage (`Abilities`, `Types`),
 * as whoever filled it named them (`From`).
 * @example
 * const ticks = creep.DamageOverTimeHits(landsAt, ATTACK_DAMAGE_STRENGTH.DAMAGE_MIN, hits)
 * for (let i = 0; i < ticks.Count; i++) {
 * 	console.log(ticks.Abilities[i]?.Name, ticks.Times[i] - GameState.RawGameTime, ticks.Dealt[i])
 * }
 */
declare class DamageHits {
	public readonly Times: number[]
	public readonly Raws: number[]
	public readonly Dealt: number[]
	public readonly Whole: number[]
	/** The ability each hit is dealt through (`From`); `undefined` for a hit nobody named. */
	public readonly Abilities: Nullable<Ability>[]
	/** The kind of damage each hit deals (`From`); `DAMAGE_TYPE_NONE` for a hit nobody named. */
	public readonly Types: DAMAGE_TYPES[]
	public get Count(): number
	/** No hits, and none named. */
	public Clear(): this
	/**
	 * Names the hits added from now on: dealt through `ability`, of the damage `type`.
	 * @example
	 * ticks.Hits = hits.From(ability, ticks.DamageType ?? ability.DamageType)
	 */
	public From(ability: Ability, type: DAMAGE_TYPES): this
	/**
	 * A hit at game time `time`: `raw` damage before what the unit takes of it, `dealt` after,
	 * `whole` after it broken first.
	 */
	public Add(time: number, raw: number, dealt: number, whole?: number): void
	/** Puts the hits in the order they land. */
	public Sort(): void
}
