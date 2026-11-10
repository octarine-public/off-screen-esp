// AUTO-GENERATED - do not edit.
/**
 * Echo Slash strikes a think after its cast, not on it: the cast (OnSpellStart in server.dll)
 * makes "now" the first strike's time and thinks at once, but a strike needs a later time, so
 * the first comes on the next think, 0.1 s on (`SetNextThink(0.1)`, a constant of the game's
 * code with no key value of its own) - the `ActivationDelay`.
 */
declare class kez_echo_slash extends Ability implements INuke {
	public get TravelDistance(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseActivationDelayForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	/**
	 * The echoes after the first strike (Liquipedia): `katana_strikes` strikes in all,
	 * `strike_interval` apart, each as the first (`TickBonus`), at a unit still in the line
	 * (`WhileInArea`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * An echo strikes as the first, but for the katana swap's bonus base damage
	 * (`katana_swap_bonus_damage` percent, while `modifier_kez_switch_weapons_flutter_katana` is
	 * on): the first strike spends it.
	 */
	public TickBonus(target: Unit): number
	/** The slash covers its line at once. */
	public get SkillShotType(): ESkillShotType
}
