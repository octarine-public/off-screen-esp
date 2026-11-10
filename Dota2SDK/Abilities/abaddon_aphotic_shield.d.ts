// AUTO-GENERATED - do not edit.
declare class abaddon_aphotic_shield extends Ability {
	/** Its shield keeps `damage_absorb` damage of any type off the unit it is cast at. */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Its shield stands `duration`. */
	public GuardDuration(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
}
