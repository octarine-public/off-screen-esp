// AUTO-GENERATED - do not edit.
declare class undying_soul_rip extends Ability implements IHealthRestore<Unit>, IHealthCost, INuke {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	/**
	 * What every unit Soul Rip counts loses as it goes - Undying himself among them: alone by the
	 * target, his health dropped by 48 of `damage_per_unit` 50, the rest his regeneration
	 * (21 October 2026, demo).
	 */
	public get HealthCost(): number
	public IsNuke(): this is INuke
	/** The data calls its targets custom: a unit of either side, read as `CanTarget` reads a custom team. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep, as `CanTarget` reads a custom type. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetRawDamage(target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
}
