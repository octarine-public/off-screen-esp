// AUTO-GENERATED - do not edit.
/**
 * Blur, Phantom Assassin's innate, cast at nothing: she fades `fade_duration` after the cast and
 * stays invisible for `duration`, faster by `active_movespeed_bonus`, while no enemy hero is within
 * `radius` of her - one coming that near ends it (`break_on_attack` 0: her attacks do not).
 */
declare class phantom_assassin_blur extends Ability {
	public readonly Index: number
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public get ShouldBeDrawable(): boolean
	public get IsInvisibility(): boolean
	/** The enemy heroes within it end the invisibility. */
	public GetBaseAOERadiusForLevel(level: number): number
	public get RevealedWithin(): number
	/** Phantom Assassin fades `fade_duration` after the cast. */
	public GetBaseActivationDelayForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Blurred, Phantom Assassin is immune to attacks and no enemy can target her. */
	public get AppliesUnitState(): bigint
	/** The states are Phantom Assassin's own. */
	public get StatesOnCaster(): boolean
	/** The immunity comes as the cast goes off; the fade (`ActivationDelay`) is the invisibility's. */
	public get StateDelay(): number
}
