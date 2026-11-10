// AUTO-GENERATED - do not edit.
declare class terrorblade_reflection extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_terrorblade_reflection_slow"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	/** The data names no targets: its illusions and slow go at the enemy heroes in its area. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
