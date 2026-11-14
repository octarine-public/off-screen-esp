// AUTO-GENERATED - do not edit.
declare class legion_commander_press_the_attack extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_legion_commander_press_the_attack"
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** Its cast lays a strong dispel on its target: stuns and hexes go too. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
