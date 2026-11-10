// AUTO-GENERATED - do not edit.
declare class dawnbreaker_solar_guardian extends Ability {
	/** The flight lasts its channel and air time; a unit where she lands is stunned for `land_stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The pulses where she comes down, from the channel's start until she lands - its channel and
	 * air time (`GetMaxDurationForLevel`): `base_damage` each `pulse_interval`, the first at once,
	 * none as she lands; then `land_damage` as she lands. The Scepter's aura after the landing is
	 * not counted.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * How far from an allied hero - herself among them - she may come down: the game sets a point
	 * cast farther off this far from the nearest one, toward the point.
	 */
	public get MaxOffset(): number
	/** The whole map: she lands beside an allied hero wherever it is (the data's cast range is 0). */
	public get CastRange(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
