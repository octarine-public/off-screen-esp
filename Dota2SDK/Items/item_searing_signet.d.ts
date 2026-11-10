// AUTO-GENERATED - do not edit.
declare class item_searing_signet extends Item {
	/**
	 * The burn a spell's magical hit over `damage_threshold` lays: `burn_damage` over
	 * `burn_duration`, magical, in a tick each `burn_tickrate`, the first a tick after the hit, the
	 * last as it ends - less by `creep_penalty` percent on a unit not a hero (`TickBonus`). The cast
	 * of a spell does not count it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public TickBonus(target: Unit): number
}
