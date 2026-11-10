// AUTO-GENERATED - do not edit.
/**
 * Desolate's pure damage lands on a hero, creep or courier that has no hero or creep of its own
 * team, alive, not invulnerable and in the game, within `radius` of it - the hull of that company
 * counting.
 */
declare class modifier_spectre_desolate extends Modifier {
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public Remove(): boolean
	public PostDataUpdate(): void
	protected GetPreAttackBonusDamagePure(params?: IModifierParams): [number, boolean]
	/** On Spectre's illusion: the damage it deals more, `illusion_damage_outgoing` (a talent's). */
	protected GetDamageOutgoingPercentageIllusion(): [number, boolean]
	protected UpdateSpecialValues(): void
}
