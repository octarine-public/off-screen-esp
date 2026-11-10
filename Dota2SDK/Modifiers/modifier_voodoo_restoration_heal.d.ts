// AUTO-GENERATED - do not edit.
declare class modifier_voodoo_restoration_heal extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected readonly DeclaredEvents: EModifierfunction[]
	/** An ally in the aura heals `heal` a second, beyond its regeneration; an enemy, nothing. */
	public get HealPerSecond(): number
	/**
	 * The aura renews it while its unit stands in it: it lasts as long - the end of its short
	 * `Duration` the client sees is past already.
	 */
	public RemainingAt(_time: number): number
	protected UpdateSpecialValues(): void
}
