// AUTO-GENERATED - do not edit.
declare class modifier_maledict_dot extends Modifier {
	/**
	 * Maledict ticks on the unit by itself: its ability's damage over time
	 * (`Ability.DamageOverTime`).
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * Its ability's ticks and bursts, the bursts from the unit's health as the curse came on it - the
	 * curse beside this modifier notes it (`modifier_maledict.HealthLaid`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get IsPurgable(): boolean
}
