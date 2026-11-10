// AUTO-GENERATED - do not edit.
/**
 * Bloodlust: Ogre Magi drives an ally - himself first, `self_bonus` more attack speed on him - into a
 * frenzy for `duration`: attack and movement speed. A buff cast at a unit of his side.
 */
declare class ogre_magi_bloodlust extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_ogre_magi_bloodlust"
	public IsBuff(): this is IBuff
	/**
	 * Its movement speed serves the walk into Fireblast's 525 and its attack speed the swings after
	 * the stuns: cast as the fight begins. Waiting for his attack range, it went after Fireblast
	 * and Unrefined Fireblast, 4 s into the fight from 700 (20 October 2026, demo, off Morphling).
	 */
	public get IsCombatBuff(): boolean
}
