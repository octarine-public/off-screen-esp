// AUTO-GENERATED - do not edit.
declare class modifier_life_stealer_feast extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	/** `hp_damage_percent` of an enemy's max health; not of a building, nor an illusion's, nor broken. */
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
