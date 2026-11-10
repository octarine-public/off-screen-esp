// AUTO-GENERATED - do not edit.
declare class nevermore_requiem extends Ability {
	public get WidthEnd(): number
	public get WidthStart(): number
	public get AOERadius(): number
	/** The souls a release takes: Necromastery's on Shadow Fiend, up to `max_soul_release`. */
	public get Souls(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** `AbilityDamage` for each line that strikes `target` (`LinesAt`). */
	public GetRawDamage(target: Unit): number
	/**
	 * Every line that strikes `target` lands as a hit of its own - reduced, blocked and rounded up
	 * by itself, through the shields `context` carries one after another: their sum.
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	/**
	 * How many lines of a release from `from` strike `target` where it stands: one for each
	 * `requiem_soul_conversion` souls (`Souls`), at even angles round from the world's east, each
	 * leaving `WidthStart` out from `from` that wide and growing to `WidthEnd` over
	 * `requiem_radius`; a line strikes a unit within that and its hull.
	 */
	public LinesAt(target: Unit, from?: Vector3 | undefined): number
}
