// AUTO-GENERATED - do not edit.
declare class invoker_cold_snap extends invoker_spell_extends implements INuke {
	/**
	 * The freeze the cast sets off at once: `freeze_damage` by Quas's level, as the game's
	 * `levelkey`. Each hit of `damage_trigger` or more while it lasts sets off another, a
	 * `freeze_cooldown` apart (Liquipedia) - not counted.
	 */
	public get AbilityDamage(): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
