// AUTO-GENERATED - do not edit.
declare class viper_poison_attack extends Ability {
	/**
	 * The poison an attack of it lays: `damage` a second for each of its stacks - an attack adds
	 * one, up to `max_stacks` - a tick each second from a second after the first attack, the last
	 * as it ends, `duration` after the latest attack; an attack renews the time, not the ticks'.
	 * The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Viper_PoisonAttack_Slow` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
