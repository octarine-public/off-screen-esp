// AUTO-GENERATED - do not edit.
declare class huskar_life_break extends Ability implements INuke {
	public StartedChargingTime: number
	public CurrentProjectile: Nullable<TrackingProjectile>
	public IsNuke(): this is INuke
	/**
	 * The Scepter's taunt lasts `taunt_duration` - 3 s - not the slow's `AbilityDuration` (up to 5 s
	 * and more with the talent): a control after it waited for a taunt long over.
	 */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** `health_damage` of the target's health as it lands (`HealthOf`). */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	public get AppliesUnitState(): bigint
}
