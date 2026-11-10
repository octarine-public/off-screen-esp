// AUTO-GENERATED - do not edit.
declare class viper_corrosive_skin extends Ability {
	/**
	 * The toxin it lays on an enemy that damages Viper within `max_range`: `damage` a second, a
	 * tick each second - the first a second after the first hit, at once with Aghanim's Scepter
	 * (and as Nosedive lays it) - the last as it ends, `duration` after the latest hit; a hit
	 * renews the time, not the ticks'. The second is not in the data. The Scepter's rise inside
	 * Nethertoxin, up to `nethertoxin_bonus_pct`, is not weighed.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Viper_CorrosiveSkin_Slow` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
