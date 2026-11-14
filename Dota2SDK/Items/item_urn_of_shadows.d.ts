// AUTO-GENERATED - do not edit.
declare class item_urn_of_shadows extends Item implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public HealthRestoreModifierName: string
	public get DamageType(): DAMAGE_TYPES
	public CanBeCasted(bonusMana?: number): boolean
	public GetHealthRestore(_target: Unit): number
	/**
	 * At an enemy the soul deals its damage only as it ticks: `soul_damage_amount` each second, the
	 * first a second after it lands, the last as it ends. The second between ticks is not in the
	 * data, which gives the damage a second.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Item_Urn_Damage` thinks every 1 s
	 * (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
