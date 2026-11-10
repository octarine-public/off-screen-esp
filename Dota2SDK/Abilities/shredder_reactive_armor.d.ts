// AUTO-GENERATED - do not edit.
/**
 * Reactive Armor: a passive of stacks of armor and regeneration - with the Scepter, cast at nothing
 * as well: a shield on Timbersaw for `duration`, growing the more enemies stand within its
 * radius, that blows up around him as it ends (`modifier_shredder_reactive_armor_bomb`).
 */
declare class shredder_reactive_armor extends Ability implements IShield {
	public readonly ShieldModifierName = "modifier_shredder_reactive_armor_bomb"
	/** A shield only cast with the Scepter: without it, a passive. */
	public IsShield(): this is IShield
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(_target: Unit): number
	/**
	 * With the Scepter it is cast at nothing and no passive: the data's `PASSIVE` stayed on it, and
	 * read so, aio never cast it (21 October 2026, the hero demo, Suite with the Scepter).
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
