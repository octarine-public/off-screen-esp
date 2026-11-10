// AUTO-GENERATED - do not edit.
declare class modifier_treant_overgrowth extends Modifier implements IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/** Overgrowth ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get IsPurgable(): boolean
}
