// AUTO-GENERATED - do not edit.
/**
 * Bushwhack: the net lands at its point and ties every enemy within its trap radius to the tree
 * nearest it among the trees around the point - map trees and temporary ones, Acorn Shot's among
 * them - stunning it and dragging it to that tree (`PullOf`). With no tree there it catches no
 * one (`TreesNear`).
 */
declare class hoodwink_bushwhack extends Ability implements INuke {
	/** How fast the net drags a unit to its tree. Not in the game data, so a class constant. */
	public static readonly PullSpeed = 797
	/**
	 * How near the tree's middle the net leaves a unit, beside its hull. Not in the game data, so a
	 * class constant.
	 */
	public static readonly TreeOffset = 100
	/** The particle that names a netted unit's tree, at control point 15. */
	public static readonly TargetParticle = "particles/units/heroes/hero_hoodwink/hoodwink_bushwhack_target.vpcf"
	/**
	 * The drag of `unit` netted at the game time `since` to the tree at `tree`: straight to it at
	 * `PullSpeed`, a step every tick from the one after the net caught it, until `TreeOffset` and
	 * its hull from the tree's middle; none for a unit already that near.
	 */
	public static PullOf(unit: Unit, tree: Vector3, since: number): Nullable<Motion>
	/**
	 * The living trees - map and temporary - within the trap radius of `position`, into `out`: a
	 * net landing there ties the units it catches to them; none - it catches no one. The server
	 * looks a little farther; the trap radius is the sure part of it. A `reach` of its own looks
	 * farther - for a tree a net may land between a unit and.
	 * @example
	 * const catches = bushwhack.TreesNear(enemy.Position, []).length !== 0
	 */
	public TreesNear(position: Vector3, out: Entity[], reach?: number): Entity[]
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The net deals its damage only as it ticks, while it holds: each 0.3 s from as it catches, none
	 * as it ends, `total_damage` split over the ticks of the whole `debuff_duration` - fewer under
	 * the unit's status resistance, each the same. The 0.3 s is not in the data. It catches only
	 * a unit with a tree in the net (`TickChance`). The 0.3 s is the server's own: the net thinks
	 * every frame and deals a tick for each whole 0.3 s since it caught, `damage_ticks` of them
	 * (server.dll, `CDOTA_Modifier_Hoodwink_Bushwhack_Trap`).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Whether the net cast at `target` catches it: a standing tree within `trap_radius` of it - none
	 * else, the net then holding no one.
	 */
	public TickChance(target: Unit, _tick: number): number
	/**
	 * The net flies to the point it was cast at and catches around it there: a circle, not a line.
	 * Read as a line, its flight ended a radius (265) and the target's hull short of the point - the
	 * catch expected 0.22 s before it comes (20 October 2026, demo: from 657 the net caught 0.53 s
	 * after the cast, 0.51 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
	public get AppliesUnitState(): bigint
}
