// AUTO-GENERATED - do not edit.
declare class modifier_winter_wyvern_arctic_burn_slow extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The burn an attack in flight laid ticks on the unit (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * `percent_damage` percent of the unit's health then a second over each `tick_rate` while it
	 * lasts, the first a tick after the attack, the last as it ends.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
