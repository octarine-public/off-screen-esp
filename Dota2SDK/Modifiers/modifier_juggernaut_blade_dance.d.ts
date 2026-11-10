// AUTO-GENERATED - do not edit.
declare class modifier_juggernaut_blade_dance extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/** The crit its animation shows on the swing begun; none on one not begun (`IModifierParams.Ahead`). */
	protected GetCriticalStrikeBonus(params?: IModifierParams): [number, boolean]
	/**
	 * Blade Dance's crit on a swing not begun: `blade_dance_crit_chance` of `blade_dance_crit_mult`;
	 * a begun one shows its crit in its animation (`GetCriticalStrikeBonus`).
	 */
	public SwingProc(_target: Unit, started: boolean, out: ISwingProc): boolean
	protected UpdateSpecialValues(): void
}
