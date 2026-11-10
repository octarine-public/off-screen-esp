// AUTO-GENERATED - do not edit.
declare class item_cheese extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
