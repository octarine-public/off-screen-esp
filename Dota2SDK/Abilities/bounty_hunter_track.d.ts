// AUTO-GENERATED - do not edit.
/**
 * Track: a debuff for `duration` - its target is seen and takes `target_damage_amp` more damage.
 * Cast again on it, it only renews the one it carries.
 */
declare class bounty_hunter_track extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_bounty_hunter_track"
	public IsDebuff(): this is IDebuff
	public get DamageType(): DAMAGE_TYPES
	/**
	 * Cast from Shadow Walk, it keeps Bounty Hunter hidden ("Casting Track does not take you out of
	 * invisibility"): cast 0.8 s into it, the walk went on (19 October 2026, demo).
	 */
	public get KeepsInvisibility(): boolean
	public get IsAmplifier(): boolean
	/** The tracked enemy takes `target_damage_amp` more of any damage: every cast's and the attacks'. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Cast at an enemy first, its debuff adds `target_damage_amp` percent to the damage the enemy
	 * takes, beside the other such debuffs on it (`IncomingAmplification`): the damage of `ability`
	 * after it, anyone's, lands harder by as much. Not on one tracked already - the track renews.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
}
