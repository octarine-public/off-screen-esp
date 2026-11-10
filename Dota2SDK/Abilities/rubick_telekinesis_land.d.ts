// AUTO-GENERATED - do not edit.
declare class rubick_telekinesis_land extends Ability {
	public readonly StartLocation: Vector3
	/**
	 * Land took once its marker shows (`rubick_telekinesis.LandMarkedAt`): no cooldown starts, and
	 * the game shows it on till the target is down (21 October 2026).
	 */
	public TookSince(orderedAt: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
}
