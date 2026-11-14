// AUTO-GENERATED - do not edit.
declare class lich_sinister_gaze extends Ability {
	/**
	 * With Aghanim's Scepter the gaze is an area spell (`aoe_scepter`) the game takes cast at a
	 * point only - an order at a unit it turns down; it still channels.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/**
	 * With the Scepter (`aoe_scepter`) Lich casts other spells while the gaze channels, and it goes
	 * on: Frost Nova cast in it left the gaze on the target (20 October 2026, demo); without it, the
	 * Nova ended the channel.
	 */
	public get ChannelTakesCasts(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Its target, drawn to Lich, can neither attack, cast, use an item nor be ordered: afraid,
	 * walking through the trees.
	 */
	public get AppliesUnitState(): bigint
}
