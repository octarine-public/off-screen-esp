// AUTO-GENERATED - do not edit.
declare class skywrath_mage_concussive_shot extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	/**
	 * The shot takes only a hero its side sees as the cast ends: the game sends it at the nearest
	 * enemy hero within `launch_radius` that is in sight and not invisible (the server's cast looks
	 * with `DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE` and `DOTA_UNIT_TARGET_FLAG_NO_INVIS`), so one in the
	 * fog is never its target. Judged by what is seen now - a foe of the local player's while it is
	 * visible, a unit of ours while the other side sees it - on top of what any cast's effect needs
	 * (`Ability.CanHitAt`).
	 */
	public CanHitAt(target: Unit, time: number): boolean
	/** Its shot slows the unit it hits by `movement_speed_pct` percent for `slow_duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
