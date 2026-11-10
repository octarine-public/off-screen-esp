// AUTO-GENERATED - do not edit.
declare class modifier_hoodwink_sharpshooter_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/**
	 * The game's slow pierces debuff immunity by its own value alone (`pierce_debuff_immunity`,
	 * a talent's).
	 */
	public get PiercesDebuffImmunity(): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
