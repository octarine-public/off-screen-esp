// AUTO-GENERATED - do not edit.
declare class modifier_dragon_knight_corrosive_breath_dot extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	/** The corrosion an attack of the dragon lays ticks on the unit by itself (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The corrosion an attack lays: `corrosive_damage_per_second` each second, the first a second
	 * after the attack, the last as it ends, `corrosive_duration` after the latest attack; an
	 * attack renews the time, not the ticks'. The second is not in the data.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_DragonKnight_CorrosiveBreathDoT`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
