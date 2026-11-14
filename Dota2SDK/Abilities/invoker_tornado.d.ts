// AUTO-GENERATED - do not edit.
declare class invoker_tornado extends invoker_spell_extends implements INuke {
	/**
	 * The lift: out of reach and out of action, both from the tick the tornado's modifier comes.
	 */
	public get AppliesUnitState(): bigint
	/** A cyclone: the game lifts for the whole of it whatever the target's status resistance. */
	public get IsAffectedByStatusResistance(): boolean
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** None as the tornado takes the unit up: its damage comes as the unit drops (`DamageOverTime`). */
	public GetRawDamage(_target: Unit): number
	/**
	 * The drop: `base_damage` and `wex_damage` by Wex as the lift ends, `lift_duration` by Quas
	 * after the tornado took the unit up - measured in the hero demo (26 October 2026): an Ogre Magi
	 * taken up at 2.37 s took nothing then and 308 as it dropped at 4.97 s.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
}
