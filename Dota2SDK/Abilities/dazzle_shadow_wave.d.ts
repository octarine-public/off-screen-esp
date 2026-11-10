// AUTO-GENERATED - do not edit.
/**
 * Shadow Wave: cast at an ally, it heals Dazzle, that ally and the allies it arcs to
 * (`bounce_radius`), each hit dealing its damage to the enemies within `damage_radius` of it. With
 * Aghanim's Scepter it may be cast at an enemy as well (`TargetTeamMask`), hitting it at once.
 */
declare class dazzle_shadow_wave extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	/**
	 * Its allies, and with Aghanim's Scepter its enemies too: the server's target team turns to both
	 * with it (server.dll, `CDOTA_Ability_Dazzle_ShadowWave`).
	 */
	public get TargetTeamMask(): DOTA_UNIT_TARGET_TEAM
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	/** Its damage lands on the enemies round each unit it heals. */
	public get HitsAroundTarget(): boolean
}
