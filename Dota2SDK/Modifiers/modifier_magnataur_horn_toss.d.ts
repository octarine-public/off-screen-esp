// AUTO-GENERATED - do not edit.
declare class modifier_magnataur_horn_toss extends Modifier implements IDebuff {
	public readonly DebuffModifierName: string
	/**
	 * The toss: from where the bearer was taken up over Magnus to the spot `destination_offset`
	 * behind him as he stood when it came - all it throws is set down there - for `air_duration`
	 * (`magnataur_horn_toss.LandingFrom`).
	 */
	public CreateMotion(): Nullable<Motion>
	public get IsPurgable(): boolean
	public IsDebuff(): this is IDebuff
}
