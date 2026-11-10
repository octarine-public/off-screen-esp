// AUTO-GENERATED - do not edit.
declare class modifier_lycan_summon_wolves_bonus_damage extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	protected GetPreAttackBonusDamage(_params?: IModifierParams): [number, boolean]
	/** The wolf's base attack time, as attack speed still changes it. */
	protected GetBaseAttackTimeConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
