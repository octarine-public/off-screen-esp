// AUTO-GENERATED - do not edit.
declare class sandking_epicenter extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The pulses after the cast point: `epicenter_pulses` of them over `AbilityDuration`, the first
	 * a pulse in, the last as it ends, `epicenter_damage` each at the units within its radius
	 * (`TickChance`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Whether the pulse `tick` reaches `target` where it stands: within the base radius of Sand King
	 * and `epicenter_radius_increment` more for each pulse before it, and the unit's hull.
	 */
	public TickChance(target: Unit, tick: number): number
}
