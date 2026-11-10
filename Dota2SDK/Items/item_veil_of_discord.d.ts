// AUTO-GENERATED - do not edit.
declare class item_veil_of_discord extends Item implements IDebuff {
	public readonly DebuffModifierName = "modifier_item_veil_of_discord_debuff"
	/** The enemies in its area take more spell damage while it lasts. */
	public IsDebuff(): this is IDebuff
	public get IsAmplifier(): boolean
	/** The enemies in its area take more spell damage (`spell_amp`): the damage of any ability or item cast. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Landed on an enemy first, its debuff adds `spell_amp` percent to the damage of spells `target`
	 * takes, summed with the other damage it takes more of (`IncomingAmplification`: Track's,
	 * Hunter's Mark's): none on one wearing it already - it renews, not stacks - nor on one magic
	 * immune or in a Bloodstone's aura, which its debuff spares.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
}
