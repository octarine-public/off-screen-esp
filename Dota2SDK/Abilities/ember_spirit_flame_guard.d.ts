// AUTO-GENERATED - do not edit.
declare class ember_spirit_flame_guard extends Ability {
	public get PassiveRadius(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Its shield takes `absorb_amount` of magical damage (INCOMING_SPELL_DAMAGE_CONSTANT). */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Of each blow, `shield_pct_absorb` percent. */
	public get BarrierShare(): number
	/** Its shield stands `duration`. */
	public GuardDuration(_target: Unit): number
	/**
	 * The guard burns the enemies within `radius` of Ember Spirit while it lasts (`duration`):
	 * `damage_per_second` over each `tick_interval`, the first a tick after it begins, the last as
	 * it ends, none after a unit walks out - its debuff lingers `linger_duration`, but not past the
	 * guard. A broken shield stops it, which is not weighed.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
