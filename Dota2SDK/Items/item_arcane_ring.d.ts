// AUTO-GENERATED - do not edit.
declare class item_arcane_ring extends Item implements IManaRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsManaRestore(): this is IManaRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
}
