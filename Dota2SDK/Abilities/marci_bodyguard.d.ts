// AUTO-GENERATED - do not edit.
/**
 * Bodyguard: a barrier on an allied hero (`modifier_marci_bodyguarded`) and Marci's damage and
 * lifesteal beside it - never on Marci herself: the game lost the order at her twice (20 October
 * 2026, the hero demo).
 */
declare class marci_bodyguard extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_marci_bodyguarded"
	public IsBuff(): this is IBuff
	public get Duration(): number
	public CanTarget(unit: Unit): boolean
}
