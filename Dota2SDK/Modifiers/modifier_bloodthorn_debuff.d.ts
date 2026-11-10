// AUTO-GENERATED - do not edit.
declare class modifier_bloodthorn_debuff extends GatheringModifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/**
	 * Soul Rend deals its parent, as it ends, `silence_damage_percent` of the damage it took
	 * meanwhile.
	 */
	protected get GatheredShare(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetPreAttackBonusDamageMagicalTarget(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
