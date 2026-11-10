// AUTO-GENERATED - do not edit.
/**
 * Slow Burn on a unit: a magical hit of a spell of Lina's lays one - each hit its own - and it
 * deals `burn_damage_pct` percent of what the hit took off, over `impact_damage_pct` percent of
 * it, spread over `burn_duration`: a tick every `lina_slow_burn.TickInterval`, the first that long
 * after the hit, the last as it ends; each tick as it is - no resistance or amplification again -
 * rounded up (`DamageTicks.Removal`). The server's `CDOTA_Modifier_Lina_Slow_BurnIntrinsic` lays
 * it from the hit's damage on Lina's damage event - a magical one of an ability but Slow Burn and
 * those that proc no other (`DOTA_ABILITY_BEHAVIOR_DONT_PROC_OTHER_ABILITIES`), not reflected - and
 * keeps the tick on the server alone (server.dll): it is taken from the hit the game reports
 * (`entity_hurt`) on the tick it is laid, whichever of the two the client sees first - the hit
 * first in the demo. Demo, 1 November 2026: Light Strike Array's 215 on melee creeps and 43 on a
 * siege creep (80% magic resistance) burnt 35 and 7 a second, 1 to 4 s after it.
 */
declare class modifier_lina_slow_burn extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredEvents: EModifierfunction[]
	/** It burns by itself once the hit laying it is known (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/** Its ticks: the share of the hit laying it, as it is (`DamageTicks.Removal`). */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	public GetTexturePath(): string
	public IsDebuff(): this is IDebuff
	public get IsPurgable(): boolean
	/**
	 * Notes the hit of `damage` the game reports `inflictor` of the unit of index `caster` dealing
	 * the unit of index `victim`: the burn it lays, laid already, takes it; one coming after it is
	 * left for it, for a tick.
	 */
	public static Hurt(victim: number, caster: number, inflictor: Ability, damage: number): void
	protected UpdateSpecialValues(): void
	protected OnAdded(): void
}
