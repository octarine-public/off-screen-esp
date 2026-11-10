// AUTO-GENERATED - do not edit.
declare class luna_lunar_orbit extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_luna_moon_glaive_shield"
	public readonly ShieldModifierName = "modifier_luna_moon_glaive_shield"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * Its glaives cut what Luna walks into and its damage cut - and the Shard's speed - serve the
	 * run in: cast as the fight begins, without a cast point or a stop of her walk. Waiting for her
	 * attack range, it went last, 0.1 s after Eclipse (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
}
