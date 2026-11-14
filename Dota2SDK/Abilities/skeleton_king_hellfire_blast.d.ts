// AUTO-GENERATED - do not edit.
declare class skeleton_king_hellfire_blast extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The burn after the blast: `blast_dot_damage` each second of `blast_dot_duration`, the first
	 * as the stun ends, none as the burn ends. The second between ticks is not in the data, which
	 * gives the damage a second.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_SkeletonKing_HellfireBlast` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
}
