// AUTO-GENERATED - do not edit.
declare class windrunner_powershot extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * Its damage at `target` after the units on the arrow's way: it loses `damage_reduction` percent
	 * of what is left on each enemy unit it passes before the target - a hero, a creep, Roshan alike;
	 * a tree it cuts takes nothing (`PassedUnitsBefore`). The arrow flies from the owner toward where
	 * the cast is aimed (`IDamageContext.From`), the target else, landing at `context`'s `Time`, now
	 * by default. A full channel: let go sooner, it deals that share of the channel.
	 */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
	/** The arrow leaves when the channel ends; a full channel by default. */
	public GetBaseActivationDelayForLevel(level: number): number
}
