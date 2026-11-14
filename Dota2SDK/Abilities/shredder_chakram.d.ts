// AUTO-GENERATED - do not edit.
declare class shredder_chakram extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The blade's spin where it stops: `damage_per_second` a second over each `damage_interval`,
	 * the first 0.73 s after it arrives (not in the data), while Timbersaw's mana pays
	 * `mana_per_second` for it (`ChakramOverTime`); none after a unit walks out of `radius`. Its pass
	 * back is not counted: when it is called back is not known.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** The spin as `DamageOverTime` has it, for as long as `mana` pays for it. */
	public ChakramOverTime(out: DamageTicks, level: number, mana: number): boolean
	/**
	 * The saw spins until Timbersaw calls it back (Return Chakram) or his mana runs out: how long is
	 * his to choose, the spin's `Duration` only the longest his mana pays for - 73 s at 3475 damage
	 * with a full pool in the hero demo, none of it the cast's own.
	 */
	public get KeepsField(): boolean
	/**
	 * The saw flies to the point it was cast at and spins there, harming around it: a circle, not
	 * a line.
	 */
	public get SkillShotType(): ESkillShotType
	/**
	 * The thinker of the saw of this cast spinning where it came down, or none while it flies out
	 * or back, or lies nowhere: Return Chakram shows from the cast on, the thinker only once the saw
	 * is there - cast 920 off, 1 s after the order (21 October 2026, the hero demo).
	 * @example
	 * const saw = chakram.Spinning
	 * const away = saw === undefined || saw.Distance2D(enemy) > chakram.AOERadius
	 */
	public get Spinning(): Nullable<Unit>
	public GetBaseCastPointForLevel(level: number): number
}
