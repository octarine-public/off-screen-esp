// AUTO-GENERATED - do not edit.
declare class invoker_emp extends invoker_spell_extends {
	/** The mana it burns at most by Wex's level, as the game's `levelkey`. */
	public get AbilityDamage(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/** The mana it burns at most, by Wex. */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Its damage at `target`: `damage_per_mana_pct` percent of the mana it burns there - no more
	 * than the unit has as it goes off (`context`'s `Time`; `Unit.ManaAt`), up to `mana_burned`
	 * (`AbilityDamage`).
	 */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
}
