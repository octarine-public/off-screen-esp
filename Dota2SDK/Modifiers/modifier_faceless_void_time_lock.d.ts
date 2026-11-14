// AUTO-GENERATED - do not edit.
/**
 * Time Lock on Faceless Void: a bash on a `chance_pct` chance of each attack - `duration` on a
 * hero, `duration_creep` on a creep.
 */
declare class modifier_faceless_void_time_lock extends Modifier {
	/** A chance bash counts as it may; none while Faceless Void is broken. */
	public SwingStun(target: Unit): number
	/**
	 * The bash's damage on its `chance_pct` chance: `bonus_damage` of the ability's type and the
	 * attack Faceless Void repeats after it, at its highest roll.
	 */
	public SwingProc(target: Unit, _started: boolean, out: ISwingProc): boolean
}
