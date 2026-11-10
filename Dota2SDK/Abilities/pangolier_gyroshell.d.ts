// AUTO-GENERATED - do not edit.
declare class pangolier_gyroshell extends Ability {
	/** The shell rolls `duration`; a unit it rolls over is stunned for `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * Whether its owner rolls now - in Rolling Thunder or in the Shard's Rollup: disarmed, he
	 * rolls on the way he faces, and a walk order steers the roll (demo, 20 October 2026).
	 * @example
	 * const steers = pangolier.GetAbilityByClass(pangolier_gyroshell)?.Rolls === true
	 */
	public get Rolls(): boolean
	/**
	 * Seconds until its owner's roll may strike `target` again: a unit it struck takes no second
	 * hit while `modifier_pangolier_gyroshell_timeout` - `stun_duration` and `bounce_duration` -
	 * lasts on it (server.dll); 0 for one it may strike now.
	 * @example
	 * const hops = gyroshell.StrikesAgainIn(enemy) >= crash.ActivationDelay
	 */
	public StrikesAgainIn(target: Unit): number
	public get TurnRate(): number
	public get HitRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
