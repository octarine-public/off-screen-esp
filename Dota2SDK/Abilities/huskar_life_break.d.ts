// AUTO-GENERATED - do not edit.
declare class huskar_life_break extends Ability implements INuke {
	public StartedChargingTime: number
	public CurrentProjectile: Nullable<TrackingProjectile>
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** `health_damage` of the target's health as it lands (`HealthOf`). */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	public get AppliesUnitState(): bigint
}
