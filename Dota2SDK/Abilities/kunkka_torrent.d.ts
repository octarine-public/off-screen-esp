// AUTO-GENERATED - do not edit.
declare class kunkka_torrent extends Ability {
	/** Cast the way its caster stands: it turns to nothing (`Ability.RequiresFacing`). */
	public get RequiresFacing(): boolean
	/**
	 * Game time the first of the owner's torrents still to rise breaks out with `position` in its
	 * area; `Infinity` for none. A torrent rises `delay` after its thinker comes.
	 * @example
	 * const rises = torrent.EruptionNear(mark.Spot)
	 * if (rises - GameState.RawGameTime <= xReturn.CastPoint) {
	 * 	xReturn.UseAbility()
	 * }
	 */
	public EruptionNear(position: Vector3): number
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/** The share of `torrent_damage` that lands as the torrent erupts (`percent_instant`). */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The rest of `torrent_damage` over the stun: a tick every `damage_tick_interval`, the first as
	 * it erupts and the last as the stun ends, the damage split evenly between them.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetCastDelay(_unit?: Unit | Vector3, _movement?: boolean, _directionalMovement?: boolean, _currentTurnRate?: boolean): number
	public get AppliesUnitState(): bigint
}
