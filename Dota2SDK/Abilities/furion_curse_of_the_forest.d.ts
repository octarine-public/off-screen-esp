// AUTO-GENERATED - do not edit.
/**
 * Curse of the Forest - Aghanim's Shard: curses the enemy heroes within `range` of Nature's Prophet
 * (`AOERadius`), each harmed and slowed by the trees within `TreeRadius` of it - the treants of
 * Nature's Call counted as trees. With none there it only reveals them.
 */
declare class furion_curse_of_the_forest extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** How far from a cursed hero the trees that harm and slow it stand. */
	public get TreeRadius(): number
	/**
	 * The curse deals its damage only as it ticks: each second of `duration`, the first as it lands,
	 * the last as it ends - fewer under the unit's status resistance. The second is not in the data.
	 * Each tick is the trees' by the unit (`TickBonus`).
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Furion_CurseOfTheForest` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * A tick at `target`: `damage_per_tree` for each tree within `TreeRadius` of it, and for each of
	 * Nature's Prophet's treants there as many times as Spirit of the Forest's `multiplier`. The
	 * temporary trees (Sprout's) count in the game too, but not here: when they fall is not known.
	 */
	public TickBonus(target: Unit): number
	/**
	 * The trees that would harm and slow `target` cursed now: the living ones within `TreeRadius`
	 * of it, and the treants there. A Sprout's ring of 8 trees around Chaos Knight took 80 of his
	 * health a second, 15 a tree less his resistance (demo, 20 October 2026).
	 * @example
	 * const harms = curse.TreesAround(enemy) !== 0
	 */
	public TreesAround(target: Unit): number
}
