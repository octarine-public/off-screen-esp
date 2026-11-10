// AUTO-GENERATED - do not edit.
declare class muerta_dead_shot extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public get RicochetRadiusStart(): number
	public get RicochetExpandPerSecond(): number
	public GetEndRadius(createTime: number, bulletTime: number): number
	public GetEndRadiusByTime(lifetime: number): number
	public GetEndRadiusByPoints(start: Vector3, end: Vector3, bulletSpeed?: number): number
	/**
	 * How far the ricochet off a unit or a tree at `start` carries the shot at least: as far as the
	 * shot flew from Muerta to it (the data's `ricochet_distance_multiplier` is more). Cast at a
	 * tree 830 off her, it came back 221 to the enemy before it and feared it (20 October 2026, the
	 * hero demo).
	 */
	public RicochetReach(start: Vector3): number
	/**
	 * The living tree within the shot's cast range of Muerta nearest `position` whose ricochet
	 * reaches it (`RicochetReach`) - map trees and temporary ones alike; none without one.
	 * @example
	 * const tree = shot.RicochetTree(enemy.Position)
	 */
	public RicochetTree(position: Vector3): Nullable<Tree | TempTree>
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
