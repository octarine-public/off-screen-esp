// AUTO-GENERATED - do not edit.
declare class modifier_pugna_nether_ward_aura extends Modifier {
	public readonly IsHidden = false
	/** The ward strikes the bearer as it spends mana on a spell (`SpentManaDamage`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get ForceVisible(): boolean
	/**
	 * Nether Ward's strike at the bearer beginning a spell of `mana`: `base_damage` and
	 * `mana_multiplier` times the mana; none for a spell that spends none (Liquipedia).
	 */
	public SpentManaDamage(mana: number): number
	public get IsPurgable(): boolean
}
