// AUTO-GENERATED - do not edit.
declare class modifier_kez_katana extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetBaseAttackTimeConstant(): [number, boolean]
	protected GetAttackBaseOverride(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName: string, abilityName?: string, level?: number): number
	public get IsPurgable(): boolean
	/** The katana's values come first while Kez holds it (`kez_switch_weapons.IsSai` off), as the game ranks them. */
	public get Priority(): number
}
