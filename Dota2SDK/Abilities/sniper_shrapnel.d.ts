// AUTO-GENERATED - do not edit.
declare class sniper_shrapnel extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_sniper_shrapnel_slow"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The shrapnel deals its damage only as it ticks, once its `damage_delay` has gone: each second
	 * of `duration`, the first at once, the last as it ends, `shrapnel_damage` each at the units in
	 * `radius`; none after a unit walks out. The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Sniper_Shrapnel_Slow` thinks every
	 * 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseActivationDelayForLevel(level: number): number
}
