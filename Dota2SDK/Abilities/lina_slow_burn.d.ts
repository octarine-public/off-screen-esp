// AUTO-GENERATED - do not edit.
declare class lina_slow_burn extends Ability {
	/**
	 * Seconds between two ticks of a burn: not in the data - the server's
	 * `CDOTA_Modifier_Lina_Slow_Burn` thinks every 1 s (server.dll).
	 */
	public static readonly TickInterval = 1
	/**
	 * Fills `out` with the time of the burn a hit of an ability of `owner` lays: a tick every
	 * `TickInterval` for `burn_duration`, the first `TickInterval` after the hit, the last as it
	 * ends - each `Share` of the hit's damage.
	 */
	public static BurnOf(owner: Nullable<Unit>, out: DamageTicks): boolean
	/** The share of a hit's damage each tick of its burn deals: `burn_damage_pct` over the ticks. */
	public static Share(owner: Nullable<Unit>): number
}
