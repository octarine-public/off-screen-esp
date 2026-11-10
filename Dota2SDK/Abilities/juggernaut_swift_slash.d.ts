// AUTO-GENERATED - do not edit.
declare class juggernaut_swift_slash extends Ability {
	/** The short slash shares Omnislash's radius. */
	public GetBaseAOERadiusForLevel(_level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** Juggernaut slashes invulnerable and immune to spells, as in Omnislash. */
	public get AppliesUnitState(): bigint
	/** The states are Juggernaut's own, cast at an enemy (`StatesTargetOf`). */
	public get StatesOnCaster(): boolean
}
