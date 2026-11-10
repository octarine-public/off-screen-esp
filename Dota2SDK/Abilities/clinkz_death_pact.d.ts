// AUTO-GENERATED - do not edit.
/**
 * Death Pact: Clinkz consumes an enemy creep or a Skeleton Archer of his side and gains
 * `health_gain` health and max health for `duration`. The data names no target team or type: the
 * game turned a cast at an enemy hero down and took one at his own archer - +400 max health
 * (19 October 2026, demo).
 */
declare class clinkz_death_pact extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_clinkz_death_pact"
	public IsBuff(): this is IBuff
	/** Cast from Skeleton Walk, it keeps Clinkz hidden ("Does not take Clinkz out of Skeleton Walk"). */
	public get KeepsInvisibility(): boolean
	/**
	 * Whether it may be cast at `unit`: a Skeleton Archer of its caster's side, or an enemy creep -
	 * not an ancient - of `creep_level` at most; one it can target at all. The data names no team,
	 * which the base reads as enemies only.
	 * @example
	 * const victim = archers.find(archer => pact.CanTarget(archer))
	 */
	public CanTarget(unit: Unit): boolean
}
