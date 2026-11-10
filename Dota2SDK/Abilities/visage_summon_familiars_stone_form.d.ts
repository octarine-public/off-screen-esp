// AUTO-GENERATED - do not edit.
/**
 * Stone Form: the familiar roots itself as it is cast
 * (`modifier_visage_summon_familiars_stone_form_precastroot`) and `stun_delay` later stuns the
 * units round it within `stun_radius` for `stun_duration`.
 */
declare class visage_summon_familiars_stone_form extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
