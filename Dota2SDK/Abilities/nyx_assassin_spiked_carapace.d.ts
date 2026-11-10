// AUTO-GENERATED - do not edit.
/**
 * Spiked Carapace: for `reflect_duration` the damage dealt to Nyx Assassin goes back to its source,
 * stunned for `stun_duration` as well.
 */
declare class nyx_assassin_spiked_carapace extends Ability {
	/**
	 * Under the carapace the first blow from each source does not hurt Nyx - it goes back to it,
	 * stunned - while a stun the spell lays may land all the same, and the ticks of a damage over
	 * time after the blow do: Laguna Blade's blow kept off, its Slow Burn ticking; Storm Bolt's
	 * damage kept off, its stun landing.
	 */
	public get GuardsDamage(): boolean
	/** Burrow widens the carapace while Nyx sits underground. */
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
