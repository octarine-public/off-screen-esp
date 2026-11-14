// AUTO-GENERATED - do not edit.
declare class modifier_venomancer_poison_sting extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** The sting poisons the unit while it lasts (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * Each second while it lasts, the first a second after it lands, none as it ends: the damage a
	 * second the game sends it with (`damage` and its growth by the hero's level). An attack renews
	 * it, not its ticks. The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Venomancer_PoisonSting` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
}
