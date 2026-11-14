// AUTO-GENERATED - do not edit.
declare class modifier_shredder_flamethrower_damage extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * Its ability's ticks while the flame on its caster lasts and the debuff lingers: the flame lays
	 * it anew each time it thinks, so the flame's end ends them; their time is not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
