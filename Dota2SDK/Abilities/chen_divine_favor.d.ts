// AUTO-GENERATED - do not edit.
/**
 * Divine Favor: cast at an ally, a buff of armor and healing for `duration`
 * (`modifier_chen_divine_favor_armor_buff`); cast at Chen, every unit he controls gets it too. Its
 * passive aura lays its own `modifier_chen_divine_favor` on everyone around him all the while -
 * not the buff: taken for it, the buff was never cast, as if it still lay on Chen (19 October
 * 2026, demo).
 */
declare class chen_divine_favor extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_chen_divine_favor_armor_buff"
	public IsBuff(): this is IBuff
	public GetBaseAOERadiusForLevel(level: number): number
}
