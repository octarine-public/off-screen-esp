// AUTO-GENERATED - do not edit.
/**
 * Eye of the Storm: a storm over Razor for `duration`, cast at nothing - a buff on himself
 * (`modifier_razor_eye_of_the_storm`): every `strike_interval` it strikes an enemy within `radius`
 * of him for `damage`, each strike taking armor off it.
 */
declare class razor_eye_of_the_storm extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_razor_eye_of_the_storm"
	public IsBuff(): this is IBuff
	/**
	 * It lasts the whole fight and strikes round Razor wherever he stands: cast as the fight begins.
	 * Read by its damage as a nuke, it waited for the target within its radius (500), nearer than he
	 * swings from - he fought 540 off it and never cast it (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The storm deals its damage only as it strikes, while it lasts (`duration`): one each
	 * `strike_interval`, the first a strike in, `damage` each at the unit it picks (`TickChance`);
	 * none after a unit walks out of `radius`. Each strike takes `armor_reduction` armor more off
	 * its unit - later strikes are not counted the stronger.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Whether a strike picks `target` where it stands: the visible enemy hero or creep with the
	 * least health within `radius` of Razor (the server's `OnIntervalThink`) - with the Scepter,
	 * one of the two least.
	 */
	public TickChance(target: Unit, _tick: number): number
}
