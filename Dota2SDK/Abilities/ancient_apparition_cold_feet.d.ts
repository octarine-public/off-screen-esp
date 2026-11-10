// AUTO-GENERATED - do not edit.
declare class ancient_apparition_cold_feet extends Ability {
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/**
	 * Cold Feet deals its damage only as it ticks: `damage_per_second` over each half second, the
	 * first as it lands, for 4 s, the last half a second before it ends and turns into the freeze.
	 * Neither the half second nor the 4 s are in the data.
	 * The server's `CDOTA_Modifier_AncientApparition_ColdFeet` thinks every 0.1 s only to freeze
	 * - it deals no damage, nor does the cast (server.dll): where the ticks come from is not read
	 * off it, the half second is measured.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	public get Range(): number
}
