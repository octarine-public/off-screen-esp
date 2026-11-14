// AUTO-GENERATED - do not edit.
declare class obsidian_destroyer_astral_imprisonment extends Ability implements INuke {
	/** The prison takes the unit out of the game: out of reach, doing nothing. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	/** The implosion's, as the prison ends (`GetBaseActivationDelayForLevel`). */
	public GetBaseDamageForLevel(level: number): number
	/** The prison implodes as it ends, `prison_duration` after it lands. */
	public GetBaseActivationDelayForLevel(level: number): number
}
