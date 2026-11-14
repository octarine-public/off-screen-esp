// AUTO-GENERATED - do not edit.
/**
 * Sprout: a ring of temporary trees around the unit or the point it is cast at, standing
 * `duration`, with `sprout_damage` to the enemies within `sprout_damage_radius`. Nothing on the
 * unit holds it - no state, no modifier: the trees do, as long as they stand (`RingUntil`).
 */
declare class furion_sprout extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Game time the ring of a Sprout around `target` stands until: the temporary trees whose ring's
	 * middle (`TempTree.CircleCenter`) is nearer `target` than they are - it stands inside them -
	 * `MaxDuration` after they grew. Cast at Chaos Knight at level 4, 8 trees grew 150 off him
	 * 0.4 s after the order and were gone 4.03 s after that (demo, 20 October 2026). `-Infinity`
	 * for none.
	 * @example
	 * const held = sprout.RingUntil(enemy) > GameState.RawGameTime
	 */
	public RingUntil(target: Unit): number
}
