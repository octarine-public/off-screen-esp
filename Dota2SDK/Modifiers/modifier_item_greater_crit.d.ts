// AUTO-GENERATED - do not edit.
declare class modifier_item_greater_crit extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetPreAttackBonusDamage(): [number, boolean]
	/** Its crit, which no animation shows: `crit_chance` of `crit_multiplier` on every swing. */
	public SwingProc(_target: Unit, _started: boolean, out: ISwingProc): boolean
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
