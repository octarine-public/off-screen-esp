// AUTO-GENERATED - do not edit.
declare class pudge_rot extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Rot burns the units within `rot_radius` while it is on: `rot_damage` a second over each
	 * `rot_tick` - on the first frame once it has passed, its debuff thinking every frame - the
	 * first as it turns on, and on for half a second after a unit walks out - its debuff's half
	 * second, not in the data.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
