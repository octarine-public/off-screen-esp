// AUTO-GENERATED - do not edit.
/**
 * Scorched Earth: Doom sets the ground around him on fire for `duration` - a buff on himself, cast
 * at nothing: it burns the enemies within `radius` of him and quickens him
 * (`bonus_movement_speed_pct`). With its last talent (`is_permanent`) the fire is on for good from
 * the moment the talent is learned.
 */
declare class doom_bringer_scorched_earth extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_doom_bringer_scorched_earth_effect"
	public IsBuff(): this is IBuff
	/**
	 * Its haste takes Doom into the fight, and the fire burns around him wherever he stands: cast as
	 * the fight begins. A nuke by its damage, it waited for the target within its radius (666), the
	 * haste left for the last steps of the walk; now it goes at once from 1100 too (20 October 2026,
	 * demo).
	 */
	public get IsCombatBuff(): boolean
	/**
	 * Not while the fire is on for good (`is_permanent`, its talent): the game takes the cast, and it
	 * trades the lasting fire for one of `duration` - learned, the talent put a fire with no end on
	 * Doom; cast, it was 16 s long and went out (20 October 2026, demo).
	 */
	public get CanBeUsable(): boolean
	/** Doom runs `bonus_movement_speed_pct` percent faster in the fire. */
	public SpeedsUp(caster: Unit): number
	/** Whether the fire is on for good: its talent is learned. */
	public get IsPermanent(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The flames burn the enemies within `radius` of Doom while they last (`duration`):
	 * `damage_per_second` each second, the first a second after the cast, the last as they end,
	 * none after a unit walks out; the second is not in the data.
	 * The 1 s between ticks is the server's own:
	 * `CDOTA_Modifier_DoomBringer_ScorchedEarthEffectAura` thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
