// AUTO-GENERATED - do not edit.
declare class modifier_abyssal_underlord_firestorm_burn extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** The burn ticks on the unit by itself, its own ticks beside the waves (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The burn a wave lays: `burn_damage` percent of the unit's maximum health a tick, a tick each
	 * `burn_interval` from as it is laid, the last as it ends, `burn_duration` after the latest
	 * wave - both a quarter sooner with the Shard (`shard_wave_interval_reduction`); a wave renews
	 * the time, not the ticks'.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
