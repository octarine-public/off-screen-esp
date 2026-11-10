// AUTO-GENERATED - do not edit.
/**
 * Time Dilation: a debuff on the enemies within `radius` - a stack for each of their abilities on
 * cooldown, slowing them and their cooldowns and burning them per stack - for `duration`, held
 * while they stand in a Chronosphere. Its magical type deals nothing at once: it is no nuke.
 */
declare class faceless_void_time_dilation extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_faceless_void_time_dilation_slow"
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The fields' damage: `base_damage` and `damage_per_stack` for each stack a tick - one as they
	 * land, one more for each ability of the unit on cooldown, only the first counted here - every
	 * 1.1 s of `duration`, the first a tick after it lands; the target's status resistance shortens
	 * it. The 1.1 s is the server's own, not the data's: the slow thinks every 0.1 s and deals the
	 * damage on the first think more than a second after the last, the eleventh (server.dll,
	 * `CDOTA_Modifier_FacelessVoid_TimeDilation_Slow`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public IsDebuff(): this is IDebuff
}
