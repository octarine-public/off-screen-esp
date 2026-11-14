// AUTO-GENERATED - do not edit.
declare class item_overwhelming_blink extends item_blink implements INuke {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/**
	 * Beside the blow, `damage_pct_over_time` percent of its owner's strength spread over
	 * `duration`: a share each second, the first a second after the blink, the last as it ends.
	 * The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Item_Overwhelming_Blink_Debuff`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
