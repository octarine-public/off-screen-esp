// AUTO-GENERATED - do not edit.
declare class viper_nethertoxin extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The toxin flies to the point it was cast at and pools around it there: a circle, not a line.
	 * Read as a line, its flight ended a radius (400) and the target's hull short of the point -
	 * the pool expected 0.18 s before it comes (20 October 2026, demo: from some 650 it came 0.27 s
	 * after the cast, 0.27 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	protected DurationFrom(values: ISpecialValues, level: number): number
	/**
	 * The toxin hurts the units within `radius` while it lasts: each half second, the first half a
	 * second after it lands, `min_damage` a second at first, rising evenly to `max_damage` over
	 * `max_duration` from then, and on for half a second after a unit walks out; the half second is
	 * the game's server's (`StartIntervalThink(0.5)`), not in the data.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_Viper_Nethertoxin` thinks every
	 * 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
