// AUTO-GENERATED - do not edit.
/**
 * Poison Touch: a cone of poison from Dazzle toward the unit cast at, `end_distance` long, slows
 * and burns what it strikes. Cast by his soul of Nothl Projection (`IsCastBySoul`) it hexes them
 * too, for the projection's `poison_touch_hex` (server: the hex comes with the poison when its
 * caster carries `modifier_dazzle_nothl_projection_soul_clone`); measured in the demo, 20 October
 * 2026: the soul's cast hexed Chaos Knight 1.8 s at the projection's third level, the body's never.
 */
declare class dazzle_poison_touch extends Ability {
	public get ProjectileAttachment(): string
	public get EndRadius(): number
	/**
	 * How far the cone reaches: `end_distance`. A unit is cast at from the data's cast range -
	 * 800 at the fourth level: ordered from 875, Dazzle walked to 814 first (20 October 2026).
	 */
	public get Range(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * Poison Touch deals its damage only as it ticks: `damage` each second, the first as it lands,
	 * the last as it ends. The second between ticks is not in the data, which gives `damage` a
	 * second.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Dazzle_Poison_Touch` thinks every
	 * 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
	/** Whether its caster is Dazzle's soul of Nothl Projection: then it hexes what it strikes. */
	public get IsCastBySoul(): boolean
	/** A hex, cast by the soul (`IsCastBySoul`); nothing else holds what it strikes. */
	public get AppliesUnitState(): bigint
	/** The hex lasts the `poison_touch_hex` of its caster's Nothl Projection; none without one. */
	protected AppliedFrom(_values: ISpecialValues, _level: number): number
	/** Its poison slows the unit it hits by `slow` percent for `duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
