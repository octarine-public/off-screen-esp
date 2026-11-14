// AUTO-GENERATED - do not edit.
declare class hoodwink_sharpshooter extends Ability implements INuke {
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(_target: Unit): number
	public get Range(): number
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * The bolt breaks the hero it hits - the data does not say so, the tooltip does - before its
	 * damage lands (measured).
	 */
	public get Breaks(): boolean
	/**
	 * Seconds the bolt breaks and slows a unit: `max_slow_debuff_duration` by the share of the
	 * charge, as its damage (`modifier_hoodwink_sharpshooter_windup`); `base_power` of it before
	 * the charge.
	 */
	public get BreakDuration(): number
}
