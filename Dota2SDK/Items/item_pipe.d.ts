// AUTO-GENERATED - do not edit.
declare class item_pipe extends Item {
	/** Its barrier keeps `barrier_block` magical damage off the units round its bearer. */
	public BarrierOn(_target: Unit): number
	public get BarrierType(): DAMAGE_TYPES
	/** Its barrier stands `barrier_duration`. */
	public GuardDuration(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Its barrier goes on every unit of its bearer's side within its radius. */
	public get GuardsAllies(): boolean
}
