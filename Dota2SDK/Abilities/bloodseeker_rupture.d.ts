// AUTO-GENERATED - do not edit.
declare class bloodseeker_rupture extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** `hp_pct` of the target's health as it lands (`HealthOf`). */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	/**
	 * While it lasts (`duration`), the rupture strikes a unit as it walks: `movement_damage_pct` of
	 * the way it walked, each quarter of a second; the quarter is not in the data. A unit may
	 * stand: none surely lands.
	 * The 0.25 s between ticks is the server's own: `CDOTA_Modifier_Bloodseeker_Rupture` thinks
	 * every 0.25 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
