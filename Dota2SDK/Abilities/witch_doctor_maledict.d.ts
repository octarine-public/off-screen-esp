// AUTO-GENERATED - do not edit.
/**
 * Maledict: a curse on the heroes within `radius` of its point for `AbilityDuration`, its ticks
 * hitting by the health lost since it landed. A debuff (`modifier_maledict`): cast again while it
 * lasts, it lays one more curse for its small hit, the cooldown spent while the first still
 * counts the health lost (21 October 2026: the SDK had no debuff, aio did not know it was on).
 */
declare class witch_doctor_maledict extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_maledict"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	/** Maledict lands nothing at once: the data's `AbilityDamage` is its damage a second. */
	public GetBaseDamageForLevel(_level: number): number
	/**
	 * The curse's ticks: the data's `AbilityDamage` a second over each half second, the first as it
	 * lands, the last as it ends (`AbilityDuration`); and its `ticks` bursts over that time less a
	 * tenth of a second, the last a tenth before it ends, each `bonus_damage` for every
	 * `bonus_damage_threshold` health the unit lost since it landed (`DamageTicks.OfLost`). The
	 * half second and the tenth are not in the data. What else hurts the unit meanwhile is not
	 * counted toward its bursts.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_WitchDoctor_MaledictDoT` thinks
	 * every 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
