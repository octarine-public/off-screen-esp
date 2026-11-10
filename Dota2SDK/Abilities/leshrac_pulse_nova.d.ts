// AUTO-GENERATED - do not edit.
declare class leshrac_pulse_nova extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The nova strikes the units within `radius` while it is on: `damage` each second, the first as
	 * it turns on, none after a unit walks out - a strike a second in the game's server
	 * (`StartIntervalThink(1)`), the second not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Leshrac_Pulse_Nova` thinks every 1
	 * s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
