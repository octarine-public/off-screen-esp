// AUTO-GENERATED - do not edit.
/** Greater Bash on Spirit Breaker: a bash of `duration` on a `chance_pct` chance of each attack. */
declare class modifier_spirit_breaker_greater_bash extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	public GetRawDamage(_target: Unit): number
	/** A chance bash counts as it may: `duration`, none while Spirit Breaker is broken. */
	public SwingStun(target: Unit): number
	/** The bash's damage on its `chance_pct` chance: `damage` percent of his speed, of the ability's type. */
	public SwingProc(target: Unit, _started: boolean, out: ISwingProc): boolean
	protected UpdateSpecialValues(): void
}
