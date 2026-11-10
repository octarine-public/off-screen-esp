// AUTO-GENERATED - do not edit.
declare class elder_titan_echo_stomp_spirit extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The spirit's stomp makes Elder Titan stomp as well, and lands as his channel ends: his cast
	 * point and channel, `cast_time` from the spirit's order.
	 */
	public GetBaseActivationDelayForLevel(level: number): number
}
