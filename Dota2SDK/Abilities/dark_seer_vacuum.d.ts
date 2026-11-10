// AUTO-GENERATED - do not edit.
/**
 * Vacuum: cast at a point, it pulls every enemy within `radius` of it to that point, stunned the
 * while (`MotionOn`).
 */
declare class dark_seer_vacuum extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The vacuum strikes a unit as it lets it go, `duration` after it lands, not as it lands: one
	 * tick of `damage` then.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
	/**
	 * The pull a vacuum cast at `toward` and landing at the game time `landsAt` gives `target`:
	 * from where it will be then straight to `toward`, evenly over `duration` - none for a unit
	 * beyond `radius` of it. In the demo (20 October 2026) Chaos Knight 300 off the point went
	 * 17 a tick to it and stood on it 0.6 s on, stunned the while; Dark Seer's place plays no part.
	 * @example
	 * const pull = vacuum.MotionOn(enemy, hero.Position, point, landsAt)
	 * const pulledTo = pull?.EndPosition
	 */
	public MotionOn(target: Unit, _from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
