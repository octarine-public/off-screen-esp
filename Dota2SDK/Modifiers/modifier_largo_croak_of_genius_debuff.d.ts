// AUTO-GENERATED - do not edit.
declare class modifier_largo_croak_of_genius_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/**
	 * Seconds between two ticks of the echo: not in the data - the server's
	 * `CDOTA_Modifier_Largo_CroakOfGenius_Debuff` thinks every 1 s (server.dll).
	 */
	public static readonly TickInterval = 1
	public IsDebuff(): this is IDebuff
	/** The echo of the damage the unit took ticks on it by itself (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The echo's ticks to come, one every second from the moment it first came on the unit: each
	 * hit by the hero Croak of Genius is on adds `damage_portion_pct` percent of its damage spread
	 * over the ticks of `damage_duration` to what a tick deals (`StackCount`), the share running
	 * out after them (`DamageTicks.Amounts`). Shares are noted as the stacks rise - two coming at
	 * once are one; those before the echo was seen, one coming as it was last renewed.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	protected OnAdded(): void
	protected UnitModifierChanged(): void
	/** Game time of the echo's first tick after game time `time`; NaN before it was seen come. */
	public TickAfter(time: number): number
}
