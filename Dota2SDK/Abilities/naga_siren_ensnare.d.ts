// AUTO-GENERATED - do not edit.
declare class naga_siren_ensnare extends Ability {
	/**
	 * A cyclone breaks the cast in its cast point and keeps it from being cast, whatever the data's
	 * invulnerable flag lets it target.
	 */
	public get HitsInvulnerable(): boolean
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public get CanHitSpellImmuneEnemy(): boolean
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** With the Scepter its hit also breaks the unit for as long (`Breaks`, `does_break`). */
	protected FillEffects(out: AbilityEffects): void
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
}
