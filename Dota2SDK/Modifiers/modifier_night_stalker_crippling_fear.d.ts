// AUTO-GENERATED - do not edit.
declare class modifier_night_stalker_crippling_fear extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/**
	 * Crippling Fear ticks on the unit by itself while it is on it - renewed while the unit
	 * stays in the area: its ability's damage over time (`Ability.DamageOverTime`).
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
}
