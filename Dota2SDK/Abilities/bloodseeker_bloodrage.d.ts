// AUTO-GENERATED - do not edit.
/**
 * Bloodrage: Bloodseeker rages for `duration` - a buff on himself, cast at nothing and at once: he
 * attacks faster, his spells hit harder (`spell_amp`), and his attacks burn the target's health
 * with the Shard (`max_health_dmg_pct`).
 */
declare class bloodseeker_bloodrage extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_bloodseeker_bloodrage"
	public IsBuff(): this is IBuff
	/**
	 * Its spell amplification serves the spells his fight opens with, cast from afar, and its attack
	 * speed the swings after them: cast as the fight begins. Waiting for his attack range, it went
	 * after them - Blood Rite landed for 265 and Rupture for 15% of the target's health, both 30%
	 * more with it on (345, Rupture 394 of 2021); from 1300 it came 4.5 s after Blood Rite (19 October
	 * 2026, demo).
	 */
	public get IsCombatBuff(): boolean
}
