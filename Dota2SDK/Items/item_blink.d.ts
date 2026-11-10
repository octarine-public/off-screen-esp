// AUTO-GENERATED - do not edit.
declare class item_blink extends Item {
	/**
	 * The point a double tap of it is cast at, with no cursor: its reach from its owner straight
	 * toward the owner's team's fountain - the cast the game's client sends for a double tap
	 * (4 November 2026, hero demo: a player's double tap went as a cast at the point 1200 from the
	 * hero toward the fountain, the hero landing there). None with no owner or no fountain.
	 * @example
	 * const home = blink.DoubleTapPoint
	 * if (home !== undefined) {
	 * 	hero.CastPosition(blink, home)
	 * }
	 */
	public get DoubleTapPoint(): Nullable<Vector3>
	/** A cast at the point of its double tap (`DoubleTapPoint`), as near as Pugna's ward reads one. */
	public IsDoubleTapAt(point: Vector3): boolean
	/** An order at the point of its double tap (`IsDoubleTapAt`): it needs no cursor. */
	public IsDoubleTap(order: ExecuteOrder): boolean
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public get IsCastRangeFake(): boolean
	/** How far a blink cast beyond its reach goes that way: shorter than the reach. */
	public get RangeClamp(): number
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * Where a blink cast from `from` at `toward` landing at `landsAt` sets its owner down: there,
	 * when it is within its reach (`CastRange`, the bonuses with it), else `blink_range_clamp` that
	 * way. It moves no one but its owner.
	 * @example
	 * const point = hero.Position.Extend2D(goal, Math.min(hero.Distance2D(goal), blink.CastRange))
	 * const lands = blink.MotionOn(hero, hero.Position, point, landsAt)?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
