// AUTO-GENERATED - do not edit.
declare class modifier_item_searing_signet extends Modifier {
	/**
	 * Each magical hit of a spell of its bearer's - an item's too, a tick of its damage over time
	 * too - over `damage_threshold`, as the unit takes it, lays the signet's burn
	 * (`item_searing_signet.DamageOverTime`) or renews it: one burn, from the first such hit to
	 * `burn_duration` after the last, its ticks at the time of the first burn's. What the burn on
	 * the unit deals already is its own (`modifier_searing_signet_burn`): only the ticks past it.
	 */
	public HitOverTime(ability: Ability, target: Unit, hits: DamageHits, out: DamageTicks): Nullable<Ability>
	public get IsPurgable(): boolean
}
