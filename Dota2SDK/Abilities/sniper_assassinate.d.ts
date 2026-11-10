// AUTO-GENERATED - do not edit.
declare class sniper_assassinate extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	/** The shot's own magical damage, beside Sniper's attack. */
	public GetBaseDamageForLevel(level: number): number
	/** The shot: its `damage` and Sniper's attack at `target`, both as it hits. */
	public GetDamage(target: Unit, context?: IDamageContext): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseCastPointForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
