// AUTO-GENERATED - do not edit.
declare class modifier_largo_croak_of_genius_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	/** The hits of the hero it is on echo on the unit (`HitOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Each hit of a spell or an item of the hero it is on - a tick of its damage over time too -
	 * echoes on an enemy: `damage_portion_pct` percent of its damage spread over the ticks of
	 * `damage_duration`, magical, one each second - at the ticks of the echo the unit has, else
	 * of one from the first hit (`modifier_largo_croak_of_genius_debuff`); the shares on one row of
	 * ticks (`DamageTicks.Shares`).
	 */
	public HitOverTime(ability: Ability, target: Unit, hits: DamageHits, out: DamageTicks): Nullable<Ability>
	protected GetManaCostPercentageStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
