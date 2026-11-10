// AUTO-GENERATED - do not edit.
declare class modifier_kunkka_x_marks_the_spot extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/**
	 * Where the bearer stood as the mark came on it: Return, or the mark's end, sets it back there.
	 * The game keeps the spot on a thinker the client never sees, so it is noted as the mark comes.
	 */
	public get Spot(): Vector3
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected OnAdded(): void
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
