// AUTO-GENERATED - do not edit.
declare class rubick_telekinesis extends Ability {
	public readonly StartLocation: Vector3
	/**
	 * Game time Rubick last marked where the lifted target lands - Telekinesis Land's marker
	 * (`modifier_rubick_telekinesis.LandAt`); -Infinity before.
	 */
	public LandMarkedAt: number
	/**
	 * How far from where it was taken up Telekinesis Land may set the lifted target down -
	 * `max_land_distance`, the Shard's +225 in it.
	 */
	public get MaxLandDistance(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
