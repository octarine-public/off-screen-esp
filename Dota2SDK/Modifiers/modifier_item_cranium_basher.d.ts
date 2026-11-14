// AUTO-GENERATED - do not edit.
/**
 * Skull Basher's passive: its bonus damage, and a bash of `bash_duration` on a chance of each
 * attack - `bash_chance_melee` or `bash_chance_ranged` - while the bash is ready.
 */
declare class modifier_item_cranium_basher extends Modifier {
	/** A chance bash counts as it may: `bash_duration` while the bash is ready (`BashReady`). */
	public SwingStun(target: Unit): number
	/** The bash's damage on its chance: `bonus_chance_damage` of the item's type. */
	public SwingProc(target: Unit, _started: boolean, out: ISwingProc): boolean
	public get IsPurgable(): boolean
}
