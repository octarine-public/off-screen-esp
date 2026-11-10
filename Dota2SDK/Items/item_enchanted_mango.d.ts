// AUTO-GENERATED - do not edit.
declare class item_enchanted_mango extends Item implements IManaRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public IsManaRestore(): this is IManaRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
