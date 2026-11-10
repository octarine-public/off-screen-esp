// AUTO-GENERATED - do not edit.
declare class earth_spirit_petrify extends Ability {
	/** The shatter's damage, at the enemies within `aoe` of the unit it is cast on. */
	public GetBaseDamageForLevel(level: number): number
	/** None at the unit it is cast on: it becomes the remnant, its shatter striking those around. */
	public GetDamage(_target: Unit): number
	public get CastRange(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/**
	 * The unit it is cast on turns to stone for `duration`: stunned, invulnerable and out of the
	 * game - a hold on an enemy, a shelter for an ally.
	 */
	public get AppliesUnitState(): bigint
	/** The data calls its targets custom: a hero of either side, an enemy one too. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
