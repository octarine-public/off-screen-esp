// AUTO-GENERATED - do not edit.
declare class skeleton_king_bone_guard extends Ability {
	/**
	 * How many skeletons a cast raises now: the charges Wraith King gathered by kills - the stacks
	 * of his `modifier_skeleton_king_bone_guard` - but no fewer than `min_skeleton_spawn`, a
	 * talent's. None - the cast spends its mana and its cooldown for nothing: with no charge it
	 * took 95 mana and 42 s of cooldown and raised no skeleton (21 October 2026, demo).
	 * @example
	 * const worthIt = boneGuard.SkeletonCount > 0
	 */
	public get SkeletonCount(): number
}
