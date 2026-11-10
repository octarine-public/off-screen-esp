// AUTO-GENERATED - do not edit.
declare class modifier_tusk_walrus_punch extends Modifier {
	public LastUpdateAnimationInternal: number
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get IsAnimation(): boolean
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected GetCriticalStrikeBonus(params?: IModifierParams): [number, boolean]
	/** The punch strikes quicker while it is ready: on autocast or cast, with mana, not silenced. */
	protected GetAttackAnimTimePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
