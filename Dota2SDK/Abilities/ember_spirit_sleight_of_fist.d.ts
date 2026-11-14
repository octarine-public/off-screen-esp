// AUTO-GENERATED - do not edit.
declare class ember_spirit_sleight_of_fist extends Ability implements INuke {
	/**
	 * Cast the way Ember Spirit stands while he bears `modifier_ember_spirit_fire_remnant`
	 * (`Ability.RequiresFacing`).
	 */
	public get RequiresFacing(): boolean
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/** While he strikes Ember Spirit is invulnerable. */
	public get AppliesUnitState(): bigint
	/** The invulnerability is Ember Spirit's own. */
	public get StatesOnCaster(): boolean
	/**
	 * For Ember Spirit himself: an `attack_interval` for each unit he strikes cast at his spot
	 * (`StatesSpotOf`), none without one; for another unit as the base says.
	 */
	public GetAppliedDuration(target: Unit): number
	/**
	 * Toward the enemy within its reach - cast range and radius - with the most units it strikes
	 * round it, no farther than the cast range so it goes where he stands: he is invulnerable only
	 * while he strikes; `undefined` with none within reach.
	 */
	public StatesSpotOf(caster: Unit): Nullable<Vector3>
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
}
