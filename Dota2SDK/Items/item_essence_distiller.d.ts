// AUTO-GENERATED - do not edit.
declare class item_essence_distiller extends Item {
	public get DamageType(): DAMAGE_TYPES
	public CanBeCasted(bonusMana?: number): boolean
	/**
	 * At an enemy the soul deals its damage only as it ticks, the Urn's: `soul_damage_amount`
	 * each second for `duration`, the first a second after it lands, the last as it ends. The
	 * second is not in the data. Cast on the ground it waits for an enemy to come near - not
	 * counted.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Item_Essence_Distiller_Damage`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
