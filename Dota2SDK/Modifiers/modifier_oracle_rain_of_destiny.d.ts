// AUTO-GENERATED - do not edit.
declare class modifier_oracle_rain_of_destiny extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	protected readonly DeclaredEvents: EModifierfunction[]
	/** The rain harms an enemy while it stays in (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * Its ability's ticks while the rain lasts: the aura lays the debuff anew each time it thinks,
	 * so the end of the rain's thinker nearest the unit, not the debuff's, ends them; their time is
	 * not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
