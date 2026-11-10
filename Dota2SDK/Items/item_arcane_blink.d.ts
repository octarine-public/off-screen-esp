// AUTO-GENERATED - do not edit.
declare class item_arcane_blink extends item_blink implements IManaRestore<Unit>, IHealthRestore<Unit> {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
}
