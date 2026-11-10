// AUTO-GENERATED - do not edit.
/**
 * Veil of Discord's Spell Weakness: the unit takes `spell_amp` percent more of the damage of
 * spells, beside the other damage it takes more of (`INCOMING_DAMAGE_PERCENTAGE`, summed with
 * them: Track's) - none of an attack's, none in a Bloodstone's aura.
 */
declare class modifier_item_veil_of_discord_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
