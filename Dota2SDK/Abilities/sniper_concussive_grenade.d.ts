// AUTO-GENERATED - do not edit.
declare class sniper_concussive_grenade extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public CurrectionSpeed_: number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	/**
	 * The grenade flies to the point it was cast at and bursts there, knocking back around it: a
	 * circle, not a line. Read as a line, its flight ended a radius (375) and the target's hull
	 * short of the point - the burst expected 0.16 s before it comes (20 October 2026, demo: from 590
	 * the knockback came 0.23 s after the cast, 0.24 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public get AppliesUnitState(): bigint
}
