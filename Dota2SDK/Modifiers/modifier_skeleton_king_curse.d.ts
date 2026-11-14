// AUTO-GENERATED - do not edit.
declare class modifier_skeleton_king_curse extends Modifier {
	/** The Shard's curse of a Mortal Strike deals its damage as it ends (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * As it ends, the damage it holds - `curse_damage_pct` percent of what the critical strike
	 * dealt, its stack count - whole.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	public get IsPurgable(): boolean
}
