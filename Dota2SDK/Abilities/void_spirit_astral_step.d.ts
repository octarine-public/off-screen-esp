// AUTO-GENERATED - do not edit.
declare class void_spirit_astral_step extends Ability implements INuke {
	public get Speed(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** Its cast moves its caster: Void Spirit steps to the point. */
	public get MovesCaster(): boolean
	/** The rush cast from `from` at `toward`, starting at `landsAt`: at once, `max_travel_distance` that way at most and `min_travel_distance` at least. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	public GetRawDamage(target: Unit): number
	/**
	 * The Void Mark the step's attack leaves pops `pop_damage_delay` after it, `pop_damage` magical
	 * (hanging on `modifier_void_spirit_astral_step_debuff`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetDamage(target: Unit): number
}
