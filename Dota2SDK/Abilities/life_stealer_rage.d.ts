// AUTO-GENERATED - do not edit.
/**
 * Rage: Lifestealer is immune to debuffs for `duration` - a buff on himself, cast at nothing and at
 * once; he runs faster and resists magic meanwhile.
 */
declare class life_stealer_rage extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_life_stealer_rage"
	public IsBuff(): this is IBuff
	/**
	 * Its debuff immunity and its speed serve the run in, before the target's controls land: cast as
	 * the fight begins. Waiting for his attack range, it went 1.4 s after Open Wounds, cast from 700
	 * (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** Lifestealer is immune to debuffs for `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/** Its cast lays a basic dispel on Lifestealer. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
