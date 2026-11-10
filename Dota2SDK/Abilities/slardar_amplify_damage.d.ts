// AUTO-GENERATED - do not edit.
/**
 * Corrosive Haze: a debuff for `duration` - its target loses `armor_reduction` armor and is seen.
 * Cast again on it, it only renews the one it carries. Its puddle (`modifier_slardar_puddle`) is
 * no part of it.
 */
declare class slardar_amplify_damage extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_slardar_amplify_damage"
	public IsDebuff(): this is IDebuff
	protected DurationFrom(values: ISpecialValues, level: number): number
}
