// AUTO-GENERATED - do not edit.
declare class modifier_broodmother_sticky_snare_root extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/** The snare burns the unit it roots by itself (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The burn of a sprung snare, its own and not a cast's: `damage_per_second` each second while
	 * the root lasts (`root_duration`), the first a quarter second after the root, the trap keeping
	 * its own time; the second is not in the data.
	 * Its ticks are the server's own: `CDOTA_Modifier_Broodmother_StickySnare_Root` thinks first
	 * 0.25 s after it is laid, then every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
}
