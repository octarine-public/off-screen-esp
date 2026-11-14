// AUTO-GENERATED - do not edit.
/**
 * Bedlam: Dark Willow's wisp circles her `roaming_radius` off, one round each
 * `roaming_seconds_per_rotation`, and every `attack_interval` hits an enemy within its
 * `attack_radius` of itself, for `roaming_duration`.
 */
declare class dark_willow_bedlam extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The Wisp's attacks while it roams (`roaming_duration`): one on the first frame each
	 * `attack_interval` has passed since the last, the first at once, `attack_damage` each at a
	 * unit it reaches (`TickChance`); none surely once the unit may walk off.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance an attack of the Wisp reaches `target` where it stands, the caster where it stands:
	 * the Wisp circles the caster `roaming_radius` away and strikes a unit within `attack_radius` of
	 * it and its hull - every time one that near the caster, else on the share of its circle within
	 * reach (0.351 at 361 away). A second enemy within reach shares the attacks: not weighed.
	 */
	public TickChance(target: Unit, _tick: number): number
	/** How far from Dark Willow the wisp circles: `roaming_radius`. */
	public get RoamingRadius(): number
	/**
	 * How far Dark Willow's middle may stand from `target`'s for the wisp to hit it wherever it is
	 * on its round: its `attack_radius` less the round's `roaming_radius`, to the target's edge.
	 * Farther, it hits only while it passes the target's side. In the demo (20 October 2026), over
	 * 3 s of Bedlam with Chaos Knight 105 off it hit him 11 times, 145 off 10, 324 off 6, 495 off 2 -
	 * once a round.
	 */
	public ReachOf(target: Unit): number
}
