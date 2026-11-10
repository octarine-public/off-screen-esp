// AUTO-GENERATED - do not edit.
declare class troll_warlord_battle_trance extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_troll_warlord_battle_trance"
	public IsBuff(): this is IBuff
	/** Cast at nothing: the trance goes on Troll himself - the game data names no behavior. */
	public BehaviorOf(data: AbilityData): DOTA_ABILITY_BEHAVIOR
	public get AppliesUnitState(): bigint
	/** The trance holds Troll himself to his attacks, no one else. */
	public get StatesOnCaster(): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Troll's health goes no lower than 1 in the trance (`MIN_HEALTH`). */
	public get KeepsAlive(): boolean
	/**
	 * Its cast lays a basic dispel on Troll - a strong one with `strong_dispel`; the basic one read
	 * off the class, before any unit carries it.
	 */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
