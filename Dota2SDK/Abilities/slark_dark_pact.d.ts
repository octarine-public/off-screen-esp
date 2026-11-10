// AUTO-GENERATED - do not edit.
declare class slark_dark_pact extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * The pact deals its damage only as it pulses, once its `delay` has gone: each `pulse_interval`
	 * of `pulse_duration`, the first at once, `total_damage` split among the pulses, at the units
	 * within `radius` of Slark; none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/** Its pulse, `delay` after the cast, lays a strong dispel on Slark: stuns and hexes go too. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
