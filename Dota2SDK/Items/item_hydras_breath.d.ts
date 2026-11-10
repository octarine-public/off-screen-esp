// AUTO-GENERATED - do not edit.
declare class item_hydras_breath extends Item {
	/**
	 * The poison its attacks lay: `poison_base_damage` and `poison_damage_per_second` percent of
	 * the unit's maximum health a second, magical, for `poison_duration`, the first a second after
	 * the hit, the last as it ends. The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Item_HydrasBreath_Poison` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
