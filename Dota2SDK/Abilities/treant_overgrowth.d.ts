// AUTO-GENERATED - do not edit.
declare class treant_overgrowth extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Overgrowth deals its damage only as it ticks: `damage` each second, the first a second after
	 * it lands, the last as it ends. The second between ticks is not in the data, which gives
	 * `damage` a second. The target's status resistance shortens it.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Treant_Overgrowth` thinks every 1
	 * s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
