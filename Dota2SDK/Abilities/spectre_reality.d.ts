// AUTO-GENERATED - do not edit.
/**
 * Reality: Spectre travels to an illusion of his Shadow Step or Haunt - cast at a point, it takes
 * him to the illusion there - in `travel_time`, and the illusion is gone (21 October 2026, demo:
 * from 765 off the target he stood by it 0.25 s after the order). With the Scepter, Reality onto
 * an illusion of Haunt fears the enemies round it (`Fears`). With no illusion of his there is
 * nowhere to go.
 */
declare class spectre_reality extends Ability {
	public get CastRange(): number
	public IsBlink(): boolean
	/**
	 * His illusion within `reach` of `target` that Reality takes him to best: one whose landing
	 * fears (`Fears`), else the nearest `target`; none within it - none.
	 * @example
	 * const illusion = reality.IllusionBy(enemy, hero.GetAttackRange(enemy))
	 * if (illusion !== undefined) {
	 * 	reality.UseAbility(illusion.Position)
	 * }
	 */
	public IllusionBy(target: Unit, reach: number): Nullable<Unit>
	/**
	 * Whether Reality onto `illusion` fears the enemies round it: an illusion of Haunt, with the
	 * Scepter (`fear_duration` of Haunt).
	 */
	public Fears(illusion: Unit): boolean
	/** Where his illusions stand: a Reality aimed nearest one takes him there. */
	public MovesTo(caster: Unit): Nullable<readonly Vector3[]>
	/** Where a Reality toward `toward` sets Spectre down: at his illusion nearest it, as it is now. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
