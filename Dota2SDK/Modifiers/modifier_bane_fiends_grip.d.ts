// AUTO-GENERATED - do not edit.
declare class modifier_bane_fiends_grip extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/** Fiend's Grip ticks on the unit by itself: its ability's damage over time (`Ability.DamageOverTime`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	public get IsStunDebuff(): boolean
}
