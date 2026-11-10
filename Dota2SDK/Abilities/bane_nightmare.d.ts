// AUTO-GENERATED - do not edit.
/**
 * Nightmare: its target sleeps for the duration - and for its first `nightmare_invuln_time` it is
 * invulnerable: nothing cast at it meanwhile takes.
 */
declare class bane_nightmare extends Ability {
	public get AppliesUnitState(): bigint
	/** Seconds the slept unit is invulnerable from the hit on. */
	public get InvulnerableFor(): number
	/** What keeps harm off the slept unit: its first seconds of invulnerability. */
	public get GuardUnitState(): bigint
	/** The invulnerability lasts `nightmare_invuln_time`; the sleep goes on after it. */
	public GuardDuration(_target: Unit): number
	/** Nightmare End wakes Bane from a Nightmare of his own, a stun not keeping it from being cast. */
	public get EndedBy(): Nullable<Ability>
	protected FillEffects(out: AbilityEffects): void
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
}
