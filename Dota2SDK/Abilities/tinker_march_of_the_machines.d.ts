// AUTO-GENERATED - do not edit.
declare class tinker_march_of_the_machines extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** A robot hits with `collision_radius`: the march's `radius` is the width its robots set out across. */
	public get ProjectileRadius(): number
	/** A robot flies no wider at its end. */
	public get ProjectileEndRadius(): number
	/**
	 * The robots of a march cast at the unit: `machines_per_sec` a second for `duration`, each
	 * setting out from the back of the march - `radius` behind the point it is cast at - along a
	 * lane of its own across its width and bursting for `damage` on the first enemy in its way: one
	 * at the unit by its chance (`TickChance`), the first `radius` at `speed` after the cast.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Chance a robot runs into `target` in the march: the robots' lanes that meet its hull -
	 * `collision_radius` to either side of it - out of the march's width, twice `radius`.
	 */
	public TickChance(target: Unit, _tick: number): number
}
