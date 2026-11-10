// AUTO-GENERATED - do not edit.
/**
 * Illuminate: a channel of up to `max_channel_time` gathering a wave that leaves the channeller
 * as it ends - or as `keeper_of_the_light_illuminate_end` releases it - and runs `range` down a
 * line `radius` wide at `speed`, dealing up to `total_damage` for a whole channel. In Spirit Form
 * a spirit left where Keeper of the Light stood channels it: he walks, attacks and casts meanwhile.
 */
declare class keeper_of_the_light_illuminate extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * In Spirit Form the channel is the spirit's, not his - the data still calls it channelled.
	 * Measured in the demo (20 October 2026): cast in the form, neither the hero nor the ability
	 * channelling, a thinker with `modifier_keeper_of_the_light_illuminate` where he stood, the
	 * cooldown running from the cast.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** The damage of a whole channel; a wave released sooner deals its share. */
	public GetBaseDamageForLevel(level: number): number
	/** The wave leaves when the channel ends; a whole channel by default. */
	public GetBaseActivationDelayForLevel(level: number): number
	public get Range(): number
}
