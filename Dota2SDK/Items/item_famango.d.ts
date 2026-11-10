// AUTO-GENERATED - do not edit.
declare class item_famango extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	protected GetRestoreModifier(owner: Nullable<Unit>, baseValue: number): number
}
