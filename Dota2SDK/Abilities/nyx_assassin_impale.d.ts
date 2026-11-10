// AUTO-GENERATED - do not edit.
declare class nyx_assassin_impale extends Ability implements INuke {
	/** Cast the way Nyx Assassin stands while he is burrowed (`Ability.RequiresFacing`). */
	public get RequiresFacing(): boolean
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** Burrow lengthens the cast range while Nyx sits underground. */
	public GetBaseCastRangeForLevel(level: number): number
}
