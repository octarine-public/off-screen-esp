// AUTO-GENERATED - do not edit.
/**
 * The Swarm: a wave of beetles flying to a point, each latching onto the first enemy it meets and
 * biting it for `duration` (16 s), the debuff on that unit. Its cooldown drops to 20 s - shorter
 * than the bites last: cast again on a unit that carries them, it lays a second swarm where one is
 * enough (21 October 2026, Weaver's combo).
 */
declare class weaver_the_swarm extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_weaver_swarm_debuff"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The beetle's attacks after the first, which is the blow: one each `attack_rate` for `duration`,
	 * `damage` each - each takes `armor_reduction` more armor off, the later ones not counted the
	 * stronger; none once the beetle is killed.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
