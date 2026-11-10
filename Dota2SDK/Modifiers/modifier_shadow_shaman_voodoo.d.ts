// AUTO-GENERATED - do not edit.
declare class modifier_shadow_shaman_voodoo extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetMoveSpeedBaseOverride(): [number, boolean]
	protected GetIncomingDamagePercentage(): [number, boolean]
	/**
	 * Fowl Play hexes Shadow Shaman himself with this modifier as he takes lethal damage: the speed
	 * override is for an enemy alone, and Fowl Play has no `movespeed` - reading it threw on every
	 * such hex (21 October 2026, demo).
	 */
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
	public get IsPurgeException(): boolean
}
