// AUTO-GENERATED - do not edit.
/**
 * The crack runs `crack_distance` from Elder Titan toward the point and closes along its whole
 * length at once, `crack_time` after the cast point: its `speed` only draws it. On Chaos Knight
 * (20 October 2026, demo) it hit 2.73s after the cast point from 300, 654 and 1460 off, and
 * `crack_width` is half its width: 309 off the line it hit, 322 off it missed.
 */
declare class elder_titan_earth_splitter extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/** The crack closes whole: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
}
