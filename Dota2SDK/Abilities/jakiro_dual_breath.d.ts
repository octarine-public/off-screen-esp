// AUTO-GENERATED - do not edit.
declare class jakiro_dual_breath extends Ability {
	public get EndRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The fire's burn: `burn_damage` a second over each half second for `AbilityDuration` after
	 * it reaches a unit, the last as it ends. The half second is not in the data.
	 * Its ticks are the server's own: `CDOTA_Modifier_Jakiro_DualBreath_Burn` thinks first 0.1 s
	 * after it is laid, then every 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
