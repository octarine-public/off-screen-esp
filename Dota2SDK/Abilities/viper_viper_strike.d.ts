// AUTO-GENERATED - do not edit.
declare class viper_viper_strike extends Ability {
	public get ProjectileAttachment(): string
	/**
	 * Viper Strike deals its damage only as it ticks: `damage` every 1.01 s, the first as it
	 * lands, the last before it ends. The 1.01 s is the server's own, not the data's, which gives
	 * `damage` a second: the slow's OnCreated starts thinking every 1.01 s (server.dll,
	 * `CDOTA_Modifier_Viper_ViperStrike_Slow`). The target's status resistance shortens it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
	/** Its first tick lands before its Break (`does_break`): measured on Prophet's Pendulum. */
	public get HitBeforeBreak(): boolean
	/** Its hit breaks the unit while the poison lasts (`Breaks`). */
	protected FillEffects(out: AbilityEffects): void
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
	/** Its poison slows the unit by `bonus_movement_speed` percent, fading evenly to nothing over `duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
