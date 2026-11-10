// AUTO-GENERATED - do not edit.
/**
 * X Marks the Spot: a hero marked where it stands, set back there by Return - the stage the game
 * shows while the mark lasts - or as the mark ends.
 */
declare class kunkka_x_marks_the_spot extends Ability {
	/**
	 * The owner's mark on a hero now, its spot and its end with it: one at a time. None without.
	 * @example
	 * const mark = xMark.Mark
	 * if (mark !== undefined && mark.Parent?.IsEnemy(kunkka)) {
	 * 	torrent.UseAbility(mark.Spot)
	 * }
	 */
	public get Mark(): Nullable<modifier_kunkka_x_marks_the_spot>
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** The marked unit is set back on the mark as it ends. */
	public get MovesTarget(): boolean
	/** The mark sets its unit back as it ends: `duration` on an enemy, `allied_duration` on an ally. */
	public MovesTargetFor(target: Unit): number
}
