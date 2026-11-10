// AUTO-GENERATED - do not edit.
declare class dark_seer_ion_shell extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_dark_seer_ion_shell"
	public IsBuff(): this is IBuff
	/**
	 * Its shell burns the enemies around its bearer for `duration` (26 s at the last level): cast
	 * as the fight begins - waiting for Dark Seer's attack range, it went after the Vacuum and
	 * the Wall, 2.3 s into the combo (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The shell hurts the enemies within `radius` of the unit it is on while it lasts:
	 * `damage_per_second` over each `tick_interval`, the first a tick after it lands, none after a
	 * unit walks out.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
