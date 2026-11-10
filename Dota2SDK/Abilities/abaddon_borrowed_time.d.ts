// AUTO-GENERATED - do not edit.
/** Borrowed Time: the damage Abaddon takes heals him while it lasts - a shield on himself. */
declare class abaddon_borrowed_time extends Ability implements IShield {
	public readonly ShieldModifierName = "modifier_abaddon_borrowed_time"
	public IsShield(): this is IShield
	/**
	 * Magical: the burn of its talent, the only damage it deals, takes the target's magic
	 * resistance; the data gives it no type.
	 */
	public get DamageType(): DAMAGE_TYPES
	/**
	 * With its talent, Borrowed Time burns the enemies around Abaddon while it lasts:
	 * `immolate_damage` a second over each `immolate_tick`, the first a tick after it begins, on
	 * for a tenth of a second after a unit walks out - its debuff's tenth, not in the data. None
	 * without the talent.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** Its cast, which a stun lets through, lays a strong dispel on Abaddon: stuns and hexes go too. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
