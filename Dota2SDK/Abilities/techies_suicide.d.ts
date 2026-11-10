// AUTO-GENERATED - do not edit.
/** Blast Off: Techies leaps to the point under `modifier_techies_suicide_leap` and blows up where he lands. */
declare class techies_suicide extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly StartPosition: Vector3
	public readonly TargetPosition: Vector3
	public readonly LastKnownOwnerPosition_: Vector3
	public LastKnownOwnerPositionTick_: number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
}
