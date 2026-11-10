// AUTO-GENERATED - do not edit.
/**
 * Fire Shield (the Shard): Ogre Magi wraps an ally - himself too - in a shield for `duration` that
 * takes the next `attacks` attacks for less and burns the attacker for `damage`. A shield cast at a
 * unit of his side, not a nuke: the damage is the attacker's, not the target's. Not a buff that
 * opens the fight (`IsCombatBuff`): what it takes are the swings of a melee fight, so it waits for
 * his attack range. Cast as the fight began, it went before Fireblast while he walked into its 525 -
 * from 700, at 0.77 s, the stun at 1.63 (20 October 2026, demo, off Morphling).
 */
declare class ogre_magi_smash extends Ability implements IShield {
	public readonly ShieldModifierName = "modifier_ogre_magi_smash_buff"
	public IsShield(): this is IShield
}
