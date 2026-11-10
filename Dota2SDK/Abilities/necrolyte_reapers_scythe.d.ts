// AUTO-GENERATED - do not edit.
declare class necrolyte_reapers_scythe extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/** Its damage grows with the health the target lacks: what it is for is the kill. */
	public get IsFinisher(): boolean
	public IsNuke(): this is INuke
	/** `damage_per_health` for each point of health the target lacks as it lands (`HealthOf`). */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	public GetBaseActivationDelayForLevel(level: number): number
}
