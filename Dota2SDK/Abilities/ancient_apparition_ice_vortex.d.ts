// AUTO-GENERATED - do not edit.
declare class ancient_apparition_ice_vortex extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The vortex hurts the units within `radius` while it stands (`vortex_duration`):
	 * `damage_per_second` a second after it lands and each second on, the last as it ends, on for
	 * half a second after a unit walks out - its debuff's half second; the second is not in the
	 * data. Its own debuff lowers the unit's magic resistance (`spell_resist_pct`), weighed once on
	 * it.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_AncientApparition_IceVortex`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get IsAmplifier(): boolean
	/** An enemy in the vortex takes more magical damage (`spell_resist_pct`): its magic resistance is cut. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Laid under an enemy first, the vortex cuts its magic resistance by `spell_resist_pct` percent
	 * while the enemy stands in it (`ResistCutAmplification`): the magical damage of `ability` after
	 * it lands harder by as much. Not on one in a vortex already - one debuff for all of them.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
}
