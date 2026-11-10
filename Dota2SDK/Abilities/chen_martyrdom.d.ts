// AUTO-GENERATED - do not edit.
/**
 * Martyrdom: Chen's Zealot gives its life to hit an enemy for `base_value` and `current_hp_pct` of
 * the health it has left (or to heal an ally for a share of that).
 */
declare class chen_martyrdom extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * The Zealot dies casting it: what it is for is the kill. Cast as a plain nuke, a full Zealot
	 * (1900 health) gave its life at once for some 400 damage - and came back 30 s later (19
	 * October 2026, demo).
	 */
	public get IsFinisher(): boolean
	/**
	 * The data names no type; the game deals it magical: 25 + 20% of 1900 took 277 of Chaos Knight
	 * with 31.7% magic resistance - 405 x 0.683 (19 October 2026, demo).
	 */
	public get DamageType(): DAMAGE_TYPES
	public GetRawDamage(target: Unit): number
	public GetBaseDamageForLevel(level: number): number
}
