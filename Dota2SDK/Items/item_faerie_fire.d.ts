// AUTO-GENERATED - do not edit.
declare class item_faerie_fire extends Item implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
