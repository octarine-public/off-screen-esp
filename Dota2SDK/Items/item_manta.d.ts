// AUTO-GENERATED - do not edit.
declare class item_manta extends Item implements IBuff {
	/**
	 * The modifier its caster wears while it splits, invulnerable: the game names it so, and it
	 * goes `invuln_duration` after it comes.
	 */
	public readonly BuffModifierName = "modifier_manta_phase"
	/** Its split hides its caster for a moment: a buff of its own. */
	public IsBuff(): this is IBuff
	/** As it splits its caster is invulnerable: what lands on it then misses it. */
	public get AppliesUnitState(): bigint
	/** The invulnerability is its caster's own. */
	public get StatesOnCaster(): boolean
	/** Its split dodges the projectiles flying at its caster that can be dodged. */
	public get Disjoints(): boolean
	/** Its illusions and the dispel it casts with open a fight: cast as it begins. */
	public get IsCombatBuff(): boolean
	/** Its split lays a basic dispel on its caster. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
