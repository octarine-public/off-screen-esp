// AUTO-GENERATED - do not edit.
declare class item_gungir extends Item {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * @ingnore
	 * @internal
	 * @description current speed by server via tracking projectile
	 */
	public CurrectionSpeed_: number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The root it lays on the units in its area. */
	public get AppliesUnitState(): bigint
	/**
	 * The cast takes every enemy within the radius of its point and sends each a projectile from
	 * the caster that roots it on arrival: a circle at the point, the hit the flight to the unit
	 * later - not a line, which ended its flight a radius (325) and the target's hull short of it,
	 * 0.18 s early, and took a unit anywhere along the way (20 October 2026, server.dll: the
	 * spell's start finds the units in `radius` and launches `gleipnir_projectile` at each; demo:
	 * from 856 the root came 0.43 s after the cast, 0.45 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public GetBaseSpeedForLevel(_level: number): number
}
