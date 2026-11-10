// AUTO-GENERATED - do not edit.
/** Sidekick - the facet's: a buff on an allied hero (`modifier_marci_guardian_buff`), never on Marci. */
declare class marci_guardian extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_marci_guardian_buff"
	public IsBuff(): this is IBuff
	public CanTarget(unit: Unit): boolean
}
