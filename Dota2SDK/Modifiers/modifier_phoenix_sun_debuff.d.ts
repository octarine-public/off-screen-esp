// AUTO-GENERATED - do not edit.
declare class modifier_phoenix_sun_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** The sun burns the unit while it stays near (`DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Its ability's ticks while the sun of its caster lasts and the debuff lingers: the aura lays it
	 * anew each time it thinks, so the sun's end ends them; their time is not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
