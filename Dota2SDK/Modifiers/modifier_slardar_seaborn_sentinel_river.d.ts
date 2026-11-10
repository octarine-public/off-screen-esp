// AUTO-GENERATED - do not edit.
declare class modifier_slardar_seaborn_sentinel_river extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public GetTexturePath(): string
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetBaseDamageOutgoingPercentage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetStatusResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
