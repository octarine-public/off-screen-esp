// AUTO-GENERATED - do not edit.
/**
 * Infest: Lifestealer goes into another unit and bursts out of it - at Consume, or as an enemy hero's
 * `infest_duration_enemy` runs out - dealing `damage` within `radius`. Its reach is its values'
 * `AbilityCastRange`, as any ability's, with nothing on top: 100 more sent the order from 540 off
 * the target with the Scepter's 400 - lost, the cast began 420 off (20 October 2026, demo).
 * Inside, Lifestealer is invulnerable and out of the game - an enemy's cast at him in its cast
 * point breaks - till he comes out by Consume: a guard with no end of its own (`EndedBy`).
 */
declare class life_stealer_infest extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * An enemy hero only while it may be infested a while (`infest_duration_enemy`, the Scepter's):
	 * without it the game turns the order down - three orders lost, then refused, at Juggernaut
	 * (20 October 2026, demo). Any other unit as the game's own filter has it.
	 */
	public CanTarget(unit: Unit): boolean
	/** Inside a unit Lifestealer is invulnerable and out of the game. */
	public get AppliesUnitState(): bigint
	/** The states are Lifestealer's own, not a hold of the unit he goes into. */
	public get StatesOnCaster(): boolean
	/**
	 * Cast for its states, it goes into the nearest unit in sight he may infest within its reach,
	 * no walk - no enemy hero, which throws him out as `infest_duration_enemy` runs out, not at
	 * Consume.
	 */
	public StatesTargetOf(caster: Unit): Nullable<Unit>
	/** Inside he stays till he comes out (`EndedBy`). */
	public GuardDuration(_target: Unit): number
	/** Consume brings him out. */
	public get EndedBy(): Nullable<Ability>
	/**
	 * The data calls its targets custom: a unit of either side, an enemy hero only as `CanTarget`
	 * lets.
	 */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
