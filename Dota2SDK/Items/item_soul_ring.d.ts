// AUTO-GENERATED - do not edit.
declare class item_soul_ring extends Item implements IHealthCost, IManaRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public GetManaRestore(_target: Unit): number
	public IsHealthCost(): this is IHealthCost
	public IsManaRestore(): this is IManaRestore<Unit>
}
