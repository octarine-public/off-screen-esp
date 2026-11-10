// AUTO-GENERATED - do not edit.
declare class modifier_chaos_knight_chaos_strike extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/** The crit its animation shows on the swing begun; none on one not begun (`IModifierParams.Ahead`). */
	protected GetCriticalStrikeBonus(params?: IModifierParams): [number, boolean]
	/**
	 * Chaos Strike's crit on a swing not begun: `chance` of up to `crit_max`; a begun one shows its
	 * crit in its animation (`GetCriticalStrikeBonus`).
	 */
	public SwingProc(_target: Unit, started: boolean, out: ISwingProc): boolean
	protected UpdateSpecialValues(): void
}
