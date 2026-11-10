// AUTO-GENERATED - do not edit.
declare class modifier_shredder_flamethrower_damage extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	/** The flame burns the unit while it stays before it (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Its ability's ticks while the flame on its caster lasts and the debuff lingers: the flame lays
	 * it anew each time it thinks, so the flame's end ends them; their time is not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
