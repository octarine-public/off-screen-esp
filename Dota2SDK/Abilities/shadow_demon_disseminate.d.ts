// AUTO-GENERATED - do not edit.
/**
 * Disseminate: a mark for `duration` on a unit of either side - a share of the damage the marked
 * unit takes goes to the enemies of its caster within `radius` of it. Cast at an enemy, it is a
 * debuff; cast again on it, it only renews the one it carries.
 */
declare class shadow_demon_disseminate extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_shadow_demon_disseminate"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
}
