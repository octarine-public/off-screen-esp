// AUTO-GENERATED - do not edit.
declare class modifier_oracle_false_promise extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected readonly DeclaredEvents: EModifierfunction[]
	public PreventsDeath(_damageType: DAMAGE_TYPES): boolean
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
