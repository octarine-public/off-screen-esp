// AUTO-GENERATED - do not edit.
declare class modifier_winter_wyvern_cold_embrace extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * `heal_additive` and `heal_percentage` of its parent's maximum health a second, beyond the
	 * parent's regeneration.
	 */
	public get HealPerSecond(): number
	protected GetAbsoluteNoDamagePhysical(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
