// AUTO-GENERATED - do not edit.
declare class viper_nose_dive extends Ability {
	public get StartHeight(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * Its blow where she lands: the one tick of Corrosive Skin it lays on the units around - its
	 * `damage` at the skin's own level, at once with the dive's Aghanim's Scepter; the skin is gone a
	 * moment after, its next ticks never come. The dive has no damage of its own in the data.
	 */
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The pool it lays where she lands: Nethertoxin's, at its own level, hurting the units in it while
	 * they stand there (`viper_nethertoxin.DamageOverTime`).
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/**
	 * The pool, once it lies, is Nethertoxin's own field - seen and answered as Nethertoxin's - so the
	 * dive lays none of its own.
	 */
	public get LaysField(): boolean
	/**
	 * Viper dives to the point it was cast at and corrodes around it where she lands: a circle, not
	 * a line. Read as a line, the dive ended a radius (500) and the target's hull short of the
	 * point - the landing expected 0.75 s before it comes (20 October 2026, demo: from some 650 she
	 * landed 0.90 s after the cast, 0.93 s the whole way).
	 */
	public get SkillShotType(): ESkillShotType
}
