// AUTO-GENERATED - do not edit.
declare class EarthSpiritStone extends Unit {
	/** Every Stone Remnant on the map, whoever called it: what Boulder Smash kicks and Geomagnetic Grip pulls. */
	public static get Remnants(): readonly EarthSpiritStone[]
	/**
	 * Whether Geomagnetic Grip pulls the remnant now: it comes the way to where Earth Spirit stood
	 * as the grip went (the modifier on it while it moves, 21 October 2026, demo).
	 */
	public get IsPulled(): boolean
	/**
	 * Whether the remnant flies now - kicked by Boulder Smash or pulled by Geomagnetic Grip: where
	 * it stands is not where a spell cast at it now finds it (the modifiers on it while it moves,
	 * 21 October 2026, demo).
	 */
	public get IsFlying(): boolean
	/**
	 * The living remnant nearest `position` within `radius` of it, or none.
	 * @example
	 * const kicked = EarthSpiritStone.NearestTo(hero.Position, smash.RemnantSearchRadius)
	 */
	public static NearestTo(position: Vector3, radius: number): Nullable<EarthSpiritStone>
}
