// AUTO-GENERATED - do not edit.
declare class doom_bringer_doom extends Ability {
	/**
	 * Doom deals its damage only as it ticks: `damage` each second, the first as it lands, the last
	 * as it ends. The second between ticks is the server's own, not the data's, which gives `damage`
	 * a second: the modifier's OnCreated starts thinking every 1 s times what the target's status
	 * resistance leaves of the duration (server.dll, `CDOTA_Modifier_DoomBringer_Doom`) - it shortens
	 * Doom but keeps every tick, closer together.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get AppliesUnitState(): bigint
	/** Its first tick lands before its Break: measured on Prophet's Pendulum. */
	public get HitBeforeBreak(): boolean
}
