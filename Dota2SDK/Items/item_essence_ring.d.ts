// AUTO-GENERATED - do not edit.
declare class item_essence_ring extends Item implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly ManaRestoreModifierName = "modifier_item_essence_ring_active"
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
