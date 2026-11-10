// AUTO-GENERATED - do not edit.
declare class juggernaut_omni_slash extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Juggernaut slashes invulnerable and immune to spells for its `duration`. */
	public get AppliesUnitState(): bigint
	/** The states are Juggernaut's own, cast at an enemy (`StatesTargetOf`). */
	public get StatesOnCaster(): boolean
	/** A slash: Juggernaut's attack and `bonus_damage`. */
	public GetRawDamage(target: Unit): number
	/** A slash of `raw` strikes as his attack does: through the target's armor and blocks. */
	public DamageOf(raw: number, target: Unit, _context?: IDamageContext, _type?: DAMAGE_TYPES): number
	/** Each slash after the first strikes as the first (`GetRawDamage`). */
	public TickBonus(target: Unit): number
	/**
	 * The slashes after the first, the blow, at a unit alone near: one each attack of Juggernaut
	 * `attack_rate_multiplier` times faster, over `duration`. The bonus attack speed of the slash
	 * and Blade Dance's critical strikes are not weighed.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
