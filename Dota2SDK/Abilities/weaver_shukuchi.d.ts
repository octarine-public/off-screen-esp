// AUTO-GENERATED - do not edit.
declare class weaver_shukuchi extends Ability implements INuke, IBuff {
	public readonly BuffModifierName = "modifier_weaver_shukuchi"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * How long Weaver runs hidden: its `duration` (4 s). The game data names it as a special value
	 * only, so it read 0 - and Weaver's combo cast it only within its radius of the target, where the
	 * run was over (21 October 2026).
	 */
	protected DurationFrom(values: ISpecialValues, level: number): number
}
