// AUTO-GENERATED - do not edit.
declare class terrorblade_sunder extends Ability implements IHealthRestore<Unit>, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	/** It takes health off an enemy whose share of it is above Terrorblade's. */
	public IsNuke(): this is INuke
	/**
	 * The health it takes off `target`: Terrorblade's share of his health set on it - no lower than
	 * `hit_point_minimum_pct` - no resistance weighed; none for a target at or below that share.
	 * It never kills.
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	/** The data calls its targets custom: a hero or a creep, as `CanTarget` reads a custom type. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
