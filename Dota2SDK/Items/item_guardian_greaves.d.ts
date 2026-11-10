// AUTO-GENERATED - do not edit.
declare class item_guardian_greaves extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly ManaRestoreModifierName = "modifier_item_mekansm_noheal"
	public readonly HealthRestoreModifierName = "modifier_item_mekansm_noheal"
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	/** Its cast lays a basic dispel on its caster. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
