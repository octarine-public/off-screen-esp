// AUTO-GENERATED - do not edit.
declare class item_mage_slayer extends Item {
	/**
	 * The debuff its attacks lay deals `dps` a second over each half second for `duration`, the
	 * first half a second after the hit, the last as it ends. The half second is not in the data.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_Item_Mage_Slayer_Debuff` thinks
	 * every 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
