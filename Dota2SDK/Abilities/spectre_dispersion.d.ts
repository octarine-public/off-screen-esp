// AUTO-GENERATED - do not edit.
/**
 * Dispersion: a passive that turns part of the damage Spectre takes back on its dealers, which
 * Aghanim's Shard makes a cast at nothing as well - `activation_bonus_pct` more of it for
 * `activation_duration` (`modifier_spectre_dispersion_boost`), at `activation_manacost` every
 * `activation_cooldown`. The data keeps it a passive with the Shard too; the game takes the cast
 * all the same (21 October 2026, demo: the boost on, 25 s of cooldown). Without the Shard it is
 * no cast.
 */
declare class spectre_dispersion extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_spectre_dispersion_boost"
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** Cast with the Shard only; without it, the passive alone. */
	public get CanBeUsable(): boolean
	/** The boost is Spectre's own, while he takes the fight's damage. */
	public IsBuff(): this is IBuff
	public GetBaseManaCostForLevel(level: number): number
	public GetMaxCooldownForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
