// AUTO-GENERATED - do not edit.
/**
 * The hits of a cast on a unit as `Ability.DamageUntil` counts them - its blow and each tick of its
 * damage over time: when each lands, its damage before what the unit takes of it (`Raws`), after
 * (`Dealt`) and after it as though the hit broke the unit first (`Whole`: Prophet's Pendulum
 * letting all of it through), in the order they land once `Sort` ran.
 */
declare class DamageHits {
	public readonly Times: number[]
	public readonly Raws: number[]
	public readonly Dealt: number[]
	public readonly Whole: number[]
	public get Count(): number
	/** No hits. */
	public Clear(): this
	/**
	 * A hit at game time `time`: `raw` damage before what the unit takes of it, `dealt` after,
	 * `whole` after it broken first.
	 */
	public Add(time: number, raw: number, dealt: number, whole?: number): void
	/** Puts the hits in the order they land. */
	public Sort(): void
}
