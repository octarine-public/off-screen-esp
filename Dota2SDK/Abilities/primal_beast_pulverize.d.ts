// AUTO-GENERATED - do not edit.
declare class primal_beast_pulverize extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * Where `unit`, taken up by `beast` at the game time `since`, is until `until`, the channel's
	 * end: in his hand - its networked place stays put - then thrown `cast_range` before him, the
	 * way he faced as he took it.
	 */
	public DropOf(unit: Unit, beast: Unit, since: number, until: number): Nullable<Motion>
	public IsNuke(): this is INuke
	public GetBaseChannelTimeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The slams deal its damage, while Primal Beast channels: one each `interval`, the first an
	 * `interval` in, as many as fit in `channel_time`, `damage` and `bonus_damage_per_hit` more for
	 * each slam before it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
