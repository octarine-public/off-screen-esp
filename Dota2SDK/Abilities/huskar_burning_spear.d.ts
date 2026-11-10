// AUTO-GENERATED - do not edit.
declare class huskar_burning_spear extends Ability {
	/**
	 * The burn a spear lays: `burn_damage` and `burn_damage_max_pct` percent of the unit's maximum
	 * health each second, the first a second after the attack, the last as it ends, `duration`
	 * after the latest spear; a spear renews the time, not the ticks', and adds a stack. The second
	 * is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Huskar_Burning_Spear_Debuff`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
