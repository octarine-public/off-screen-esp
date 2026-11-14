// AUTO-GENERATED - do not edit.
declare class templar_assassin_refraction extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_templar_assassin_refraction_absorb"
	public readonly ShieldModifierName = "modifier_templar_assassin_refraction_absorb"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * Cast as the fight begins: its instances block the damage of the walk in and its bonus damage
	 * serves every swing. Waiting for her attack range as any buff on herself, it went there, after
	 * Psionic Trap - from 700 1.27 s into the fight, 0.06 s ahead of Meld (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/**
	 * Each instance takes a blow's damage whole, a stun of it landing all the same; how many of its
	 * `instances` are left is not counted.
	 */
	public get GuardsDamage(): boolean
}
