// AUTO-GENERATED - do not edit.
/**
 * Burning Army, of Aghanim's Scepter: `count` Skeleton Archers in a row cast along a vector - the
 * first on its first point, one every `spawn_interval` on along the way to the second, `range` end
 * to end - immobile, of Clinkz's attack range (19 October 2026, demo: six from 450 short of the
 * target to beyond it, 178 apart). Cast as a plain point it runs from there back past Clinkz.
 */
declare class clinkz_burning_army extends Ability {
	/** Cast the way its caster stands: it turns to nothing (`Ability.RequiresFacing`). */
	public get RequiresFacing(): boolean
	/** How long the row is, its first archer to its last. */
	public get Length(): number
	public GetBaseAOERadiusForLevel(_level: number): number
	/** The archers appear along the line at once. */
	public get SkillShotType(): ESkillShotType
	/** Cast from Skeleton Walk, it keeps Clinkz hidden: the walk went on (19 October 2026, demo). */
	public get KeepsInvisibility(): boolean
}
