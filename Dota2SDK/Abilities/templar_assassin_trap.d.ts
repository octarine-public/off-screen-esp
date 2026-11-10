// AUTO-GENERATED - do not edit.
/**
 * Trap: springs the Psionic Trap of the caster's nearest to her, one per cast - cast twice, the
 * trap she stood on went first, then one 1800 away (21 October 2026, demo).
 */
declare class templar_assassin_trap extends Ability {
	/**
	 * The trap it springs - Templar Assassin's nearest - burning the units within `trap_radius` of
	 * it for `trap_duration`: `trap_bonus_damage` split over each `damage_tick_rate`, the first a
	 * tick after it springs, the last as it ends, only once it has charged
	 * `trap_max_charge_duration` since it was placed (`TickChance`); none after a unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/** Whether the trap it springs is charged and `target` stands within its radius and hull. */
	public TickChance(target: Unit, _tick: number): number
	/**
	 * The trap a cast springs: the caster's living one nearest to her; none without one.
	 * @example
	 * const sprung = trap.NextTrap?.Covers(enemy.Position)
	 */
	public get NextTrap(): Nullable<npc_dota_templar_assassin_psionic_trap>
}
