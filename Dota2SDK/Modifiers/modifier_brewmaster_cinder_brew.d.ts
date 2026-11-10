// AUTO-GENERATED - do not edit.
declare class modifier_brewmaster_cinder_brew extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Whether the brew is ignited - the unit took magic or pure damage in it: the brew then runs on
	 * `extra_duration` past what was left, its time renewed, its length off the brew's `duration`
	 * (cut by the unit's status resistance, unignited).
	 */
	public get IsDamageOverTime(): boolean
	/**
	 * The ignited brew burns `total_ignite_damage` in eight equal ticks over the time it has left,
	 * the last as it ends, magical though the brew's barrel is physical; the eight are not in the
	 * data.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
