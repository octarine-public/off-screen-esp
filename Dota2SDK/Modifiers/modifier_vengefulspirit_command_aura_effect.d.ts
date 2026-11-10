// AUTO-GENERATED - do not edit.
declare class modifier_vengefulspirit_command_aura_effect extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	/** On Vengeful Spirit herself (the aura's bearer) times one plus `self_multiplier`. */
	protected GetBaseDamageOutgoingPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
