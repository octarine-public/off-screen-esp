// AUTO-GENERATED - do not edit.
declare class medusa_gorgon_grasp extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The root after the blow: `damage_pers` a second over each `damage_interval` of `duration`,
	 * the first as it roots, none as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The grasp lands in a circle around the point after the delay, its volleys widening there:
	 * an area cast at a point (AOE | POINT, `radius`), no line - nothing travels (20 October 2026,
	 * the game data).
	 */
	public get SkillShotType(): ESkillShotType
}
