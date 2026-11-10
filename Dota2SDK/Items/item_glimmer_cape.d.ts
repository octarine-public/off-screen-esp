// AUTO-GENERATED - do not edit.
declare class item_glimmer_cape extends Item {
	/** Its fade keeps `barrier_block` magical damage off the unit it is cast at. */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Its barrier stands `duration`. */
	public GuardDuration(_target: Unit): number
	public get IsInvisibility(): boolean
	/** The unit it is cast at fades `initial_fade_delay` after the cast. */
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * @description Returns the cast delay of the ability. Time in seconds until the cast.
	 * @return {number}
	 */
	public GetCastDelay(_unit?: Unit | Vector3, _movement?: boolean, _directionalMovement?: boolean, _currentTurnRate?: boolean): number
}
