// AUTO-GENERATED - do not edit.
declare class kez_raptor_dance extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** As the dance starts Kez is invulnerable for a moment. */
	public get AppliesUnitState(): bigint
	/** The invulnerability is Kez's own. */
	public get StatesOnCaster(): boolean
	/** The invulnerability comes as the cast point begins, not as it ends. */
	public get StateDelay(): number
	/** He is invulnerable `invuln_period`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/** Each strike after the first strikes as the first (`GetRawDamage`). */
	public TickBonus(target: Unit): number
	/** The strikes after the first, the blow: `strikes` in all, `strike_interval` apart. */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
