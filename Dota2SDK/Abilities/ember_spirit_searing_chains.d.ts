// AUTO-GENERATED - do not edit.
declare class ember_spirit_searing_chains extends Ability {
	/** The chains hold a twentieth of a second more than `duration` - not in the data. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The chains deal their damage only as they tick: `damage_per_second` over each
	 * `tick_interval`, the first a tick after they land, one on the server tick they end on too,
	 * for as long as they hold (`AppliedFrom`). The target's status resistance shortens it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
