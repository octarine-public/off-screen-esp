// AUTO-GENERATED - do not edit.
declare class rubick_spell_steal extends Ability {
	/**
	 * The spell a steal of `target` takes now: the last of its stealable spells that went off
	 * (`Ability.WentOffAt`) - a toggle turned on is one, Rot after a Meat Hook takes Rot; a toggle
	 * turned off, a charge coming back or a cast broken off in its cast point is not; an item is
	 * not a spell; none before it cast one in sight.
	 * @example
	 * const takes = steal.SpellOf(enemy) // enigma_black_hole, right after the Black Hole went
	 */
	public SpellOf(target: Unit): Nullable<Ability>
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
}
