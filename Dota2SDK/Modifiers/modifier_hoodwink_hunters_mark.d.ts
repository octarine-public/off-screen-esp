// AUTO-GENERATED - do not edit.
/**
 * Hunter's Boomerang's mark: the unit is slowed and takes `spell_amp` percent more of the damage of
 * spells, beside the other damage it takes more of (`INCOMING_DAMAGE_PERCENTAGE`, summed with
 * them) - none of an attack's.
 */
declare class modifier_hoodwink_hunters_mark extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected GetStatusResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
