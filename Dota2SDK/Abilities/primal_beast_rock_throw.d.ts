// AUTO-GENERATED - do not edit.
declare class primal_beast_rock_throw extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetFragmentAOERadiusForLevel(level?: number): number
	public GetTravelTimeForDistance(distance: number, clampMinDistance?: number, rangeMax?: number, minTravelTime?: number, maxTravelTime?: number): number
	public GetEndRadius(startPos: Vector3, endPos: Vector3, startRadius: number, angleDeg?: number): number
	public get AppliesUnitState(): bigint
	/** The rock's flight time grows with distance; the speed at full range is the slowest it flies. */
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The rock flies to the point it was thrown at and stuns around it there: a circle, not a
	 * line. Read as a line, its flight ended a radius (225) and the target's hull short of the
	 * point - the stun expected some 0.24 s before it comes (20 October 2026, demo: from 1032 the
	 * stun came 1.03 s after the cast, 1.00 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
}
