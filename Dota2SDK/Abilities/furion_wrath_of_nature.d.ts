// AUTO-GENERATED - do not edit.
/**
 * Wrath of Nature: from anywhere, it jumps over the visible enemies, the one nearest where it is
 * cast at first. With Aghanim's Scepter each hit also roots and disarms the unit
 * (`modifier_furion_sprout_entangle`), the first for `scepter_min_entangle_duration`, longer each
 * jump on: cast at Chaos Knight, he was rooted and disarmed 1.5 s from 0.53 s after the order
 * (demo, 20 October 2026).
 */
declare class furion_wrath_of_nature extends Ability {
	public GetBaseDamageForLevel(level: number): number
	public get CastRange(): number
	public get AppliesUnitState(): bigint
	/** The root of the first hit - on the unit it is cast at. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
}
