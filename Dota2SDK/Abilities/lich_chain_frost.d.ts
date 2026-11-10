// AUTO-GENERATED - do not edit.
declare class lich_chain_frost extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/** How fast the orb flies on from one unit to the next: slower than to the first (`Speed`). */
	public get BounceSpeed(): number
	/**
	 * The orb's flight to the unit it is cast at (`initial_projectile_speed`): the bounces after it
	 * fly slower (`BounceSpeed`). Timed by the bounce speed, its first hit from 750 off was
	 * timed 0.88 s instead of 0.71 s (20 October 2026).
	 */
	public GetBaseSpeedForLevel(level: number): number
	/** Each unit it hits is slowed by `slow_movement_speed` percent for `slow_duration`. */
	protected FillSpeedChangesOn(out: AbilityEffects, target: Unit): void
}
