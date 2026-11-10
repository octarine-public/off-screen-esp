// AUTO-GENERATED - do not edit.
/**
 * Battle Hunger: a debuff burning and slowing its target for `duration`. Cast again on it, it only
 * renews the one it carries; with Aghanim's Shard (`should_stack`) each cast lays one more, and
 * Berserker's Call lays one on every unit it taunts.
 */
declare class axe_battle_hunger extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_axe_battle_hunger"
	public IsDebuff(): this is IDebuff
	/**
	 * With the Shard the hungers on a unit stack without a cap - each its own, burning beside the
	 * others (two on Chaos Knight 0.4 s apart, 19 October 2026); without it, none.
	 */
	public get MaxStacks(): number
	/**
	 * Battle Hunger deals its damage only as it ticks: `damage_per_second` over each half second,
	 * the first as it lands, the last as it ends. The half second is not in the data, which gives
	 * the damage a second.
	 * The 0.5 s between ticks is the server's own: `CDOTA_Modifier_Axe_BattleHunger` thinks every
	 * 0.5 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
