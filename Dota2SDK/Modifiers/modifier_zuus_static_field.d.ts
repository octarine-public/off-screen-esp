// AUTO-GENERATED - do not edit.
declare class modifier_zuus_static_field extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/** The share of an enemy's health its shock deals: `damage_health_pct` percent. */
	public get HealthShare(): number
	/** The shock at `target` of health `health` - as it stands by default: its share of it. */
	public GetBonusDamage(target: Unit, health?: number): number
	protected GetProcAttackBonusDamageMagical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
