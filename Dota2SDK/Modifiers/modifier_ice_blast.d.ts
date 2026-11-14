// AUTO-GENERATED - do not edit.
declare class modifier_ice_blast extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** The frostbite ticks on the unit by itself: its ability's (`Ability.DamageOverTime`). */
	/** The frostbitten unit shatters below `kill_pct` percent of its maximum health. */
	public get KillThreshold(): number
	public get IsPurgable(): boolean
}
