// AUTO-GENERATED - do not edit.
declare class invoker_chaos_meteor extends invoker_spell_extends {
	/** The meteor falls for a fixed time rather than flying at a speed. */
	public get Speed(): number
	public get LandTime(): number
	/** Units the meteor rolls on from where it lands, along the direction it was cast in. */
	public get TravelDistance(): number
	/** Speed of the roll. */
	public get TravelSpeed(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The contact damage by Exort. */
	public get AbilityDamage(): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The contacts after the one as it lands, at a unit where it lands: `main_damage` by Exort each
	 * `damage_interval` while the rolling meteor (`TravelSpeed`) still covers it
	 * (`area_of_effect`); none after a unit walks out. Its burn beside (`BesideOverTime`).
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/**
	 * The burn a contact lays: `burn_dps` by Exort each `damage_interval` - the whole of it each
	 * time - for `burn_duration` after the latest contact, the first a tick after it, the last as
	 * it ends; a contact renews the time, not the ticks'.
	 */
	public BurnOverTime(out: DamageTicks): boolean
	public GetBaseActivationDelayForLevel(level: number): number
	/** The meteor lands whole where it was cast and rolls on along the cast direction, harming whatever is under it. */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
}
