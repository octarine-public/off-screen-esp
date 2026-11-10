// AUTO-GENERATED - do not edit.
declare class modifier_templar_assassin_meld extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	/**
	 * Meld has no time of its own (`Duration` -1): it lasts till her swing, a step or a cast ends
	 * it. Read by its duration, it had ended as it began - the casts after it went before the swing
	 * and ended it, Trap 0.10 s after Meld (21 October 2026, demo).
	 */
	public get DieTime(): number
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackPhysicalArmorBonusTarget(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
