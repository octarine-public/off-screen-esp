// AUTO-GENERATED - do not edit.
declare class modifier_shredder_chakram_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected cachedSlow: number
	protected cachedSlowHealthPct: number
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected readonly DeclaredEvents: EModifierfunction[]
	/** The blade spins over the unit while it stays near (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * Its blade's ticks while Timbersaw's mana pays for the spin: the blade lays the debuff anew
	 * each time it thinks, so it ends them, not the debuff; their time is not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public PostDataUpdate(): void
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
