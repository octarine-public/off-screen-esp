// AUTO-GENERATED - do not edit.
declare class modifier_dark_willow_bramble_maze extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/**
	 * A bramble latched on the unit strikes it each half second while it roots it
	 * (`latch_duration`, shorter by its status resistance), the last as it ends; the half second is
	 * not in the data.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_DarkWillow_BrambleMaze` thinks
	 * every 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
