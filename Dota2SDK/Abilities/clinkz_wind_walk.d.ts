// AUTO-GENERATED - do not edit.
/**
 * Skeleton Walk: Clinkz fades for `fade_time` and walks hidden and faster until he attacks or uses
 * an item - his spells leave it on (Strafe, Death Pact, Burning Army), Burning Barrage's arrows end
 * it. As it ends, `skeleton_count` Skeleton Archers stand around him, up to `skeleton_offset` off -
 * four at 250 ahead, 150 left, 150 behind and 250 right of his facing - immobile, of his attack
 * range. In the fade nothing ends it - an attack, a Scythe of Vyse, Burning Barrage cast then did
 * not; the next swing after the fade did. A Scythe of Vyse cast from 815 after it ended it and set
 * the archers down 594-964 off the target (19-20 October 2026, demo).
 */
declare class clinkz_wind_walk extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_clinkz_wind_walk"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	/**
	 * Cast as the fight begins: Clinkz walks in hidden and faster, and the swing that ends it sets
	 * his archers down by the target. Waiting for his attack range, it went only there, its fade
	 * spent standing (19 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public get RevealSummonRadius(): number
	public GetBaseActivationDelayForLevel(level: number): number
}
