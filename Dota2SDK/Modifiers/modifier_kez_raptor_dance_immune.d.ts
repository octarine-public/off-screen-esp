// AUTO-GENERATED - do not edit.
declare class modifier_kez_raptor_dance_immune extends Modifier implements IBuff, IChannel {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ChannelModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsChannel(): this is IChannel
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
