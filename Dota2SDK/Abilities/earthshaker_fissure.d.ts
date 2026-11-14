// AUTO-GENERATED - do not edit.
declare class earthshaker_fissure extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/** The fissure's damage, and its Aftershock's at a unit near Earthshaker. */
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
	/** The fissure lands whole: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
