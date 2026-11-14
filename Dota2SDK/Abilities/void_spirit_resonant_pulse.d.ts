// AUTO-GENERATED - do not edit.
declare class void_spirit_resonant_pulse extends Ability implements INuke {
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * With the Scepter the ring silences the enemies it hits (`silence_duration_scepter`); with no
	 * owner - the class looked at before any unit carries it - at its best.
	 */
	public get AppliesUnitState(): bigint
	/**
	 * Its barrier on Void Spirit takes `base_absorb_amount` - and `absorb_per_hero_hit` for each hero
	 * the pulse hits, not weighed - of physical damage (INCOMING_PHYSICAL_DAMAGE_CONSTANT), of any
	 * with `is_all_barrier` (INCOMING_DAMAGE_CONSTANT).
	 */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Its barrier stands `buff_duration`. */
	public GuardDuration(_target: Unit): number
}
