// AUTO-GENERATED - do not edit.
declare class razor_plasma_field extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/** The wave on its way out: more the farther out it is as it reaches the unit. */
	public GetRawDamage(target: Unit): number
	/**
	 * The wave on its way back strikes the unit again (`TickBonus`), when it reaches it
	 * (`ReachesAfter`); none at a unit that walks away meanwhile.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/**
	 * Back, it strikes as far out as it was the frame before it passed the unit - the server's
	 * previous radius - a frame's way in from it at the most.
	 */
	public TickBonus(target: Unit): number
	/**
	 * Seconds after the cast the wave on its way back reaches `target`: it grows at its radius over
	 * half of `total_ability_time` out to 100 past the radius - the server's search margin - and
	 * shrinks back as fast.
	 */
	public ReachesAfter(target: Unit): number
}
